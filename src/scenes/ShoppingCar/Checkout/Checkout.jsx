import FormCheckout from "./FormCheckout";
import Politics from "./Politics";
import useGetCart from "../hooks/useGetCart";
import HeaderMainFooterLayout from "../../../Layouts/HeaderMainFooterLayout";

const Checkout = () => {
  const token = window.localStorage.getItem("token");

  const { cart } = useGetCart(token, 2);
  console.log(cart);

  const productsIds = cart.map((item) => item.product_id);
  console.log(productsIds);

  return (
    <HeaderMainFooterLayout>
      {" "}
      <div className="min-h-screen h-full w-full flex flex-col place-content-center items-center gap-3">
        <FormCheckout token={token} productsIds={productsIds}></FormCheckout>
        <Politics></Politics>
      </div>
    </HeaderMainFooterLayout>
  );
};

export default Checkout;
