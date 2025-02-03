
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <>
    <Router>
      <Navbar /> {/* Navbar will be persistent across all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
