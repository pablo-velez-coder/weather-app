import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CitiesRoutes from './CitiesRoutes';

const AppRouter = () => {
  
    return (
        <Router>
                <Routes>
                     <Route  path='*' element={<CitiesRoutes />} />
                </Routes>            
        </Router>
    )
}

export default AppRouter
