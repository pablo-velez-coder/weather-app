import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useForecast } from 'context/provider';
import { DayItem } from 'interfaces';
import FilterInput from 'components/common/filterInput/filterInput';
import styles from './styles.module.scss'
import { capitalize } from 'utils/string';

export const CitiesTable = () => {
  const navigate =  useNavigate()
  const {setCityName, getSearchedCities:data} = useForecast();
  const [nameText, setNameText] = useState('');

  const HandleClick = (item: DayItem) =>{
        setCityName(item.cityName)
        navigate(`/${item.cityName}`)
  }
  
  const filteredData = useMemo(()=>{
        return [...data].filter(item => {
            return item.cityName.toLowerCase().includes(nameText.toLowerCase()) 
        })
  },[data,nameText])

  return (
      <>
     {data.length >0 &&  <FilterInput 
        value={nameText}
        handleChange={(e: React.ChangeEvent<HTMLInputElement>) => setNameText(e.target.value)}
        />}

     {(!filteredData.length && !!data.length) && <p>No searches matched</p>}   
        <table className={styles.cities__table} width="100%">
        <tbody>
          {filteredData.map((item, i) => (
            <tr 
            data-testid="table-item"
            className={styles.cities__row}
            onClick={()=> HandleClick(item)}
            key={i}>
              <td
              >
                {capitalize(item.cityName)}
              </td>
              <td >
                {capitalize(item.city.current.weather[0].description)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </>
    )
}
