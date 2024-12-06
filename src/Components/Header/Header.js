import React from "react";
import {
  Search,
  ShoppingCart,
  AccountBoxOutlined,
  AccountCircleOutlined,
  AddLocationAltOutlined,
} from "@mui/icons-material";
import "./HeaderCSS/Header.css";
import ELogo1 from "../Asset/img/Ecom_Logo.png";
import {Link, useNavigate} from "react-router-dom";
import {useStateValue} from "../StateManagement/StateProvider";
import {auth} from "../Signin/FirebaseConfig/Firebase";
import {signOut} from "firebase/auth";
function Header() {
  const [{basket, user}, dispatch] = useStateValue();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Redirect the user to the login page or home page after successful sign-out
        dispatch({
          type: "SET_USER",
          user: null,
        });
        alert("Signed out successfully");
        navigate("/login"); // Example redirect to login
      })
      .catch((error) => {
        alert("Sign-out error: " + error.message);
      });
  };
  return (
    <div className='header'>
      <Link to='/' style={{color: "white", textDecoration: "none"}}>
        <div className='header__logo'>
          <img src={ELogo1} alt='logo' className='header__logoImage' />
          <span className='header__logoTitle'>One Stop Shop</span>
        </div>
      </Link>

      <div className='header__diliver__address'>
        <h4 className='diliver__addressTitle'>Deliver to</h4>
        <AddLocationAltOutlined
          fontSize='small'
          className='diliver__addressIcon'
        />
      </div>
      <div className='header_searchBar'>
        <input type='text' className='header__searchInput' />
        <Search className='header__searchIcon' />
      </div>
      <div className='nav__item'>
        <AccountCircleOutlined
          fontSize='large'
          className={user ? "nav__itemLineOne" : "nav__itemLineTwo"}
        />
      </div>
      <div className='header__nav'>
        <Link
          to={user ? null : "/login"}
          style={{color: "white", textDecoration: "none"}}
        >
          <div className='nav__item'>
            <span className='nav__itemLineOne'>
              {user ? "Hello " + user.email : "Hello Guest"}
            </span>
            <span
              className='nav__itemLineTwo'
              onClick={user ? handleSignOut : null}
            >
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className='nav__item'>
          <span className='nav__itemLineOne'>Your</span>
          <span className='nav__itemLineTwo'>Shop</span>
          {/* <AccountCircleOutlined
            fontSize='large'
            className={user ? "nav__itemLineOne" : "nav__itemLineTwo"}
          /> */}
        </div>
        <Link to='/checkout' style={{color: "white", textDecoration: "none"}}>
          <div className='nav__item__cart'>
            <ShoppingCart className='nav__itemLineOne' />
            <span className='nav__itemLineTwo nav__basketCount'>
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
