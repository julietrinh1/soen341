import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SignIn from './components/Login-Register Pages/loginPage';
import SignUp from './components/Login-Register Pages/registerPage';
import Navbar from './components/Navigation Bar/Navigation Bar';
import Products from './components/Products/Products';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import useToken from './services/useToken';
import useUserInfo from './services/useUserInfo';
import { Navigate } from 'react-router-dom';
import AddPPage from './components/Add Products/Add Products Page';
import Cart from './components/Cart Page/Cart';
import useCart from './services/useCart';

function App() {

  const { cart, setCart, onUpdateCartQty, onRemoveFromCart, emptyCart } = useCart();
  const { token, setToken } = useToken();
  const { userInfo, setUserInfo} = useUserInfo();
  return (
    <BrowserRouter>
      <div>
        <Navbar setToken={setToken} userInfo={userInfo} setUserInfo={setUserInfo} setCart={setCart}/>
        <Routes>
          <Route path="" exact element={<Home />} />
          <Route path="/Home" exact element={<Home />} />
          <Route path="products" exact element={<Products setCart={setCart} onUpdateCartQty={onUpdateCartQty} cart={cart} onRemoveFromCart={onRemoveFromCart} />} />
          <Route path="products/shoes" element={<Products setCart={setCart} onUpdateCartQty={onUpdateCartQty} cart={cart} onRemoveFromCart={onRemoveFromCart} Category = "Shoes" />} />
          <Route path="products/shirts" element={<Products setCart={setCart} onUpdateCartQty={onUpdateCartQty} cart={cart} onRemoveFromCart={onRemoveFromCart} Category = "Shirts" />} />
          <Route path="products/pants" element={<Products  setCart={setCart} onUpdateCartQty={onUpdateCartQty} cart={cart} onRemoveFromCart={onRemoveFromCart} Category = "Pants"/>} />
          <Route path="/cart" element={<Cart cart={cart} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} emptyCart={emptyCart}/>} />
          <Route path="signin" element={token ? <Navigate to="/dashboard"/> : <SignIn setToken={setToken} setUserInfo={setUserInfo} userInfo={userInfo}/>} />
          <Route path="signup" element={token ? <Navigate to="/dashboard"/> : <SignUp setToken={setToken} setUserInfo={setUserInfo} />} />
          <Route path="/dashboard" element={token ? <Dashboard userInfo={userInfo} /> : <Navigate to="/signin"/>} />
          <Route path="/admin/add-products" element={token && userInfo  && userInfo.isAdmin ? <AddPPage userInfo={userInfo} /> : <Navigate to="/dashboard"/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;