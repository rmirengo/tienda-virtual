import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Nav } from './components/Nav/Nav';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import './App.css';
import { CartProvider } from "./context/CartContext/CartProvider";


function App() {  

  return (
    <>
   <BrowserRouter>
    <CartProvider>
        <div className='app-container'>
          <Header />          
          <Nav />
          <Routes>
            <Route path="/" element={<ItemListContainer />}/>
            <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
          </Routes>
          <Footer />        
        </div>
        </CartProvider>
    </BrowserRouter>
    </>
  )
}

export default App
