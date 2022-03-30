import { useContext, useState, useEffect, useCallback } from 'react';
import {ForecastContext} from '.';
import { DayItem, ICity} from 'interfaces';
import { getCityByName, getOneCall } from 'services';

export const ForecastProvider = ({children}:{children:React.ReactElement})=>{

    const [cityName, setcityName] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [searchError, setSearchError] = useState<boolean>(false);
    const [cityDetails, setCityDetails] = useState<ICity | null>(null);
    const [searchedCities, setSearchedCities] = useState<Record<string, DayItem>>({});

    const fetchData = useCallback(async ()=>{
      setLoading(true)
      const res = await getCityByName(cityName)
      if(res.status && res.status ===400){
        setSearchError(true)
        return;
      }
      const {list} = res
      if(!list.length) {
        setSearchError(true)
        return;
      }
      const {lat, lon} = list[0].coord
      const city: ICity | undefined = await getOneCall(lat, lon)

      if(!city) return;

      setCityDetails(city)
      setSearchedCities((searchedCities:any) => ({
        ...searchedCities,
        [cityName]: {city, cityName }
      }))
      setLoading(false)
      },
    [cityName])
    
    useEffect(() => {
        if(searchedCities[cityName]){
          setCityDetails(searchedCities[cityName]['city'])
          return;
        }
        cityName && fetchData()
    }, [cityName, fetchData, searchedCities]);

    const cleanDetails = useCallback(() =>{
        setCityDetails(null)
        setSearchError(false)
        setcityName('')
    },[])

    const getSearchedCities = Object.values(searchedCities)

    const setCityName = (city:string)=>{
      setcityName(city)
    }

    const cleanError = () =>{
      setSearchError(false)
    }

    return (
        <ForecastContext.Provider value={{
          cityName,
          searchError,
          cityDetails,
          loading,
          searchedCities,
          getSearchedCities,
          cleanDetails,
          setCityName,
          cleanError
          }}>
            {children}
        </ForecastContext.Provider>
    )
}

export const useForecast = () => useContext(ForecastContext)