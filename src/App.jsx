import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ScrollToTop from './components/Scrolltop.jsx';
import Head from './components/Head.jsx';
import HeadUser from './components/UserHead/HeadUser.jsx';

import Home from './components/Home/Home.jsx';
import AboutPage from './components/About/AboutPage.jsx';
import Services from './components/Service/Servicepage.jsx';
import Products from './components/Products/Products.jsx';
import Register from './components/Register/Register.jsx';
import Grooming from './components/Service/PetGrooming.jsx';
import Food from './components/Service/PetFood.jsx';
import Dental from './components/Service/DentalCare.jsx';
import Emergency from './components/Service/Emergency.jsx';
import Vaccination from './components/Service/Vaccinations.jsx';
import Surgery from './components/Service/PetSurgery.jsx';
import Cart from './components/UserHead/CartPage.jsx';
import Profile from './components/UserHead/UserProfile.jsx';
import Profup from './components/UserHead/EditProfile.jsx';
import Contact from './components/ContactPage.jsx';

function AppRoutes() {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const noHeaderRoutes = ["/register", "/signin", "/verify", "/forgot-password"];
  const showHeader = !noHeaderRoutes.includes(location.pathname);

  return (
    <>
      {showHeader && (isLoggedIn ? <HeadUser /> : <Head />)}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/register" element={<Register />} />
        <Route path="/grooming" element={<Grooming />} />
        <Route path="/food" element={<Food />} />
        <Route path="/dental" element={<Dental />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/vaccination" element={<Vaccination />} />
        <Route path="/surgery" element={<Surgery />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profup" element={<Profup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
