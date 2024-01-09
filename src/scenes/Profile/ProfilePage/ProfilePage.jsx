// import useUserData from "../hooks/useUserData";
// import { useLoged } from "../../../hooks/useLoged";
// import ProfileInfo from "./ProfileInfo";
// import { useState } from "react";

// const ProfilePage = () => {
//   const { data } = useUserData();
//   const { logOut } = useLoged();

//   console.log(data);

//   const [form, setForm] = useState({
//     name: "",
//     surname: "",
//     address: "",
//     phone: "",

//   });

//   const handleForm = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="w-full h-full flex flex-col items-center place-content-center">
//      <form  className="flex flex-col gap-10 w-full" action="">
//             <div className="flex flex-col gap-5 w-full">
//             <div className="relative flex w-full">
//                 <input required
//                   onChange={handleForm}
//                   className="h-auto  bg-inherit border-b-[1px]  border-gray-800 focus:border-purple-600 transition-colors peer px-2 py-[2px]  outline-none w-full"
//                   // placeholder="Username"
//                   type="text"
//                   name="name"
//                   id=""
//                 />
//                 <label htmlFor="input" className="absolute top-1 left-0  peer-focus:text-12 peer-focus:-top-3 peer-valid:text-12 peer-valid:-top-3  transition-all peer-focus:text-black  text-gray-600 pointer-events-none" >Nombre</label>
//               </div>
//               <div className="relative flex w-full">
//                 <input required
//                   onChange={handleForm}
//                   className="h-auto  bg-inherit border-b-[1px]  border-gray-800 focus:border-purple-600 transition-colors peer px-2 py-[2px]  outline-none w-full"
//                   // placeholder="Username"
//                   type="text"
//                   name="surname"
//                   id=""
//                 />
//                 <label htmlFor="input" className="absolute top-1 left-0  peer-focus:text-12 peer-focus:-top-3 peer-valid:text-12 peer-valid:-top-3 transition-all peer-focus:text-black  text-gray-600 pointer-events-none" >Apellido</label>
//               </div>

//               <div className="relative flex w-full">
//                 <input required
//                   onChange={handleForm}
//                   className="h-auto  bg-inherit border-b-[1px]  border-gray-800 focus:border-purple-600 transition-colors peer px-2 py-[2px]  outline-none w-full"
//                   // placeholder="Username"
//                   type="text"
//                   name="address"
//                   id=""
//                 />
//                 <label htmlFor="input" className="absolute top-1 left-0  peer-focus:text-12 peer-focus:-top-3 peer-valid:text-12 peer-valid:-top-3 transition-all peer-focus:text-black  text-gray-600 pointer-events-none" >Direccion</label>
//               </div>

//               <div className="relative flex w-full">
//                 <input required
//                   onChange={handleForm}
//                   className="h-auto  bg-inherit border-b-[1px]  border-gray-800 focus:border-purple-600 transition-colors peer px-2 py-[2px]  outline-none w-full"
//                   // placeholder="Username"
//                   type="text"
//                   name="phone"
//                   id=""
//                 />
//                 <label htmlFor="input" className="absolute top-1 left-0  peer-focus:text-12 peer-focus:-top-3 peer-valid:text-12 peer-valid:-top-3 transition-all peer-focus:text-black  text-gray-600 pointer-events-none" >Telefono</label>
//               </div>
//             </div>

//             <div className=" flex flex-col gap-y-2 place-content-center items-center">
//               <button className="bg-verde py-3 px-4 rounded-full">Guardar Cambios</button>
//               {/* <Link className="text-xs self-center" to="/ForgotP">
//                 Forgot password?
//               </Link> */}
//             </div>
//           </form>
//     </div>
//   );
// };

// export default ProfilePage;

import useUserData from "../hooks/useUserData";
import { useLoged } from "../../../hooks/useLoged";
import ProfileInfo from "./ProfileInfo";
import { useState } from "react";
import useProfileData from "../hooks/useLoadProfile";
import HeaderMainFooterLayout from "../../../Layouts/HeaderMainFooterLayout";

const ProfilePage = () => {
  // const { data } = useUserData();
  const { data } = useProfileData(2);
  const { logOut } = useLoged();

  const [editingField, setEditingField] = useState(null);

  const [form, setForm] = useState({
    name: data.name,
    surname: data.surname,
    address: data.address,
    phone: data.phone,
  });

  const handleForm = (e) => {
    if (editingField !== null) {
      setForm({ ...form, [e.target.name]: e.target.value });
    } else setEditingField(null);
  };

  const handleEditClick = (field) => {
    setEditingField(field);
  };

  const handleSaveChanges = () => {
    setEditingField(null);
  };

  return (
    <HeaderMainFooterLayout>
      <div className="w-[90%] h-[70vh] flex flex-col items-center place-content-center text-black">
        <h5>Tus Datos</h5>
        <form className="flex flex-col gap-10 w-full" action="">
          <div className="flex flex-col gap-5 w-full">
            {/* Input para el nombre */}
            <div className="relative flex w-full">
              <input
                required
                onChange={handleForm}
                value={form.name}
                className="h-auto bg-inherit border-b-[1px]  border-gray-800 focus:border-purple-600 transition-colors peer px-2 py-[2px]  outline-none w-full"
                type="text"
                name="name"
                readOnly={editingField !== "name"}
              />

              <span
                className="absolute top-1 right-0 cursor-pointer"
                onClick={() => handleEditClick("name")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="12"
                  fill="none"
                  viewBox="0 0 18 12"
                >
                  <path
                    fill="#000"
                    d="M0 9.384v2.241h3.666L14.48 5.017l-3.666-2.241L0 9.384zm18-6.518L14.334.625 11.86 2.143l3.666 2.24L18 2.866z"
                  ></path>
                </svg>
              </span>

              <label
                htmlFor="input"
                className={`absolute top-1 left-0 transition-all text-gray-600 ${
                  editingField === "name"
                    ? "peer-focus:text-black peer-focus:-top-3"
                    : "peer-valid:text-black peer-valid:-top-3"
                }`}
              >
                Nombre
              </label>
            </div>

            {/* Repite el bloque para el apellido */}
            <div className="relative flex w-full">
              <input
                required
                onChange={handleForm}
                value={form.surname}
                className="h-auto bg-inherit border-b-[1px]  border-gray-800 focus:border-purple-600 transition-colors peer px-2 py-[2px]  outline-none w-full"
                type="text"
                name="surname"
                readOnly={editingField !== "surname"}
              />

              <span
                className="absolute top-1 right-0 cursor-pointer"
                onClick={() => handleEditClick("surname")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="12"
                  fill="none"
                  viewBox="0 0 18 12"
                >
                  <path
                    fill="#000"
                    d="M0 9.384v2.241h3.666L14.48 5.017l-3.666-2.241L0 9.384zm18-6.518L14.334.625 11.86 2.143l3.666 2.24L18 2.866z"
                  ></path>
                </svg>
              </span>

              <label
                htmlFor="input"
                className={`absolute top-1 left-0 transition-all text-gray-600 ${
                  editingField === "surname"
                    ? "peer-focus:text-black peer-focus:-top-3"
                    : "peer-valid:text-black peer-valid:-top-3"
                }`}
              >
                Apellido
              </label>
            </div>

            {/* Repite el bloque para la dirección */}
            <div className="relative flex w-full">
              <input
                required
                onChange={handleForm}
                value={form.address}
                className="h-auto bg-inherit border-b-[1px]  border-gray-800 focus:border-purple-600 transition-colors peer px-2 py-[2px]  outline-none w-full"
                type="text"
                name="address"
                readOnly={editingField !== "address"}
              />

              <span
                className="absolute top-1 right-0 cursor-pointer"
                onClick={() => handleEditClick("address")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="12"
                  fill="none"
                  viewBox="0 0 18 12"
                >
                  <path
                    fill="#000"
                    d="M0 9.384v2.241h3.666L14.48 5.017l-3.666-2.241L0 9.384zm18-6.518L14.334.625 11.86 2.143l3.666 2.24L18 2.866z"
                  ></path>
                </svg>
              </span>

              <label
                htmlFor="input"
                className={`absolute top-1 left-0 transition-all text-gray-600 ${
                  editingField === "address"
                    ? "peer-focus:text-black peer-focus:-top-3"
                    : "peer-valid:text-black peer-valid:-top-3"
                }`}
              >
                Dirección
              </label>
            </div>

            {/* Repite el bloque para el teléfono */}
            <div className="relative flex w-full">
              <input
                required
                onChange={handleForm}
                value={form.phone}
                className="h-auto bg-inherit border-b-[1px]  border-gray-800 focus:border-purple-600 transition-colors peer px-2 py-[2px]  outline-none w-full"
                type="text"
                name="phone"
                readOnly={editingField !== "phone"}
              />

              <span
                className="absolute top-1 right-0 cursor-pointer"
                onClick={() => handleEditClick("phone")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="12"
                  fill="none"
                  viewBox="0 0 18 12"
                >
                  <path
                    fill="#000"
                    d="M0 9.384v2.241h3.666L14.48 5.017l-3.666-2.241L0 9.384zm18-6.518L14.334.625 11.86 2.143l3.666 2.24L18 2.866z"
                  ></path>
                </svg>
              </span>

              <label
                htmlFor="input"
                className={`absolute top-1 left-0 transition-all text-gray-600 ${
                  editingField === "phone"
                    ? "peer-focus:text-black peer-focus:-top-3"
                    : "peer-valid:text-black peer-valid:-top-3"
                }`}
              >
                Teléfono
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-y-2 place-content-center items-center">
            {editingField && (
              <button
                className="bg-verde py-3 px-4 rounded-full"
                onClick={handleSaveChanges}
              >
                Guardar Cambios
              </button>
            )}
          </div>
        </form>
      </div>
    </HeaderMainFooterLayout>
  );
};

export default ProfilePage;
