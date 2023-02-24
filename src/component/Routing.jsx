import {Routes,Route} from 'react-router-dom';
import Login from './Login'
import Dashboard from './Dashboard'

const Routing=()=>{
    return(
        <div className='container'>
            <Routes>
                <Route path='/' exact element={<Login/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
            </Routes>

        </div>
    )
}
export default Routing;