import { useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useForecast } from 'context/provider';
import { DetailsSkeleton } from 'components/detailsSkeleton';
import { CityDetailsInfo } from 'components/cityDetailsInfo';
import styles from './styles.module.scss'

const CityDetails = () => {

  const navigate = useNavigate()
  const {loading, cleanDetails, searchError, cleanError} = useForecast();  

  useEffect(() => () => cleanDetails(), [cleanDetails]);

  const handleBackError = () => {
    navigate(-1)
    cleanError()
  }

  const goBackError = () =>{
        return (
            <section>
            Sorry, that city doesn't exist, please go back
            <button onClick={handleBackError}>
                Go back
            </button>
        </section>  
        )
   }

   return (
        <div className={styles.cityDetails}>
            {searchError ? goBackError() : (
            loading ? <DetailsSkeleton />: <CityDetailsInfo />
        )}
     </div>
    )
}

export default CityDetails
