import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Details from './pages/Details/details';
import Navbar from './components/Navbar/navbar';
import './App.css';


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </>
  );
};

export default App;
