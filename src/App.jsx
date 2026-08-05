import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import Menu from './components/Menu';
import MapPage from './pages/MapPage';
import DataBasePage from './pages/DataBasePage';
import FactionsPage from './pages/FactionsPage';
import RacesPage from './pages/RacesPage';
import EquipmentPage from './pages/EquipmentPages';

export default function App() {

    return (
    <div className='overflow-hidden bg-dark text-light d-flex flex-column' style={{width : "100vw", height : "100vh"}}>
        <HashRouter>
                <Menu/>
                <Routes>
                    <Route path = "*" element = {<Navigate to="/map" replace/>}/>
                    <Route path = "/map/" element = {<MapPage/>}/>
                    {/* <Route path = "/factions/" element = {<FactionsPage/>}/> */}
                    {/* <Route path = "/data" element = {<DataBasePage/>}/> */}
                    <Route path = "/races/" element = {<RacesPage/>}/>
                    <Route path = "/equipment/" element = {<EquipmentPage/>}/>
                </Routes>
        </HashRouter>
    </div>
    )
}