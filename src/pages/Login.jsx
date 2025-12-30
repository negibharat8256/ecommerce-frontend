import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // 👇 where user came from (cart / wishlist / etc.)
    const from = location.state?.from || "/products";

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            toast.error("Please enter email and password");
            return;
        }

        // ✅ Mock login via AuthContext
        login();

        toast.success("Logged in successfully");

        // ✅ Redirect back to intended page
        navigate(from, { replace: true });
    };

    return (
        <div className="login-page">
            <div className="login-card">
                <h2>Welcome Back</h2>
                <p className="login-subtitle">
                    Please login to your account
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="email"
                        />

                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"
                        />

                        <p className="forgot">Forgot password?</p>
                    </div>

                    <button className="login-btn" type="submit">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
