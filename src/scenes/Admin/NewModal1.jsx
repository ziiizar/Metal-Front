import { AnimatePresence, motion } from "framer-motion";
// import { FiAlertCircle } from "react-icons/fi";
import { useState } from "react";
import { NewModal2 } from "./NewModal2";
import ProductCard from "../Products/Hero/ProductCards/ProductCard";

export const NewModal1 = ({
  isOpen,
  setIsOpen,
  image,
  name,
  description,
  price,
  category,
  stock,
  avaiable,
  id,
}) => {
  const [form, setForm] = useState({
    image: image,
    name: name,
    description: description,
    price: price,
    category: category,
    stock: stock,
    avaiable: avaiable,
  });

  const [originalValues, setOriginalValues] = useState({
    image: image,
    name: name,
    description: description,
    price: price,
    category: category,
    stock: stock,
    avaiable: avaiable,
  });

  const handleGoBack = (e) => {
    // Restaura los valores originales al hacer clic en "Nah, go back"
    setForm({ ...originalValues });
    setIsOpen(false);
    e.preventDefault();
  };

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [preview, setPreview] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          //   onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll  "
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg min-w-[500px] h-[400px] shadow-xl cursor-default relative overflow-hidden flex gap-8"
          >
            {/* <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" /> */}
            <form className="relative z-10 flex flex-col w-full h-full gap-4">
              {/* <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                <FiAlertCircle />
              </div> */}
             
                {/* <picture className="w-[40%] h-full">
                  <img src={image} alt="" />
                </picture> */}
                <div className="flex flex-col gap-6 h-full">
                  <div className="relative flex w-full">
                    <input
                      className="h-auto  bg-inherit border-b-[1px]  border-gray-800 focus:border-purple-600 transition-colors peer px-2 py-[2px]  outline-none w-full"
                      value={form.name}
                      name="name"
                      type="text"
                      onChange={handleForm}
                      required
                    />
                    <label
                      htmlFor="input"
                      className="absolute top-1 left-0  peer-focus:text-12 peer-focus:-top-3 peer-valid:text-12 peer-valid:-top-3  transition-all peer-focus:text-black  text-black pointer-events-none"
                    >
                      Nombre
                    </label>
                  </div>
                  <div className="relative flex w-full">
                    <input
                      className="h-auto  bg-inherit border-b-[1px]  border-gray-800 focus:border-purple-600 transition-colors peer px-2 py-[2px]  outline-none w-full"
                      value={form.description}
                      name="description"
                      type="text"
                      onChange={handleForm}
                      required
                    />
                    <label
                      htmlFor="input"
                      className="absolute top-1 left-0  peer-focus:text-12 peer-focus:-top-3 peer-valid:text-12 peer-valid:-top-3  transition-all peer-focus:text-black  text-black pointer-events-none"
                    >
                      Descripcion
                    </label>
                  </div>
                  <div className="relative flex w-full">
                    <input
                      className="h-auto  bg-inherit border-b-[1px]  border-gray-800 focus:border-purple-600 transition-colors peer px-2 py-[2px]  outline-none w-full"
                      value={form.price}
                      name="price"
                      type="text"
                      onChange={handleForm}
                      required
                    />
                    <label
                      htmlFor="input"
                      className="absolute top-1 left-0  peer-focus:text-12 peer-focus:-top-3 peer-valid:text-12 peer-valid:-top-3  transition-all peer-focus:text-black  text-black pointer-events-none"
                    >
                      Precio
                    </label>
                  </div>
                  <div className="relative flex w-full">
                    <input
                      className="h-auto  bg-inherit border-b-[1px]  border-gray-800 focus:border-purple-600 transition-colors peer px-2 py-[2px]  outline-none w-full"
                      value={form.category}
                      name="category"
                      type="text"
                      required
                      onChange={handleForm}
                    />
                    <label
                      htmlFor="input"
                      className="absolute top-1 left-0  peer-focus:text-12 peer-focus:-top-3 peer-valid:text-12 peer-valid:-top-3  transition-all peer-focus:text-black  text-black pointer-events-none"
                    >
                      Categoria
                    </label>
                  </div>
                  <div className="relative flex w-full">
                    <input
                      className="h-auto  bg-inherit border-b-[1px]  border-gray-800 focus:border-purple-600 transition-colors peer px-2 py-[2px]  outline-none w-full"
                      value={form.stock}
                      name="stock"
                      type="text"
                      onChange={handleForm}
                      required
                    />
                    <label
                      htmlFor="input"
                      className="absolute top-1 left-0  peer-focus:text-12 peer-focus:-top-3 peer-valid:text-12 peer-valid:-top-3  transition-all peer-focus:text-black  text-black pointer-events-none"
                    >
                      Stock
                    </label>
                    </div>
                  <input
                    // value={form.image}
                    name="image"
                    type="file"
                    onChange={handleForm}
                    className="border-b"
                  />
                  {/* <h3 className="text-3xl font-bold text-center mb-2">
                        One more thing!
                      </h3>
                      <p className="text-center mb-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                        aperiam vitae, sapiente ducimus eveniet in velit.
                      </p> */}
                </div>
             
              <div className="flex gap-2 ">
                <button
                  onClick={handleGoBack}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  Nah, go back
                </button>
                {/* <button
                  onClick={() => setPreview(true)}

                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  Preview
                </button> */}
                <button
                  type="submit"
                  onClick={() => setIsOpen(false)}
                  className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                >
                  Understood!
                </button>
                {/* <NewModal2
                  isOpen={secondIsOpen}
                  setIsOpen={setSecondIsOpen}
                  image={image}
                  name={name}
                  price={price}
                ></NewModal2> */}
              </div>
            </form>
            <ProductCard
              image={form.image}
              name={form.name}
              price={form.price}
            ></ProductCard>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
