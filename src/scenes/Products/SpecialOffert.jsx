import Best_product from "../home/Best_product";
import ProductCard from "./Hero/ProductCards/ProductCard";

const SpecialOffert = () => {
  return (
    <section className="w-[90%] h-[85vh] flex flex-col gap-4 place-content-center items-center">
      <div className="flex w-full h-[55%] rounded-xl">
        <img
          className="w-full h-full rounded-xl"
          src="/assets/Premium PSD Headphone brand product facebook cover banner design 2.png"
          alt=""
        />
      </div>
      <div className="relative w-full h-[40%]  flex place-content-center items-center">
        <ul className=" grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] grid-rows-[repeat(auto-fit,minmax(80px,1fr))] auto-rows-[minmax(150px,1fr)] gap-10 justify-between w-full h-full  text-black">
          <li className="h-full flex"> <ProductCard
              
              name={"Ventana 1"}
              price={5000}
              // description={"VENTANA DE ALUMINIO AVEMARIA PAPAAA CLASE VENTANA"}
              image={"/assets/ventanaex 1.png"}
              key={1}
            ></ProductCard></li>
          <li className="h-full flex"><ProductCard
              
              name={"Ventana 1"}
              price={5000}
              // description={"VENTANA DE ALUMINIO AVEMARIA PAPAAA CLASE VENTANA"}
              image={"/assets/ventanaex 1.png"}
              key={1}
            ></ProductCard></li>
             <li className="h-full flex"><ProductCard
              
              name={"Ventana 1"}
              price={5000}
              // description={"VENTANA DE ALUMINIO AVEMARIA PAPAAA CLASE VENTANA"}
              image={"/assets/ventanaex 1.png"}
              key={1}
            ></ProductCard></li>
          
        </ul>
        
        <svg className="absolute -top-6 -right-4"
      xmlns="http://www.w3.org/2000/svg"
      width="45"
      height="50"
      fill="none"
      viewBox="0 0 45 50"
    >
      <path
        fill="#06223A"
        fillRule="evenodd"
        d="M11.208 4.896c.38-.935.941-1.76 1.647-2.42a6.18 6.18 0 012.45-1.418A6.181 6.181 0 0118.129.89a6.835 6.835 0 012.71 1.112l2.07 1.419c.296.203.626.333.966.381.34.048.681.012.998-.105l2.22-.819a6.14 6.14 0 012.803-.337c.957.106 1.894.43 2.751.95a7.63 7.63 0 012.222 2.073 8.259 8.259 0 011.306 2.833l.63 2.551c.09.364.253.706.476 1 .224.294.502.534.815.7l2.19 1.17c.88.47 1.67 1.132 2.318 1.942a8.213 8.213 0 011.443 2.762 8.213 8.213 0 01.318 3.1 7.513 7.513 0 01-.863 2.898l-1.183 2.183c-.17.312-.27.666-.294 1.035-.024.369.03.744.155 1.097l.88 2.476c.353.993.514 2.044.473 3.085a7.63 7.63 0 01-.712 2.953 6.722 6.722 0 01-1.772 2.31 6.142 6.142 0 01-2.524 1.263l-2.304.54a2.05 2.05 0 00-.889.463 2.27 2.27 0 00-.595.85l-.945 2.328a6.835 6.835 0 01-1.648 2.422 6.18 6.18 0 01-2.45 1.417 6.181 6.181 0 01-2.825.168 6.837 6.837 0 01-2.71-1.113l-2.071-1.42a2.268 2.268 0 00-.966-.382 2.05 2.05 0 00-.998.105l-2.22.819a6.14 6.14 0 01-2.803.337 6.722 6.722 0 01-2.751-.95 7.63 7.63 0 01-2.222-2.073A8.258 8.258 0 018.822 41.6l-.63-2.552a2.749 2.749 0 00-.477-1 2.513 2.513 0 00-.814-.7l-2.188-1.17a7.513 7.513 0 01-2.318-1.942 8.213 8.213 0 01-1.443-2.762 8.213 8.213 0 01-.318-3.1 7.513 7.513 0 01.863-2.898l1.18-2.182c.17-.312.27-.666.294-1.035a2.749 2.749 0 00-.154-1.098l-.88-2.476a8.259 8.259 0 01-.473-3.084 7.63 7.63 0 01.712-2.953 6.722 6.722 0 011.772-2.31 6.14 6.14 0 012.524-1.263l2.303-.54a2.05 2.05 0 00.89-.463 2.27 2.27 0 00.595-.85l.946-2.326h.002zm16.61 8.829c.539.327.949.868 1.14 1.502.19.635.146 1.312-.123 1.883l-8.61 18.247a2.135 2.135 0 01-1.314 1.127 2.144 2.144 0 01-1.715-.249 2.645 2.645 0 01-1.133-1.482 2.655 2.655 0 01.098-1.866l8.61-18.247c.27-.57.742-.987 1.313-1.159a2.141 2.141 0 011.734.244zM14.235 17.04c-.857.258-1.565.883-1.97 1.739-.403.855-.469 1.871-.183 2.823l.008.024c.286.953.9 1.764 1.709 2.255.808.491 1.744.622 2.601.365l.022-.006c.857-.258 1.565-.883 1.969-1.739.404-.855.47-1.871.183-2.823l-.007-.024c-.286-.953-.9-1.764-1.71-2.255-.808-.491-1.743-.623-2.6-.365l-.022.006zm14.369 8.733c-.857.257-1.566.883-1.97 1.738-.403.856-.47 1.871-.183 2.824l.007.024c.287.952.901 1.763 1.71 2.254.808.492 1.744.623 2.6.365l.023-.006c.857-.258 1.565-.883 1.969-1.738.403-.856.47-1.872.183-2.824l-.007-.024c-.286-.952-.901-1.763-1.71-2.255-.808-.49-1.744-.622-2.6-.365l-.022.007z"
        clipRule="evenodd"
      ></path>
    </svg>
       
       
        
      </div>
    </section>
  );
};

export default SpecialOffert;
