# 🛒 E-Commerce Frontend Application

A modern e-commerce frontend built with **React**, featuring **auth-protected routes**, **cart & wishlist management**, **dark mode**, and a fully **responsive UI**.

This project focuses on real-world frontend architecture and user experience without relying on a backend.

---

## 🚀 Features

- 🔐 Authentication flow (mocked)
- 🔒 Protected routes (Cart & Wishlist)
- 🛍 Product listing & product details
- 🛒 Add to cart with visual feedback
- ❤️ Wishlist functionality
- 🌗 Light / Dark mode toggle
- 📱 Fully responsive (mobile-first)
- 🍔 Animated mobile navigation menu
- 🔔 Toast notifications for UX feedback
- 🔁 Redirect to intended page after login

---

## 🧑‍💻 Tech Stack

- React
- React Router DOM
- Context API
- react-hot-toast
- CSS (Flexbox & Media Queries)
- Fake Store API

---

## 🔐 Authentication Flow

- Authentication is mocked using **AuthContext**
- Protected routes redirect unauthenticated users to Login
- After login, users are redirected back to the intended page
- Login state persists using `localStorage`

> ⚠️ This project is frontend-focused and does not use real backend authentication.

---

## 📸 Screenshots

All UI screenshots are available in the `/screenshots` folder, including:
- Products page (Light & Dark mode)
- Product details page
- Cart page
- Wishlist page
- Login page
- Mobile navigation view

---

## 📂 Project Structure

src/
├── components/
│ ├── Navbar.jsx
│ └── ProtectedRoute.jsx
├── context/
│ ├── AuthContext.jsx
│ ├── CartContext.jsx
│ ├── WishlistContext.jsx
│ └── ThemeContext.jsx
├── pages/
│ ├── Home.jsx
│ ├── Products.jsx
│ ├── ProductDetails.jsx
│ ├── Cart.jsx
│ ├── Wishlist.jsx
│ └── Login.jsx
├── App.jsx
└── main.jsx

---

## ⚙️ Getting Started

### 1️⃣ Clone the repository

git clone https://github.com/negibharat8256/ecommerce-frontend.git

### 2️⃣ Install dependencies

npm install

3️⃣ Start the development server

npm run dev

