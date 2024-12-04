import './navbar.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const Navigate = useNavigate();

  const goToHomePage = () => {
    return Navigate('/');
  };

  return (
    <div className="navbar">
      <div className="right" onClick={goToHomePage}>
        <img src="e-kart" alt="Ekart  image" />
        <h1>Mykart</h1>
      </div>
      <div className="left">
        {' '}
        <Link to="/" className="custom-link">
          Home
        </Link>
        <Link to="/details" className="custom-link">
          Details
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
