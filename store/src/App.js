import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import SignIn from './components/Login-Register Pages/loginPage';
import SignUp from './components/Login-Register Pages/registerPage';
import Navbar from './components/Navigation Bar/Navigation Bar';
import Products from './components/Products/Products';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route path="products" element={<Products />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
