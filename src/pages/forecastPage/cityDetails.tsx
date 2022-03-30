import { useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useForecast } from 'context/provider';
import { Day } from 'interfaces';
import {
    LeftOutlined,
  } from '@ant-design/icons';
import CityCard from 'components/common/cityCard/cityCard';
import dayjs from 'dayjs'
import { Skeleton } from 'antd';
import { capitalize } from 'utils/string';
import styles from './styles.module.scss'

const CityDetails = () => {

  const navigate = useNavigate()
  const {cityDetails, cityName, loading, cleanDetails, searchError, cleanError} = useForecast();  
  const currentInfo = cityDetails?.current
  const currentTemperature = (currentInfo?.temp -273.15).toFixed(2)
  const currentFeelsLike =  (currentInfo?.feels_like - 273.15).toFixed(2)
  const currentDescription = currentInfo?.weather[0].description
  const currentIcon = currentInfo?.weather[0]?.icon
  const currentDay = dayjs(Date()).format('DD MMMM [of] YYYY')

   useEffect(() => {
        return () => {
        cleanDetails()
        }
   }, [cleanDetails]);

    const handleBackError = ( ) =>{
        navigate(-1)
        cleanError()
    }

   return (
        <div className={styles.cityDetails}>
            {searchError ? <section>
                Sorry, that city doesn't exist, please go back
                <button onClick={handleBackError}>
                    Go back
                </button>
            </section>: (
            loading ? (
            <>
            <Skeleton  active />
            <Skeleton.Button style={{width:'90vw', height:'163px'}} active size='large' shape="round"  />
            <div className={styles.cityDetails__list}>
            {Array(7).fill( 1).map((_, i)=>(<Skeleton.Button key={i} style={{width:'95px', height:'197px'}} active size='large' shape="round" />))}
            </div>
            </>
        ): (
        <>
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
        <div
        className={styles.cityDetails__list}>
            {cityDetails?.daily?.slice(0,7).map((item: Day,id) => (
            <CityCard
            key={id}
            cityData={item}
            />
            ))}
        </div>
        </>
        )
        )}
     </div>
    )
}

export default CityDetails
