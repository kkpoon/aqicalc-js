import * as d3Scale from "d3-scale";

const SO2_SCALE = [0, 50, 150, 475, 800, 1600, 2100, 2620];
const NO2_SCALE = [0, 40, 80, 180, 280, 565, 750, 940];
const PM10_SCALE = [0, 50, 150, 250, 350, 420, 500, 600];
const CO_SCALE = [0, 2, 4, 14, 24, 36, 48, 60];
const O3_SCALE = [0, 160, 200, 300, 400, 800, 1000, 1200];
const PM25_SCALE = [0, 35, 75, 115, 150, 250, 350, 500];
const IAQI_SCALE = [0, 50, 100, 150, 200, 300, 400, 500];

const Constrain = (min: number, max: number) => (x: number) =>
    x < min ? min : (x > max ? max : x);

const IAQI_Scale = d3Scale.scaleLinear<number, number>().range(IAQI_SCALE);

const AQI_Constraint = Constrain(0, 500);

export interface AirQualityIndexComponents {
    SO2: number;
    NO2: number;
    PM10: number;
    CO: number;
    O3: number;
    PM2_5: number;
}

export const ChinaAQICalc = (components: AirQualityIndexComponents) =>
    [
        { aqi: IAQI_Scale.domain(SO2_SCALE)(components.SO2), primary: "SO2" },
        { aqi: IAQI_Scale.domain(NO2_SCALE)(components.NO2), primary: "NO2" },
        { aqi: IAQI_Scale.domain(PM10_SCALE)(components.PM10), primary: "PM10" },
        { aqi: IAQI_Scale.domain(CO_SCALE)(components.CO), primary: "CO" },
        { aqi: IAQI_Scale.domain(O3_SCALE)(components.O3), primary: "O3" },
        { aqi: IAQI_Scale.domain(PM25_SCALE)(components.PM2_5), primary: "PM2.5" }
    ]
        .map((d) => Object.assign({}, d, { aqi: AQI_Constraint(d.aqi) }))
        .reduce((a, b) =>
            a.aqi <= b.aqi ?
                Object.assign({}, b, { aqi: Math.round(b.aqi) })
                : Object.assign({}, a, { aqi: Math.round(a.aqi) })
        );
