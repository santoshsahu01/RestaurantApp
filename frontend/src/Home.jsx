import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  const categories = [
    "All",
    "Starters",
    "Pizza",
    "Indian",
    "Chinese",
    "Drinks",
    "Desserts",
  ];

  const menuItems = [
    {
      id: 1,
      name: "Margherita Pizza",
      category: "Pizza",
      price: 249,
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500",
    },
    {
      id: 2,
      name: "Paneer Butter Masala",
      category: "Indian",
      price: 220,
      image:
        "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500",
    },
    {
      id: 3,
      name: "Veg Biryani",
      category: "Indian",
      price: 180,
      image:
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500",
    },
    {
      id: 4,
      name: "Veg Hakka Noodles",
      category: "Chinese",
      price: 170,
      image:
        "https://images.unsplash.com/photo-1552611052-33e04de081de?w=500",
    },
    {
      id: 5,
      name: "Cold Coffee",
      category: "Drinks",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500",
    },
    {
      id: 6,
      name: "Chocolate Brownie",
      category: "Desserts",
      price: 140,
      image:
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500",
    },
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const filteredItems = menuItems.filter((item) => {
    const categoryMatch =
      activeCategory === "All" || item.category === activeCategory;

    const searchMatch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <div className="app">

      {/* TOP NAVBAR */}
      <header className="navbar">

        <div className="restaurant">
          <div className="logo">🍽️</div>

          <div>
            <h2>Foodie Restaurant</h2>
            <span>Delicious Food</span>
          </div>
        </div>

        <div className="search-box">
          <span>🔍</span>

          <input
            type="text"
            placeholder="Search food..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <button className="profile">👤</button>

      </header>


      {/* CATEGORY */}
      <section className="categories">

        {categories.map((category) => (
          <button
            key={category}
            className={
              activeCategory === category
                ? "category active"
                : "category"
            }
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}

      </section>


      {/* MENU */}
      <main className="menu-section">

        <div className="menu-header">
          <h1>Our Menu</h1>
          <span>{filteredItems.length} Items</span>
        </div>


        <div className="menu-grid">

          {filteredItems.map((item) => (

            <div className="menu-card" key={item.id}>

              <img
                src={item.image}
                alt={item.name}
              />

              <div className="card-content">

                <h3 className="h3">{item.name}</h3>

                <p className="category-name">
                  {item.category}
                </p>

                <div className="card-bottom">

                  <strong>₹{item.price}</strong>

                  <button
                    onClick={() => addToCart(item)}
                  >
                    Add +
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </main>


      {/* BOTTOM NAVIGATION */}
<nav className="bottom-nav">

  <Link to="/" className="nav-active">
    🏠
    <span>Home</span>
  </Link>

  <Link to="/checkout" className="cart-link">
    🛒
    <span>Cart ({cart.length})</span>
  </Link>

  <button>
    📦
    <span>Orders</span>
  </button>

  <button>
    ☰
    <span>More</span>
  </button>

</nav>

    </div>
  );
}

export default Home;