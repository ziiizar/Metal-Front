import Modal from "react-modal";
import PreviewModal from "./PreviewModal";
import { useState } from "react";
const EditModal = ({
  image,
  name,
  description,
  price,
  category,
  stock,
  avaiable,
  id,
  isOpen,
  close,
  setSecondModalIsOpen,
  secondModalIsOpen,
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
  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("editao");
  };

  return (
    <Modal className={"bg-blue-400"} isOpen={isOpen}>
      <article className="flex bg-columbiaBlue w-[500px] h-[400px]">
        <picture>
          <img src={image} alt="" />
        </picture>

        <form className="flex flex-col gap-2">
          <input
            value={form.name}
            name="name"
            type="text"
            onChange={handleForm}
          />
          <input
            value={form.description}
            name="description"
            type="text"
            onChange={handleForm}
          />
          <input
            value={form.price}
            name="price"
            type="text"
            onChange={handleForm}
          />
          <input
            value={form.category}
            name="category"
            type="text"
            onChange={handleForm}
          />
          <input
            value={form.stock}
            name="stock"
            type="text"
            onChange={handleForm}
          />
        </form>
      </article>

      <button className="bg-red-500" onClick={() => setSecondModalIsOpen(true)}>
        Vista previa
      </button>
      <button
        onClick={() => {
          handleSubmit();
          close();
        }}
      >
        Aceptar
      </button>
      <PreviewModal
        image={form.image}
        name={form.name}
        price={form.price}
        isOpen={secondModalIsOpen}
        close={() => setSecondModalIsOpen(false)}
      ></PreviewModal>
    </Modal>
  );
};

export default EditModal;
