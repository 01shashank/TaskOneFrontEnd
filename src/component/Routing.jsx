import {Routes,Route} from 'react-router-dom';
import Login from './Login'
import Dashboard from './Dashboard'
import Home from './Home'
import AboutUs from './Aboutus'
import NotFound from './NotFound'
const Routing=()=>{
    return(
        <div className='container'>
            <Routes>
                <Route path='/' exact element={<Login/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/aboutus'  element={<AboutUs/>}/>
                <Route path='/notfound' element={<NotFound/>}/>
            </Routes>

        </div>
    )
}
export default Routing;