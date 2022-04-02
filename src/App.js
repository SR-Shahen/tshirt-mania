
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Componants/Home/Home';
import Order from './Componants/Orders/Order';
import About from './Componants/About/About';
import NotFound from './Componants/NotFound/NotFound';
import Header from './Componants/Header/Header';
import Inventory from './Componants/Inventory/Inventory';
import Grandapa from './Componants/Grandpa/Grandapa';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/orders' element={<Order></Order>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/grandpa' element={<Grandapa></Grandapa>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
