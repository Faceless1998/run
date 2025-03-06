import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import PageHeader from "../shared/PageHeader";
import "./Merch.css";

const Merch = () => {
  const { t, currentLang } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: t("all") },
    { id: "clothing", name: t("clothing") },
    { id: "accessories", name: t("accessories") },
  ];

  const products = [
    {
      id: 1,
      name: t("runningShirt"),
      description: t("runningShirtDesc"),
      price: 29.99,
      image: '/images/merch/running-shorts.jpg',
      category: "clothing",
      sizes: ["S", "M", "L", "XL"],
      colors: ["Black", "Blue", "White"],
      inStock: true,
    },
    {
      id: 2,
      name: t("runningShorts"),
      description: t("runningShortsDesc"),
      price: 24.99,
      image: "/images/merch/running-shorts.jpg",
      category: "clothing",
      sizes: ["S", "M", "L"],
      colors: ["Black", "Navy"],
      inStock: true,
    },
    {
      id: 3,
      name: t("runningCap"),
      description: t("runningCapDesc"),
      price: 19.99,
      image: "/images/merch/running-cap.jpg",
      category: "accessories",
      sizes: ["One Size"],
      colors: ["Black", "White"],
      inStock: false,
    },
    {
      id: 4,
      name: t("runningSocks"),
      description: t("runningSocksDesc"),
      price: 14.99,
      image: "/images/merch/running-shorts.jpg",
      category: "accessories",
      sizes: ["S", "M", "L"],
      colors: ["Black", "White", "Gray"],
      inStock: true,
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="merch-container">
      <div className="container">
        <PageHeader
          title={t("raceMerchandise")}
          subtitle={t("highQualityGear")}
        />

        <div className="merch-controls">
          <div className="search-box">
            <input
              type="text"
              placeholder={t("search")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-button ${
                  selectedCategory === category.id ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                {!product.inStock && (
                  <div className="out-of-stock">{t("outOfStock")}</div>
                )}
              </div>
              <div className="product-content">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-details">
                  <div className="detail-group">
                    <label>{t("sizes")}</label>
                    <div className="sizes">
                      {product.sizes.map((size) => (
                        <span key={size} className="size-option">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="detail-group">
                    <label>{t("colors")}</label>
                    <div className="colors">
                      {product.colors.map((color) => (
                        <span key={color} className="color-option">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="product-footer">
                  <div className="product-price">
                    <span className="price-label">{t("price")}</span>
                    <span className="price-value">${product.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Merch;
