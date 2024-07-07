import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.css";

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
  prices: string;
}

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log(id);
    const fetchProduct = async () => {
      try {
        const response = await axios.get<Product>(
          `http://localhost/fullstack-api/get_product.php?id=${id}`
        );
        setProduct(response.data);
      } catch (error) {
        setError("Error fetching product details");
        console.error("Error fetching product details:", error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

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

  const galleryArray = parseGallery(product.gallery);
  const firstImage = galleryArray.length > 0 ? galleryArray[0] : "";

  return (
    <section id="services" className="services section-bg">
      <div className="container-fluid">
        <div className="row row-sm">
          <div className="col-md-6 _boxzoom">
            <div className="zoom-thumb">
              <ul className="piclist">
                {galleryArray.map((imgSrc, index) => (
                  <li key={index}>
                    <img src={imgSrc} alt={`Product image ${index + 1}`} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="_product-images">
              <div className="picZoomer">
                <img className="my_img" src={firstImage} alt="Main product" />
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex flex-column align-items-start">
            <div className="productName">
              <h3>{product.name}</h3>
            </div>
            <div className="size p-0">
              <h5>SIZE:</h5>
              <ul>
                <li>XS</li>
                <li>S</li>
                <li>M</li>
                <li>L</li>
              </ul>
            </div>
            <div className="size p-0">
              <h5>COLOR:</h5>
              <ul>
                <li>XS</li>
                <li>S</li>
                <li>M</li>
                <li>L</li>
              </ul>
            </div>
            <div className="price">
              <h5>PRICE:</h5>
              <span>10.00 $</span>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto">
              <button className="btn btn-large btn-success">Add To Cart</button>
            </div>
            <div className="description mt-3">
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
