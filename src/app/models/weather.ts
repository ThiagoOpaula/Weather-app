export class Weather {
  request: [
    query:string,
  ]
  location: [
    name:string,
    country:string,
  ]
  current: [
    observation_time:string,
    weather_code:number,
    temperature:number,
    wind_speed:number,
    wind_dir:number,
    feelslike:number,
    uv_index:number,
    visibility:number,
    is_day:string,
    precip:number,
    humidity:number,
  ]
}
