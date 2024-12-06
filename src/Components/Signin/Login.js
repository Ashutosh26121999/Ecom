import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import "./Login.css";
import ELogo1 from "../Asset/img/Ecom_Logo.png";
import {
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "./FirebaseConfig/Firebase";
import {useStateValue} from "../StateManagement/StateProvider";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [{user}, dispatch] = useStateValue();

  const handleSubmit = (e, action) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setError("");

    if (action === "signIn") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          dispatch({
            type: "SET_USER",
            user: auth.currentUser,
          });
          navigate("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (action === "register") {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          dispatch({
            type: "SET_USER",
            user: auth.currentUser,
          });
          navigate("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  };

  return (
    <div className='login-container'>
      <div className='login-header'>
        <Link to='/' style={{color: "white", textDecoration: "none"}}>
          <img src={ELogo1} alt='Ecom Logo' className='amazon-logo' />
        </Link>
        <h1>Sign in to your account</h1>
      </div>
      <div className='login-form'>
        <form>
          <label htmlFor='email'>Email or mobile phone number</label>
          <input
            type='text'
            id='email'
            name='email'
            placeholder='Enter your email or mobile phone number'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <p
              className='error-message'
              style={{color: "red", fontSize: "12px"}}
            >
              {error}
            </p>
          )}
          <button type='button' onClick={(e) => handleSubmit(e, "signIn")}>
            Sign in
          </button>
        </form>
      </div>
      <div className='login-footer'>
        <span className='new-to-amazon'>
          New to Amazon?
          <h3 onClick={(e) => handleSubmit(e, "register")}>
            Create your Amazon account
          </h3>
        </span>
        <p>
          By continuing, you agree to Ecom's{" "}
          <Link to='/'>Conditions of Use</Link> and{" "}
          <Link to='/'>Privacy Notice</Link>.
        </p>
        <p>Forgot your password?</p>
        <Link to='/'>Reset your password</Link>
      </div>
    </div>
  );
}

export default Login;
