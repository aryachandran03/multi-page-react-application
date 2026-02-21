import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>User Portal</h2>
      <div>
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/users" className="nav-link">Users</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
