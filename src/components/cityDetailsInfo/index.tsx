import dayjs from 'dayjs'
import { useForecast } from 'context/provider';
import { useNavigate } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import { capitalize } from 'utils/string';
import { CityDetailsList } from 'components/cityDetailsList';
import styles from './styles.module.scss';

export const CityDetailsInfo = () => {

    const navigate = useNavigate()
    const {cityDetails, cityName} = useForecast();  
    const currentInfo = cityDetails?.current
    const currentTemperature = (currentInfo?.temp -273.15).toFixed(2)
    const currentFeelsLike =  (currentInfo?.feels_like - 273.15).toFixed(2)
    const currentDescription = currentInfo?.weather[0].description
    const currentIcon = currentInfo?.weather[0]?.icon
    const currentDay = dayjs(Date()).format('DD MMMM [of] YYYY')

    return  <>
        <div className={styles.cityDetails__place}>
        <div className={styles.cityDetails__place__info}>
            <h2>{capitalize(cityName)}</h2>
            <p>{cityDetails?.timezone.split('/')[0]}</p>
            <small>{currentDay}</small>
        </div>
        <div
        className={styles.cityDetails__back}
        onClick={()=> navigate(-1)}>
            <LeftOutlined />
        </div>
        </div>
        <div className={styles.cityDetails__current}>
            <div className={styles.cityDetails__current__left}>
                <div className={styles.cityDetails__current__left__image}>
                    <img 
                    alt='city'
                    src={`http://openweathermap.org/img/wn/${currentIcon}.png`}
                    />
                </div >
            <p>{capitalize(currentDescription || '')}</p>
        </div>
        <div className={styles.cityDetails__current__right}>
            <h3>
            {currentTemperature} <span>°</span>
            </h3>
            <p>  Feels like {currentFeelsLike} <span>&#x2103;</span></p>
        </div>
        </div>
        <div>
            <h2>Next 7 days</h2>
        </div>
        <CityDetailsList />
    </>;
};