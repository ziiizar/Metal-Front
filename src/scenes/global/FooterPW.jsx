const FooterPW = () => {
  return (
    <footer className="bg-black   text-white flex flex-col justify-between pt-5 px-4 gap-2">
      <div className="flex justify-between w-full h-[70%] place-content-center items-center ">
        <div className=" flex place-content-center items-center h-full w-[30%] ">
          <img
            className="w-full h-full"
            src="assets/Logo_invertido 1.png"
            alt=""
          />
        </div>
        <div className="flex  w-[70%] h-full ">
          <ul className="flex flex-col w-full h-full place-content-center gap-2 text-12">
            <li className="flex h-[30%] w-full gap-4 ">
              <img src="assets/Group 1.png" alt="" />
              <h4>42-88-43-12</h4>
            </li>
            <li className="flex h-[30%] w-full gap-4  ">
              <img src="assets/Group 2.png" alt="" />
              <h4>metalconf@gmail.com</h4>
            </li>
            <li className="flex h-[30%] w-full gap-4 ">
              <img src="assets/Ubicacion.png" alt="" />
              <h4>1ra del oeste e/ 1 y 2 del sur</h4>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex place-content-center items-center h-[10%] w-full  gap-4">
        <button className="h-full flex">
          <img src="assets/ic_round-facebook.png" alt="" />
          <a href="#" id="socials"></a>
        </button>
        <button>
          <img src="assets/ri_instagram-fill.png" alt="" />
          <a href="#" id="socials"></a>
        </button>
        <button>
          <img src="assets/dashicons_whatsapp.png" alt="" />
          <a href="#" id="socials"></a>
        </button>
      </div>

      <div className=" place-content-center  flex  h-[10%] w-full text-8">
        <small className="w-[98%] h-full border-t-[1px] place-content-center  flex">
          &copy; 2023 <b>METALCONF</b> - Todos los Derechos Reservados.
        </small>
      </div>
    </footer>
  );
};

export default FooterPW;
