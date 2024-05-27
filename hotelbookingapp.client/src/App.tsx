import { NavLink, Outlet, useLocation } from 'react-router-dom';
import CityDropDownList from './components/hotels/CityDropDownList';
import HotelTable from './components/hotels/HotelTable';
function App() {

    const location = useLocation();

    return (
        <>
            {location.pathname === '/' ? (
                <>
            <div className="ui centered inverted menu">
                <div>
                    <CityDropDownList/>
                </div>
                <a className="item right floated" target="_blank" style={{ fontSize: '20px' }}>
                    <NavLink to="viewBookings">Peržiūrėti rezervacijas</NavLink>
                </a>    
            </div>
            <h1 className="ui centered inverted header" style={{ fontSize: '50px', marginTop: '35px'}}>Viešbučių rezervavimo tinklalapis</h1>
            <HotelTable/> </>) : (
                    <Outlet />
            )}
        </>
    )
}

export default App;