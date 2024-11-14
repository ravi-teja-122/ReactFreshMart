import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import Cart from "./Cart";
import PurchasedHistory from "./PurchasedHistory";
import AboutUS from "./AboutUs";
import ContactUs from "./ContactUs";
import "./App.css";
import { useSelector } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginComponent from "./GoogleLoginComponent";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App(){
    
    const cart = useSelector((state) => state.cart);
    const totalItems = cart.reduce((sum, item) => sum +item.quantity, 0);

    return(
        <>
    
          <BrowserRouter>
          <nav>
            <Link to="/home">
                <i className="fas fa-home fa-fade fa-lg" style={{ color: 'black' }}></i> Home
            </Link>

            <Link to="/veg">
                <i className="fas fa-leaf fa-beat fa-lg" style={{ color: 'black' }}></i> Veg
            </Link>

            <Link to="/nonveg">
                <i className="fas fa-drumstick-bite fa-pulse fa-lg" style={{ color: 'black' }}></i> Non Veg
            </Link>

            <Link to="/cart">
                <i className="fas fa-shopping-cart fa-bounce fa-lg" style={{ color: 'black' }}></i> Cart ({totalItems})
            </Link>

            <Link to="/purchasedhistory">
                <i className="fas fa-history fa-spin fa-lg" style={{ color: 'black' }}></i> Purchased History
            </Link>

            <Link to="/aboutus">
                <i className="fas fa-info-circle fa-flip fa-lg" style={{ color: 'black' }}></i> About Us
            </Link>

            <Link to="/contactus">
                <i className="fas fa-envelope fa-beat fa-lg" style={{ color: 'black' }}></i> Contact Us
            </Link>

            <GoogleOAuthProvider clientId="722354190714-fog583b85mplrig26spvtm968e4e0e5j.apps.googleusercontent.com">
                    <GoogleLoginComponent />
            </GoogleOAuthProvider>

        </nav>
                <Routes>
                    <Route path="/home" element={<Home/>} />
                    <Route path="/veg" element={<Veg/>} />
                    <Route path="/nonveg" element={<NonVeg/>} />
                    <Route path="/cart" element={<Cart/>} />
                    <Route path="/purchasedhistory" element={<PurchasedHistory/>} />
                    <Route path="/aboutus" element={<AboutUS/>} />
                    <Route path="/contactus" element={<ContactUs/>} />
                </Routes>
          </BrowserRouter>  
        </>
    )
}
export default App;