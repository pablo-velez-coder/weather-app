import { Route, Routes} from 'react-router-dom';
import CityDetails from 'pages/forecastPage/cityDetails';
import Cities from 'pages/homePage/cities';
import styles from './styles.module.scss'

const CitiesRoutes = () => {
    return (
        <div className={styles.layout}>
        <Routes>
          <Route path='*' element={<Cities />} />
          <Route path='/:cityId' element={<CityDetails />} />
       </Routes>
        </div>
    )
}

export default CitiesRoutes
