import { Link } from 'react-router-dom';
import './styles/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/books/Fiction">Browse Books</Link>
    <Link to="/add">Add Book</Link>
  </nav>
);

export default Navbar;