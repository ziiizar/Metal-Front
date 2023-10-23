// import { useMakeOrder } from "./hooks/useMakeOrder"

import { useCart } from "../../hooks/useCart";
import { makeOrder } from "./services/makeOrder";
import { useState } from "react";

const MakeOrderButton = () => {
  const token = window.localStorage.getItem("token");
  const { cart, clearCart } = useCart();
  console.log(cart);
  const [orden, setOrden] = useState({
    orden_id: 0, // Coloca el valor adecuado aquí
    user_id: 0, // Coloca el valor adecuado aquí
    date: "2023-09-14", // Coloca la fecha adecuada aquí
    estado: "TuEstado", // Coloca el estado adecuado aquí
  });

  const handleClick = async () => {
    try {
      const today = new Date();
      const currentDate = today.toISOString().split("T")[0];
      const newOrden = {
        orden_id: 12,
        user_id: 1,
        date: currentDate,
        estado: "pendiente",
      };
      console.log("newOrden");
      console.log(newOrden);
      setOrden(newOrden);
      const post = await makeOrder(token, newOrden, 1);
      //   clearCart();
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return <button onClick={handleClick}>Ordenar</button>;
};

export default MakeOrderButton;
