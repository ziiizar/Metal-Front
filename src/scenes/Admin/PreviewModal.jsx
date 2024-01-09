import Modal from "react-modal";
import ProductCard from "../Products/Hero/ProductCards/ProductCard";

const PreviewModal = ({image, name, price,isOpen, close} ) => {

  return (
    <Modal isOpen={isOpen} >
      <ProductCard image={image} name={name} price={price}></ProductCard>
<button onClick={close}>Aceptar</button>
    </Modal>
  );
};

export default PreviewModal;
