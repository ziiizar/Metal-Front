import HomePage from "./scenes/home/HomePage.jsx";
import EventsPage from "./scenes/Events/EventsPage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsPage from "./scenes/Products/ProductsPage.jsx";
import CreateNewEvent from "./scenes/Events/New Event/CreateNewEvent.jsx";
import NewProduct from "./scenes/Products/NewProduct/NewProduct.jsx";
import LogIn from "./scenes/Login/LogIn.jsx";
import SignUp from "./scenes/Login/SignUp.jsx";
import ProfilePage from "./scenes/Profile/ProfilePage/ProfilePage.jsx";
import OrdersPage from "./scenes/Profile/OrdersPage/OrdersPage.jsx";
import CartPage from "./scenes/ShoppingCar/CartPage.jsx";
import { CartProvider } from "./context/Cart.jsx";
import DetailledOrderPage from "./scenes/Profile/OrdersPage/DetailledOrder/DetailledOrderPage.jsx";
import DetailledProductPage from "./scenes/DetailledProduct/DetailledProductPage.jsx";
import Checkout from "./scenes/ShoppingCar/Checkout/Checkout.jsx";
import { ProtectedRoute } from "./services/ProtectedRoute.jsx";
import { useLoged } from "./store/logedStore.ts"
import Dashboard from "./scenes/Admin/Dashboard.jsx";
import OrdersAdmin from "./scenes/Admin/OrdersAdmin.jsx";
import AccountsAdmin from "./scenes/Admin/AccountsAdmin.jsx";
import InboxAdmin from "./scenes/Admin/InboxAdmin.jsx";
import ProductsAdmin from "./scenes/Admin/ProductsAdmin.jsx";

function App() {
  const { auth } = useLoged(state=>state);
  return (
    <BrowserRouter>
      
        <CartProvider>
          <Routes>
            <Route path="/" Component={HomePage}></Route>
            <Route path="/Products" Component={ProductsPage}></Route>
            <Route
              path="/Products/:product_id"
              element={
                // <ProductDataProvider>
                <DetailledProductPage></DetailledProductPage>
                // </ProductDataProvider>
              }
            ></Route>
            <Route path="/LogIn" Component={LogIn}></Route>
            <Route path="/SignUp" Component={SignUp}></Route>
            <Route path="/Events" Component={EventsPage}></Route>
            <Route path="/Products/NewProduct" Component={NewProduct}></Route>
            <Route path="/Events/NewEvent" Component={CreateNewEvent}></Route>

            {/* <Route element={<ProtectedRoute isAllowed={auth}></ProtectedRoute>}> */}
              {/* <Route path="/ForgotPassword" Component={ForgotP}></Route>  */}
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
              <Route path="/Checkout" Component={Checkout}></Route>



              <Route path="/Admin/Dashboard" Component={Dashboard}></Route>
              <Route path="/Admin/Products" Component={ProductsAdmin}></Route>
              <Route path="/Admin/Inbox" Component={InboxAdmin}></Route>
              <Route path="/Admin/Accounts" Component={AccountsAdmin}></Route>
              <Route path="/Admin/Orders" Component={OrdersAdmin}></Route>

            {/* </Route> */}
          </Routes>
        </CartProvider>
      
    </BrowserRouter>
  );
}

export default App;
