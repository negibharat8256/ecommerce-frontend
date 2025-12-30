import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import toast from "react-hot-toast";

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useCart();
    const [added, setAdded] = useState(false);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <p style={{ padding: "24px" }}>Loading product...</p>;
    }

    return (
        <div className="product-details-wrapper">

            <button className="back-btn" onClick={() => navigate(-1)}>
                ← Back to products
            </button>
            <div className="breadcrumbs">
                <span onClick={() => navigate("/products")}>Products</span>
                <span> / </span>
                <span>{product.title}</span>
            </div>


            <div className="product-details">
                <div className="details-image">
                    <img src={product.image} alt={product.title} />
                </div>

                <div className="details-info">
                    <h1>{product.title}</h1>
                    <p className="details-price">Rs.{product.price}</p>
                    <p className="details-desc">{product.description}</p>

                    <button
                        className="add-btn"
                        onClick={() => {
                            const isLoggedIn = localStorage.getItem("isLoggedIn");

                            if (!isLoggedIn) {
                                toast.error("Please login to continue");
                                return;
                            }

                            if (!added) {
                                addToCart(product);
                                setAdded(true);
                                toast.success("Added to cart");
                            } else {
                                navigate("/cart");
                            }
                        }}
                    >
                        {added ? "Go to Cart" : "Add to Cart"}
                    </button>




                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
