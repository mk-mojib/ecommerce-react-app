import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from "./Pages/Shop.jsx"
import ShopCategory from "./Pages/ShopCategory.jsx"
import Product from "./Pages/Products.jsx"
import Cart from "./Pages/Cart.jsx"
import LoginSignup from "./Pages/LoginSignup.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import Mens_Banner from "./Components/Assets/boy_banner.png"
import Womens_Banner from "./Components/Assets/women_banner.png"
import Kids_Banner from "./Components/Assets/child_banner.png"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/mens' element={<ShopCategory banner={Mens_Banner} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={Womens_Banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={Kids_Banner} category="kid" />} />
          <Route path='/product' element={<Product/>}>
                <Route path=':productId' element={<Product/>} />
          </Route>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<LoginSignup/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
