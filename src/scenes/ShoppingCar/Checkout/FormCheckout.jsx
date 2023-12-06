import { useState } from "react";
import { makeOrder } from "../services/makeOrder";


const FormCheckout = ({token,productsIds}) => {
  const [orden, setOrden] = useState({
      orden_id: 0, // Coloca el valor adecuado aquí
      user_id: 0, // Coloca el valor adecuado aquí
      date: "2023-09-14", // Coloca la fecha adecuada aquí
      estado: "TuEstado", // Coloca el estado adecuado aquí
    });

    const handleSubmit = async () => {
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
        const post = await makeOrder(token, newOrden, productsIds);
        //   clearCart();
      } catch (error) {
        console.log(error.response.data);
      }
    };

//   const handleForm = () => {


//   }

const [form, setForm] = useState({
    name: "",
    direccion: "",
    phone: "",
    
  });
const handleForm = (e) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};




  return (
    <div className="flex flex-col gap-5 w-[90%] mt-24">
      <h5 className="text-black text-2xl">Confirmacion de Compra</h5>
      <form  className="flex flex-col gap-10 w-full" action="">
            {/* <div className="flex flex-col gap-8 w-full">
            <div className="relative flex w-full">
                <input required
                  onChange={handleForm}
                  className="h-auto  bg-inherit border-b-[1px]  border-gray-800 focus:border-purple-600 transition-colors peer px-2 py-[2px]  outline-none w-full"
                  // placeholder="Username"
                  type="text"
                  name="name"
                  id=""
                />
                <label htmlFor="input" className="absolute top-1 left-0  peer-focus:text-12 peer-focus:-top-3 peer-valid:text-12 peer-valid:-top-3  transition-all peer-focus:text-black  text-gray-600 pointer-events-none" >Nombre</label>
              </div>
              <div className="relative flex w-full">
                <input required
                //   onChange={handleForm}
                  className="h-auto  bg-inherit border-b-[1px]  border-gray-800 focus:border-purple-600 transition-colors peer px-2 py-[2px]  outline-none w-full"
                  // placeholder="Username"
                  type="text"
                  name="direccion"
                  id=""
                />
                <label htmlFor="input" className="absolute top-1 left-0  peer-focus:text-12 peer-focus:-top-3 peer-valid:text-12 peer-valid:-top-3 transition-all peer-focus:text-black  text-gray-600 pointer-events-none" >Direccion</label>
              </div>

              <div className="relative flex w-full">
                <input required
                //   onChange={handleForm}
                  className="h-auto  bg-inherit border-b-[1px]  border-gray-800 focus:border-purple-600 transition-colors peer px-2 py-[2px]  outline-none w-full"
                  // placeholder="Username"
                  type="text"
                  name="phone"
                  id=""
                />
                <label htmlFor="input" className="absolute top-1 left-0  peer-focus:text-12 peer-focus:-top-3 peer-valid:text-12 peer-valid:-top-3 transition-all peer-focus:text-black  text-gray-600 pointer-events-none" >Telefono</label>
              </div>
            </div> */}
           
            <div className=" flex flex-col gap-y-2 place-content-center items-center">

                <button onClick={handleSubmit} className="bg-verde text-white font-bold py-1 px-6 rounded-full">Realizar Compra</button>
              {/* <Button text={"Iniciar Sesion"}></Button> */}
              {/* <Link className="text-xs self-center" to="/ForgotP">
                Forgot password?
              </Link> */}
            </div>
          </form>
    </div>
  );
};

export default FormCheckout;
