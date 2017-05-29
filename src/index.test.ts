import { ChinaAQICalc } from "./";

describe('aqicalc', function() {
    it('should be aqi=0, primary=PM2.5 when all zero value', () => {
        let data = { SO2: 0, NO2: 0, PM10: 0, CO: 0, O3: 0, PM2_5: 0 };
        expect(ChinaAQICalc(data)).toEqual({ aqi: 0, primary: "PM2.5" });
    });
    it('should be aqi=123, primary=SO2 when 300, 0, 0, 0, 0, 0', () => {
        let data = { SO2: 300, NO2: 0, PM10: 0, CO: 0, O3: 0, PM2_5: 0 };
        expect(ChinaAQICalc(data)).toEqual({ aqi: 123, primary: "SO2" });
    });
    it('should be aqi=207, primary=NO2 when 0, 300, 0, 0, 0, 0', () => {
        let data = { SO2: 0, NO2: 300, PM10: 0, CO: 0, O3: 0, PM2_5: 0 };
        expect(ChinaAQICalc(data)).toEqual({ aqi: 207, primary: "NO2" });
    });
    it('should be aqi=350, primary=PM10 when 0, 0, 460, 0, 0, 0', () => {
        let data = { SO2: 0, NO2: 0, PM10: 460, CO: 0, O3: 0, PM2_5: 0 };
        expect(ChinaAQICalc(data)).toEqual({ aqi: 350, primary: "PM10" });
    });
    it('should be aqi=195, primary=CO when 0, 0, 0, 23, 0, 0', () => {
        let data = { SO2: 0, NO2: 0, PM10: 0, CO: 23, O3: 0, PM2_5: 0 };
        expect(ChinaAQICalc(data)).toEqual({ aqi: 195, primary: "CO" });
    });
    it('should be aqi=108, primary=O3 when 0, 0, 0, 0, 216, 0', () => {
        let data = { SO2: 0, NO2: 0, PM10: 0, CO: 0, O3: 216, PM2_5: 0 };
        expect(ChinaAQICalc(data)).toEqual({ aqi: 108, primary: "O3" });
    });
    it('should be aqi=283, primary=PM2.5 when 0, 0, 0, 0, 0, 233', () => {
        let data = { SO2: 0, NO2: 0, PM10: 0, CO: 0, O3: 0, PM2_5: 233 };
        expect(ChinaAQICalc(data)).toEqual({ aqi: 283, primary: "PM2.5" });
    });
    it('should be aqi=0, primary=PM2.5 when -10, -1, -4, -3, -2, -1', () => {
        let data = { SO2: -10, NO2: -1, PM10: -4, CO: -3, O3: -2, PM2_5: -1 };
        expect(ChinaAQICalc(data)).toEqual({ aqi: 0, primary: "PM2.5" });
    });
    it('should be aqi=500, primary=PM2.5 when 10, 10, 10, 10, 10, 10000', () => {
        let data = { SO2: 10, NO2: 10, PM10: 10, CO: 10, O3: 10, PM2_5: 10000 };
        expect(ChinaAQICalc(data)).toEqual({ aqi: 500, primary: "PM2.5" });
    });
});
