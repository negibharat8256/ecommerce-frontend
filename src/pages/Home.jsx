import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to E-Shop</h1>
        <p>
          A modern e-commerce frontend built with React, focusing on clean UX, protected routes, and scalable state management.
        </p>

        <button className="hero-btn" onClick={() => navigate("/products")}>
          Shop Now
        </button>
      </section>

      {/* Features */}
      <section className="features">
        <div className="feature-card">
          🛍 <h3>Browse Products</h3>
          <p>Explore a wide range of products with detailed views.</p>
        </div>

        <div className="feature-card">
          ❤️ <h3>Wishlist</h3>
          <p>Save your favorite items for later.</p>
        </div>

        <div className="feature-card">
          🛒 <h3>Cart</h3>
          <p>Add products to cart and manage quantities easily.</p>
        </div>

        <div className="feature-card">
          🔐 <h3>Secure Access</h3>
          <p>Protected routes with login-based access.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
