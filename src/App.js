import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/css/Style.css'
import '../src/css/Font.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Layout from './layout/Layout';
import Designer_Cake from './pages/Designer_Cake';
import Birthday_cake from './pages/Birthday_cake';
import Occasional_Cake from './pages/Occasional_Cake';
import '../src/css/Mediya.css'
import S_layout from './layout/S_layout';
import 'animate.css';
import Pastry_Cake from './pages/Pastry_Cake';
import New_Ins from './pages/New_Ins';
import Cart from './pages/Cart';
import Heart from './pages/Heart';
import User from './pages/User';
import Registration from './pages/Registration';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
              <Route  element={<Layout />} >
                <Route path='/' element={<Home />} />
              </Route>
              <Route  element={<S_layout />} >
                <Route path='/Designer Cakes' element={<Designer_Cake />} />
                <Route path='/Birthday Cakes' element={<Birthday_cake />} />
                <Route path='/Occasional Cakes' element={<Occasional_Cake />}/>
                <Route path='/Pastry Cakes' element={<Pastry_Cake/>} />
                <Route path='/New Ins' element={<New_Ins />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/heart' element={<Heart />} />
                <Route path='/user' element={<User />} />
                <Route path='/registration' element={<Registration />} />
                <Route path='/login' element={<User />} />

              </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
