import { Link} from 'react-router-dom'
import { SearchBox } from '../searchbox'
import styles from './styles.module.scss'

export const Header = () => {

    return (
        <header aria-label="weather-world-app">
          <div className={styles.header__top}>
          <Link
            className={styles.header__brand}
            to='/'
            >
            <h1
            data-testid="app-title"
            className={styles.header__brandTitle}
            >Weather World  </h1>
            </Link>       
          </div>
          <div>
          <SearchBox />
          </div>
        </header>
    )
}

