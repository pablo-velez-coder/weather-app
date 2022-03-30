export interface ICity {
    current:Day;
    daily: Day[] | null;
    timezone: string;
}

export type Day = {
    clouds?: number | null;
    dew_point?: number | null;
    dt?: number | null;
    feels_like?: any;
    humidity?: number | null;
    pressure?: number | null;
    sunrise?: number | null;
    sunset?: number | null;
    temp?: any;
    uvi?: number | null;
    visibility?: number | null;
    wind_deg?: number | null;
    wind_speed?: number | null;
    weather: Weather[];
}

type Weather = {
    description:string;
    icon: string;
    id: number | null;
    main: string;
}

export type DayItem = {
    city: ICity,
    cityName: string
  }