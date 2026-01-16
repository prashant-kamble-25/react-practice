import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../Pages/Home';
import About from '../Pages/About';
import Dashboard from '../Pages/Dashboard/Dashboard';
function BasicRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                {/* <Route path='/dashboard' element={<Dashboard />} /> */}
            </Routes>
        </BrowserRouter>
    )
}
export default BasicRoutes;