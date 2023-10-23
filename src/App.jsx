import HomePage from "./scenes/home/HomePage.jsx";
import EventsPage from "./scenes/Events/EventsPage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsPage from "./scenes/Products/ProductsPage.jsx";
import HeaderPW from "./scenes/global/HeaderPW.jsx";
import FooterPW from "./scenes/global/FooterPW.jsx";
import CreateNewEvent from "./scenes/Events/New Event/CreateNewEvent.jsx";
import NewProduct from "./scenes/Products/NewProduct/NewProduct.jsx";
import LogIn from "./scenes/Login/LogIn.jsx";
// import SignIn from "./scenes/Login-dos/SignIn.jsx";
// import SignUp from "./scenes/Login-dos/SignUp.jsx";
// import ForgotP from "./scenes/Login-dos/ForgotP.jsx";
import ProfilePage from "./scenes/Profile/ProfilePage/ProfilePage.jsx";
import OrdersPage from "./scenes/Profile/OrdersPage/OrdersPage.jsx";
import CartPage from "./scenes/ShoppingCar/CartPage.jsx";
import { CartProvider } from "./context/Cart.jsx";
import DetailledOrderPage from "./scenes/Profile/OrdersPage/DetailledOrder/DetailledOrderPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="bgPractica min-h-screen h-full  w-full">
        <CartProvider>
          <HeaderPW />
          <Routes>
            <Route path="/Products" Component={ProductsPage}></Route>
            <Route path="/Products/NewProduct" Component={NewProduct}></Route>
            <Route path="/Events" Component={EventsPage}></Route>
            <Route path="/Events/NewEvent" Component={CreateNewEvent}></Route>
            <Route path="/" Component={HomePage}></Route>
            <Route path="/LogIn" Component={LogIn}></Route>
            {/* <Route path="/SignUp" Component={SignUp}></Route>
            <Route path="/ForgotPassword" Component={ForgotP}></Route> */}
            <Route path="/MyProfile" Component={ProfilePage}></Route>

            <Route
              path="/MyProfile/Orders/:user_id"
              element={
                // <ProductDataProvider>
                <OrdersPage />
                // </ProductDataProvider>
              }
            ></Route>
            <Route
              path="/MyProfile/Orders/Detail/:orden_id"
              element={
                // <ProductDataProvider>
                <DetailledOrderPage />
                // </ProductDataProvider>
              }
            ></Route>

            <Route path="/ShoppingCar" Component={CartPage}></Route>
          </Routes>
        </CartProvider>

        <FooterPW />
      </div>
    </BrowserRouter>
  );
}

export default App;
