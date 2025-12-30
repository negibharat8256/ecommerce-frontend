import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { cartItems, updateQty, removeFromCart } = useCart();
    const navigate = useNavigate();

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );

    if (cartItems.length === 0) {
        return (
            <div className="cart-empty">
                <h2>Your cart is empty 🛒</h2>
                <p>Add some products to see them here.</p>
                <Link to="/products">Browse products</Link>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <button className="back-btn" onClick={() => navigate(-1)}>
                ← Back
            </button>
            <h1>My Cart</h1>

            {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.title} />

                    <div className="cart-info">
                        <h4>{item.title}</h4>
                        <p className="cart-price">${item.price}</p>

                        <div className="cart-actions">
                            <input
                                type="number"
                                min="1"
                                value={item.qty}
                                onChange={(e) =>
                                    updateQty(item.id, Number(e.target.value))
                                }
                            />

                            <button
                                className="remove-btn"
                                onClick={() => removeFromCart(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            <div className="cart-total">
                Total: ${total.toFixed(2)}
            </div>
        </div>
    );
};

export default Cart;
