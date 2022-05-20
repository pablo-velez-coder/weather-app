
import {CitiesTable} from 'components/table/table'
import {Header} from 'components/common/header'
import styles from './styles.module.scss'

const Cities = () => {
    
  return (
      <>
        <Header />
        <div className={styles.cities}>
        <div className={styles.cities__list}>
        <h2>Recent searches:</h2>  
            <CitiesTable  />
        </div>
        </div>
      </>
    )
}

export default Cities
