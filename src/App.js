import Navbar from './components/navbar/Navbar';
import Auth from './routes/auth/Auth';
import { Container } from './utils/Components';
import Register from './routes/auth/register/Register';
import { Routes, Route } from "react-router-dom";
import Login from './routes/auth/login/Login';
import Home from './routes/home/Home';
import Basket from './routes/basket/Basket';
import Footer from './components/footer/Footer';
import CatigoryPraducts from './routes/catigory/CatigoryPraducts';
import SellProduct from './routes/sellproduct/SellProduct';


function App() {
  return (

    <div className='appss'>
            <Container>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/basket' element={<Basket/>}/>
          <Route path="/auth" element={<Auth/>}>
            <Route path="/auth/login" element={<Login/>}></Route>
            <Route path="/auth/register" element={<Register/>}></Route>
          </Route>
          <Route path='/CatigoryPraducts/:id' element={<CatigoryPraducts/>}/>
          <Route path='/sellproduct/:id' element={<SellProduct/>}/>
          <Route path='/basket' element={<Basket/>}/>
        </Routes>
         <Footer/>
      </Container>
     
    </div>
  );
}

export default App;
