import "./ProductDetails.css";
import img from "../../images/tshirt.png";

const ProductDetails = () => {
  return (
    <section id="services" className="services section-bg">
      <div className="container-fluid">
        <div className="row row-sm">
          <div className="col-md-6 _boxzoom">
            <div className="zoom-thumb">
              <ul className="piclist">
                <li>
                  <img src={img} alt="" />
                </li>
                <li>
                  <img src={img} alt="" />
                </li>
                <li>
                  <img src={img} alt="" />
                </li>
                <li>
                  <img src={img} alt="" />
                </li>
              </ul>
            </div>
            <div className="_product-images">
              <div className="picZoomer">
                <img className="my_img" src={img} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex flex-column align-items-start">
            <div className="productName">
              <h3>Product Name</h3>
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
              <p>Product Description</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
