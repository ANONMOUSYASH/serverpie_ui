import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import ScrollToTop from './Components/ScrollToToButton'; // Import the ScrollToTop component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import all pages
import Home from './Pages/Home';
import DomainReg from './Pages/Domain/DomainReg';
import SharedHosting from './Pages/Hosting/SharedHosting';
import DedicatedHosting from './Pages/Hosting/DedicatedHosting';
import WordpressHosting from './Pages/Hosting/WordpressHosting';
import EnvatoHosting from './Pages/Hosting/EnvatoHosting';
import VpsServer from './Pages/Server/VpsServer';
import WindowServer from './Pages/Server/WindowServer';
import DedicatedServer from './Pages/Server/DedicatedServer';
import DdosProtection from './Pages/DdosProtection';
import ContactUs from './Pages/ContactUs';
import Login from './Components/Login';
import Register from './Components/Register';
import ScrollToTopButton from './Components/ScrollToToButton';

function App() {
  return (
    <Router>
      <ScrollToTopButton /> {/* Ensures every page starts from the top */}
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/domain-registration" element={<DomainReg />} />
        <Route path="/shared-hosting" element={<SharedHosting />} />
        <Route path="/dedicated-hosting" element={<DedicatedHosting />} />
        <Route path="/wordpress-hosting" element={<WordpressHosting />} />
        <Route path="/envato-hosting" element={<EnvatoHosting />} />
        <Route path="/vps-server" element={<VpsServer />} />
        <Route path="/windows-server" element={<WindowServer />} />
        <Route path="/dedicated-server" element={<DedicatedServer />} />
        <Route path="/ddos-protection" element={<DdosProtection />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
