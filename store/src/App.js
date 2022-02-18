import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SignIn from './components/Login-Register Pages/loginPage';
import SignUp from './components/Login-Register Pages/registerPage';
import Navbar from './components/Navigation Bar/Navigation Bar';
import Products from './components/Products/Products';
import Dashboard from './components/Dashboard/Dashboard';
import useToken from './services/useToken';
import useUserInfo from './services/useUserInfo';
import { Navigate } from 'react-router-dom';
import AddPPage from './components/Add Products/Add Products Page';

function App() {

  const { token, setToken } = useToken();
  const { userInfo, setUserInfo} = useUserInfo();
  return (
    <BrowserRouter>
      <div>
        <Navbar setToken={setToken} userInfo={userInfo} setUserInfo={setUserInfo}/>
        <Routes>
          <Route path="products" exact element={<Products />} />
          <Route path="products/shoes" element={<Products category = "shoes" />} />
          <Route path="products/shirts" element={<Products category = "shirts" />} />
          <Route path="products/pants" element={<Products  category = "pants"/>} />
          <Route path="signin" element={token ? <Navigate to="/dashboard"/> : <SignIn setToken={setToken} setUserInfo={setUserInfo} userInfo={userInfo}/>} />
          <Route path="signup" element={token ? <Navigate to="/dashboard"/> : <SignUp setToken={setToken} setUserInfo={setUserInfo} />} />
          <Route path="/dashboard" element={token ? <Dashboard userInfo={userInfo} /> : <Navigate to="/signin"/>} />
          <Route path="/admin/add-products" element={token && userInfo && userInfo.data && userInfo.data.isAdmin ? <AddPPage userInfo={userInfo} /> : <Navigate to="/dashboard"/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
