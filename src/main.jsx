import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { ThemeProvider } from "./context/ThemeContext";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <ThemeProvider>
      <WishlistProvider>
        <CartProvider>
          <App />
          {/* <Toaster position="top-center" /> */}
          <Toaster
  position="top-center"
  toastOptions={{
    style: {
      marginTop: "70px",
    },
  }}
/>

        </CartProvider>
      </WishlistProvider>
    </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
