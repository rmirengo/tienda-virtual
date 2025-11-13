import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from './components/Footer/Footer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import './App.css';
import { CartProvider } from "./context/CartContext/CartProvider";
import { Cart } from "./components/Cart/Cart";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer/ProductFormContainer";
import { MainLayout} from "./layouts/MainLayout"
import { AdminLayout } from "./layouts/AdminLayout"
import { RutaProtegida } from "./components/RutaProtegida/RutaProtegida";
import { Login } from "./components/Login/Login"

function App() {  

  return (
    <>
   <BrowserRouter>
    <CartProvider>
        <div className='app-container'>               
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<h1>HOME SWEET HOME</h1>}/>
              <Route path="/contacto" element={<h1>LLAMAME Y CONTAME</h1>}/>
              <Route path="/productos" element={<ItemListContainer titulo="Nuestros Productos"/>}/>
              <Route path="/category/:category" element={<ItemListContainer titulo="{category}" />}/>
              <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
              <Route path="/carrito" element={<Cart />}/>
            </Route>
            {/* Aca estan las rutas para el administrador ojo con eso ¡Seguramente rompas todo! */}
            <Route path="/admin" element={<AdminLayout />}>            
              <Route index element={<Login />}/>
              
              <Route 
                path="alta-productos" 
                element={<RutaProtegida>
                    <ProductFormContainer/>
                </RutaProtegida>
              }
              />
              </Route>     
          </Routes>
          <Footer />        
        </div>
        </CartProvider>
    </BrowserRouter>
    </>
  )
}

export default App
