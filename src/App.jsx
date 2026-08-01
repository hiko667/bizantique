import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import MapPage from './pages/MapPage';
import DataBasePage from './pages/DataBasePage';


export default function App() {

    return (
    <div className='overflow-hidden bg-secondary text-light d-flex flex-column' style={{width : "100vw", height : "100vh"}}>
        <BrowserRouter>
                <Menu/>
                <Routes>
                    <Route path = "*" element = {<MapPage/>}/>
                    <Route path = "/data" element = {<DataBasePage/>}/>
                </Routes>
        </BrowserRouter>
    </div>
    )
}


