import { useWishlist } from "../context/WishlistContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
    const { wishlist, removeFromWishlist } = useWishlist();
    const navigate = useNavigate();

    if (wishlist.length === 0) {
        return (
            <div className="wishlist-empty">
                <h2>Your wishlist is empty ❤️</h2>
                <p>Save items you like to see them here.</p>
                <Link to="/products" className="view-btn">
                    Browse products
                </Link>
            </div>
        );
    }

    return (
        <div className="wishlist-page">
            <button className="back-btn" onClick={() => navigate(-1)}>
                ← Back
            </button>
            <h1>My Wishlist</h1>

            <div className="wishlist-grid">
                {wishlist.map((item) => (
                    <div key={item.id} className="wishlist-card">
                        <img src={item.image} alt={item.title} />

                        <h4>{item.title}</h4>
                        <p className="price">${item.price}</p>

                        <div className="wishlist-actions">
                            <Link
                                to={`/products/${item.id}`}
                                className="view-btn"
                            >
                                View
                            </Link>

                            <button
                                className="remove-btn"
                                onClick={() => removeFromWishlist(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Wishlist;
