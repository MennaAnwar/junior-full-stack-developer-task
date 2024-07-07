import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";

// Define the Product interface
interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  inStock: string;
  gallery: string;
  attributes: string;
  prices: string; // Update prices type to string
}

// Define the structure of the parsed price data
interface Price {
  amount: number;
  currency: {
    label: string;
    symbol: string;
  };
}

const ProductsList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>(
          "http://localhost/fullstack-api/list_products.php"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Function to parse gallery string to array
  const parseGallery = (gallery: string): string[] => {
    try {
      const galleryArray = JSON.parse(gallery);
      if (Array.isArray(galleryArray)) {
        return galleryArray;
      }
      return [];
    } catch (error) {
      console.error("Error parsing gallery:", error);
      return [];
    }
  };

  // Function to parse prices string to array
  const parsePrices = (prices: string): Price[] => {
    try {
      const pricesArray = JSON.parse(prices);
      if (Array.isArray(pricesArray)) {
        return pricesArray;
      }
      return [];
    } catch (error) {
      console.error("Error parsing prices:", error);
      return [];
    }
  };

  return (
    <div>
      <h1>Products List</h1>
      {products.map((product) => {
        const galleryArray = parseGallery(product.gallery);
        const firstImage = galleryArray.length > 0 ? galleryArray[0] : "";

        const pricesArray = parsePrices(product.prices);
        const firstPrice =
          pricesArray.length > 0
            ? pricesArray[0]
            : { amount: 0, currency: { label: "", symbol: "" } };

        return (
          <Card
            key={product.id}
            name={product.name}
            id={product.id}
            inStock={product.inStock}
            price={firstPrice.amount}
            currency={firstPrice.currency.symbol}
            img={firstImage}
          />
        );
      })}
    </div>
  );
};

export default ProductsList;
