import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { cartItems } = useCart();
  const { wishlist } = useWishlist();
  const { theme, toggleTheme } = useTheme();

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  const { isLoggedIn, logout } = useAuth();

  // ✅ Close menu on resize (desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Click outside to close menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // ✅ Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

 const handleLogout = () => {
  logout();
  navigate("/login");
};


  return (
    <nav className="navbar" ref={menuRef}>
      <div className="nav-left">
        <h2>E-Shop</h2>
      </div>

      {/* ===== Desktop Links ===== */}
      <div className="nav-right desktop">
        <NavLink to="/products" className="nav-link">
          Products
        </NavLink>

        {isLoggedIn && (
          <NavLink to="/wishlist" className="nav-link">
            Wishlist ({wishlist.length})
          </NavLink>
        )}

        {isLoggedIn && (
          <NavLink to="/cart" className="nav-link">
            Cart ({cartItems.length})
          </NavLink>
        )}

        {!isLoggedIn ? (
          <NavLink to="/login" className="nav-link">
            Login
          </NavLink>
        ) : (
          <button className="nav-link logout-btn" onClick={handleLogout}>
            Logout
          </button>
        )}

        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>

      {/* ===== Burger ===== */}
      <div className="burger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* ===== Mobile Menu ===== */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <NavLink to="/products" onClick={() => setOpen(false)}>
          Products
        </NavLink>

        {isLoggedIn && (
          <NavLink to="/wishlist" onClick={() => setOpen(false)}>
            Wishlist ({wishlist.length})
          </NavLink>
        )}

        {isLoggedIn && (
          <NavLink to="/cart" onClick={() => setOpen(false)}>
            Cart ({cartItems.length})
          </NavLink>
        )}

        {!isLoggedIn ? (
          <NavLink to="/login" onClick={() => setOpen(false)}>
            Login
          </NavLink>
        ) : (
          <button className="mobile-logout" onClick={handleLogout}>
            Logout
          </button>
        )}

        <div className="mobile-divider" />

        <button
          className="mobile-theme-btn"
          onClick={() => {
            toggleTheme();
            setOpen(false);
          }}
        >
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
