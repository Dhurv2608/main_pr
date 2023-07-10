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

import S_layout from './layout/S_layout';
import 'animate.css';
import Pastry_Cake from './pages/Pastry_Cake';
import New_Ins from './pages/New_Ins';
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
              </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
