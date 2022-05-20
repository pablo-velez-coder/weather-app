import CityCard from 'components/common/cityCard/cityCard';
import { useForecast } from 'context/provider';
import { Day} from 'interfaces';
import { useState } from 'react';
import styles from './styles.module.scss';

export const CityDetailsList= () => {

  const {cityDetails} = useForecast();  
  const [numberOfDays, setNumberOfDays] = useState<number>(7);

  return (
  <>
    <input
    type="number"
    value={numberOfDays}
    onChange={e=> setNumberOfDays(Number(e.target.value))}
    />
  <div
  className={styles.cityDetails__list}>

      {cityDetails?.daily?.slice(0,numberOfDays).map((item: Day,id) => (
          <CityCard
          key={id}
          cityData={item}
          />
      ))}
  </div>
  </>);
};