import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Signin/Login";

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route
            path='/checkout'
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path='/'
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
