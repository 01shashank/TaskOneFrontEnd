import logo from './logo.svg';
import './App.css';
import Login from './component/Login'
import {BrowserRouter} from 'react-router-dom'
import RoutingFunc from './component/Routing';

function App() {
  return (
    <BrowserRouter>
      <RoutingFunc/>
    </BrowserRouter>
  );
}

export default App;
