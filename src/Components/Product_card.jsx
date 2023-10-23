function Product_card() {
  return (
    <div className="bg-orange-200 rounded-md w-60 ">
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8XdDtrhRtWN0_uPnOizl-ePx2kLuyeiABdA&usqp=CAU" alt="Best product" />
      </div>
      <div className="grid grid-cols-2">
        <h3>Precio</h3>
        <h3>Medidas</h3>
        <p>Descripcion</p>
      </div>
    </div>
  );
}

export default Product_card;
