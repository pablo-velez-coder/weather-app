import { ICity} from "../interfaces";
import { Axios } from "./config";

export const API_KEY = 'cf53893d93414d0e98cabc620021f64f';

export const getOneCall = async (lat:number, lon:number): Promise<ICity | undefined> =>{
    try {
        const response = await Axios(`onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}`) 
        const {data, status} = await response
        const {current,daily, timezone} = await data
        const finalData: ICity = {current,daily, timezone}
        
        if(status=== 200){
            return finalData
        }
    } catch (error) {
       throw (error)
    }
}


export const getCityByName = async (cityName:string) =>{
    try {
        const response = await Axios(`find?q=${cityName}&appid=${API_KEY}`) 
        const {data, status} = response
        if(status=== 200){
            return data
        }
    } catch (error) {
        return {status: 400, error}
    }
}