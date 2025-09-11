import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/Scrolltop.jsx';
import Home from './components/Home/Home.jsx';
//Navbar/Head
import AboutPage from './components/About/AboutPage.jsx';
import Services from './components/Service/Servicepage.jsx';
import Products from './components/Products/Products.jsx'
//Register
import Register from './components/Register/Register.jsx'; 
//Blogs
import Grooming from './components/Service/PetGrooming.jsx';
import Food from './components/Service/PetFood.jsx';
import Dental from './components/Service/DentalCare.jsx';
import Emergency from './components/Service/Emergency.jsx';
import Vaccination from './components/Service/Vaccinations.jsx';
import Surgery from './components/Service/PetSurgery.jsx';
//Cart
import Cart from './components/UserHead/CartPage.jsx';
//Profile
import Profile from './components/UserHead/UserProfile.jsx';
import Profup from './components/UserHead/EditProfile.jsx';
//Contact
import Contact from './components/ContactPage.jsx';


function App() {
  return (
    <Router>
        <ScrollToTop />
      <Routes>

        <Route path="/" element={<Home />} />
        
        {/* {Navbar/Head} */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<Services/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/register" element={<Register/>}/> 
        
        {/* {Blogs} */}
        <Route path="/grooming" element={<Grooming/>}/>
        <Route path="/food" element={<Food/>}/>
        <Route path="/dental" element={<Dental/>}/>
        <Route path="/emergency" element={<Emergency/>}/>
        <Route path="/vaccination" element={<Vaccination/>}/>
        <Route path="/surgery" element={<Surgery/>}/>
        
        {/* {Cart} */}
        <Route path="/cart" element={<Cart/>}/>
        
        {/* {Profile} */}
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/profup" element={<Profup/>}/>

        {/* {Contact} */}
        <Route path="/contact" element={<Contact/>}/>


      </Routes>
    </Router>
  );
}

export default App;
