import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import toast from "react-hot-toast";

const ProductCard = ({ product }) => {
    const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

    const isWishlisted = wishlist.some(
        (item) => item.id === product.id
    );

    const handleWishlist = () => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");

        if (!isLoggedIn) {
            toast.error("Please login to continue");
            return;
        }

        if (isWishlisted) {
            removeFromWishlist(product.id);
            toast.success("Removed from wishlist");
        } else {
            addToWishlist(product);
            toast.success("Added to wishlist");
        }
    };


    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} />

            <h4>{product.title}</h4>
            <p className="price">Rs.{product.price}</p>

            <div className="card-actions">
                <Link to={`/products/${product.id}`} className="view-btn">
                    View
                </Link>

                <button
                    className={`wishlist-btn ${isWishlisted ? "active" : ""
                        }`}
                    onClick={handleWishlist}
                >
                    ❤️
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
