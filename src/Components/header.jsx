import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Appwriteservice from '../Appwrite/Databasework';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [session, setSession] = useState(false);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Fetch session and handle localStorage on mount
  useEffect(() => {
    const fetchSession = async () => {
      try {
        const resp = await Appwriteservice.currentsession();
        if (resp) {
          setSession(true);
          localStorage.setItem('session', 'true');
        } else {
          setSession(false);
          localStorage.setItem('session', 'false');
        }
      } catch (err) {
        console.error("Error fetching session:", err);
        setSession(false);
        localStorage.setItem('session', 'false');
        console.log("Failed to fetch session. Please try again.");
      }
    };

    // Check if session exists in localStorage
    const storedSession = localStorage.getItem('session');
    if (storedSession === 'true') {
      setSession(true);
    } else if (storedSession === 'false') {
      setSession(false);
    } else {
      fetchSession();
    }
  }, []);

  const handleLogout = async () => {
    try {
      await Appwriteservice.Logout(); // Ensure Appwriteservice.Logout() properly handles logout
      localStorage.setItem('session','false'); // Clear session from localStorage
      setSession(false); // Update session state
      navigate('/'); // Redirect to home page or login page after logout
    } catch (err) {
      console.error("Error logging out:", err);
      setError("An error occurred while logging out. Please try again.");
    }
  };

  const isActive = (path) => location.pathname === path;

  // Reusable NavLink component to avoid code repetition
  const NavLink = ({ to, children }) => (
    <Link
      to={to}
      className={`font-semibold text-lg px-4 py-2 md:py-0 ${
        isActive(to) ? 'text-red-600 underline' : 'text-black hover:text-red-600'
      }`}
    >
      {children}
    </Link>
  );

  return (
    <div className="h-20 w-full flex justify-between items-center px-4 md:px-8 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="bg-red-600 flex rounded-full h-12 w-12 justify-center items-center">
          <h1 className="text-white font-bold text-xl">F</h1>
        </div>
        <h1 className="text-black font-bold text-3xl">Foodio.</h1>
      </div>

      {/* Hamburger Menu (Mobile) */}
      <button
        className="block md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <img
          className="h-8 w-8"
          src="https://cdn-icons-png.flaticon.com/512/1828/1828859.png"
          alt="menu icon"
        />
      </button>

      {/* Navigation Links */}
      <div
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row absolute md:relative top-16 md:top-auto left-0 md:left-auto w-full md:w-auto bg-white md:bg-transparent z-50 md:z-auto shadow-lg md:shadow-none md:gap-8 py-4 md:py-0`}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/OrderOnline">Order Online</NavLink>
        <NavLink to="/Reservation">Reservation</NavLink>
        <NavLink to="/Aboutus">About us</NavLink>
        <NavLink to="/Contactus">Contact us</NavLink>

        {/* Cart & Login/Logout for Mobile */}
        <div className="flex flex-col items-center gap-4 mt-4 md:hidden">
          <Link to="/Cart">
            <img
              className="h-8 w-8"
              src="https://cdn-icons-png.flaticon.com/512/34/34568.png"
              alt="cart logo"
            />
          </Link>
          {session ? (
            <button
              onClick={handleLogout}
              className="text-white bg-red-700 hover:bg-red-900 font-bold text-lg h-10 w-20 rounded-lg"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/Login"
              className="text-white bg-red-700 hover:bg-red-900 font-bold text-lg h-10 w-20 pl-4 pt-1 rounded-lg"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Cart and Login/Logout for Desktop */}
      <div className="hidden md:flex items-center gap-4">
        <Link to="/Cart">
          <img
            className="h-8 w-8"
            src="https://cdn-icons-png.flaticon.com/512/34/34568.png"
            alt="cart logo"
          />
        </Link>

        {session ? (
          <button
            onClick={handleLogout}
            className="text-white bg-red-700 hover:bg-red-900 font-bold text-lg h-10 w-20 rounded-lg"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/Login"
            className="text-white  bg-red-700 hover:bg-red-900 font-bold text-lg h-10 w-20 rounded-lg pl-4 pt-1"
          >
            Login
          </Link>
        )}
      </div>

      {/* Error Message (if any) */}
      {error && (
        <p className="absolute top-20 left-1/2 transform -translate-x-1/2 text-red-600 text-center">
          {error}
        </p>
      )}
    </div>
  );
}

export default Header;









