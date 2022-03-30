import { Day } from 'interfaces';
import styles from './styles.module.scss'

interface Props {
    cityData: Day
}

const CityCard: React.FC<Props> = ({cityData}: Props) => {

    const date = cityData?.dt ? new Date(cityData.dt * 1000) : new Date();
    const day = date?.toDateString().split(' ')[0]
    const minTemp =  (cityData?.temp?.min -273.15).toFixed(2)
    const maxTemp = ( cityData?.temp?.max -273.15).toFixed(2)

    return (
        <div className={styles.cityCard}
        >
           <h3> {day}</h3>
            <p  data-testid="min-temp">
                {minTemp}<span>&#x2103;</span>
            </p>
         <img 
            alt='city'
            src={`http://openweathermap.org/img/wn/${cityData.weather[0].icon}.png`}
         />
             <p data-testid="max-temp">
                {maxTemp} <span>&#x2103;</span>
            </p>
        </div>
    )
}

export default CityCard
