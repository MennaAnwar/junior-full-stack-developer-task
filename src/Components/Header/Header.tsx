import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="d-flex justify-content-around align-items-center mt-2">
      <div className="navbar-items ">
        <ul className="d-flex ">
          <li>WOMEN</li>
          <li>MEN</li>
          <li>KIDS</li>
        </ul>
      </div>
      <div>
        <img src={logo} alt="logo" height="40px" width="40px" />
      </div>
      <div>
        <i className="bx bx-cart fs-3"></i>
      </div>
    </div>
  );
};

export default Header;