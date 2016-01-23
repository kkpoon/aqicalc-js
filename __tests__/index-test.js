jest.dontMock('../index');
jest.dontMock('d3');

var aqicalc = require('../index');

describe('aqicalc', function() {
  it('should be aqi=0, primary=PM2.5 when all zero value', function() {
    expect(aqicalc(0,0,0,0,0,0)).toEqual({aqi: 0, primary: "PM2.5"});
  });
  it('should be aqi=123, primary=SO2 when 300, 0, 0, 0, 0, 0', function() {
    expect(aqicalc(300, 0, 0, 0, 0, 0)).toEqual({aqi: 123, primary: "SO2"});
  });
  it('should be aqi=207, primary=NO2 when 0, 300, 0, 0, 0, 0', function() {
    expect(aqicalc(0, 300, 0, 0, 0, 0)).toEqual({aqi: 207, primary: "NO2"});
  });
  it('should be aqi=350, primary=PM10 when 0, 0, 460, 0, 0, 0', function() {
    expect(aqicalc(0, 0, 460, 0, 0, 0)).toEqual({aqi: 350, primary: "PM10"});
  });
  it('should be aqi=195, primary=CO when 0, 0, 0, 23, 0, 0', function() {
    expect(aqicalc(0, 0, 0, 23, 0, 0)).toEqual({aqi: 195, primary: "CO"});
  });
  it('should be aqi=108, primary=O3 when 0, 0, 0, 0, 216, 0', function() {
    expect(aqicalc(0, 0, 0, 0, 216, 0)).toEqual({aqi: 108, primary: "O3"});
  });
  it('should be aqi=283, primary=PM2.5 when 0, 0, 0, 0, 0, 233', function() {
    expect(aqicalc(0, 0, 0, 0, 0, 233)).toEqual({aqi: 283, primary: "PM2.5"});
  });
});
