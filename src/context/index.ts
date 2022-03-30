import {createContext} from 'react'
import { ICity } from 'interfaces';

export const initialContextobj = {
    cityName: '',
    getSearchedCities: [],
    searchError:false,
    cityDetails: {
        current:{
            clouds: null,
            dew_point: null,
            dt: null,
            feels_like: null,
            humidity: null,
            pressure: null,
            sunrise: null,
            sunset: null,
            temp: null,
            uvi: null,
            visibility: null,
            wind_deg: null,
            wind_speed: null,
            weather: []
        },
        daily: null,
        timezone: '',
    },
    loading:false,
    searchedCities:{},
    cleanDetails: ()=>{},
    setCityName: ()=> {},
    cleanError: ()=>{}
  }
  
export const ForecastContext =  createContext<{
    cityName: string,
    searchError:boolean,
    cityDetails: ICity | null,
    loading:boolean,
    getSearchedCities: {
        city: ICity;
        cityName: string;
    }[],
    searchedCities: Record<string, {
        city: ICity,
        cityName: string
    }>
    cleanDetails: ()=>void,
    setCityName: (city:string)=> void,
    cleanError:()=> void;

}>(initialContextobj);