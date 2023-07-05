import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/css/Style.css'
import '../src/css/Font.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Layout from './layout/Layout';
import Designer_Cake from './pages/Designer_Cake';
import S_layout from './layout/S_layout';
import 'animate.css';
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
              </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
