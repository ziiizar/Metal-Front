import React from "react";

const FooterPW = () => {
  return (
    <footer className="bg-gray-800 mt-8 min-h-[220px] text-white flex flex-col justify-between pt-5 gap-2">
      <div className="md:grid md:grid-cols-3  w-full h-3/4 ml-4 mr-4 max-md:grid-rows-3 max-md:grid   ">
        <div className=" flex flex-col max-md:w-full">
          <h2>SOBRE NOSOTROS</h2>
          <div className="flex">
            <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
            <lord-icon
              src="https://cdn.lordicon.com/zzcjjxew.json"
              trigger="hover"
              colors="primary:#ffffff,secondary:#e1a630"
              state="hover-spin"
              style={{ width: "40px", height: "40px" }}
            ></lord-icon>
            <p className="mt-[2%]"> 1ra oeste % 1 y 2 sur</p>
          </div>

          <div className="flex">
            <script src="https://cdn.lordicon.com/bhenfmcm.js"></script>
            <lord-icon
              src="https://cdn.lordicon.com/rhvddzym.json"
              trigger="hover"
              colors="primary:#ffffff,secondary:#e1a630"
              style={{ width: "40px", height: "40px" }}
            ></lord-icon>

            <p className="mt-[2%]">metalconf.enterprise@nauta,cu</p>
          </div>
        </div>
        <div className="flex flex-col space-y-4 max-md:w-full ">
          <h2>SIGUENOS</h2>
          <div className="space-x-3 ">
            <a
              href="#"
              className="hover:transition-transform inline-block text-decoration-none w-10 h-10 border rounded-full  text-center   "
            >
              <span className="fa fa-facebook mt-3"></span>{" "}
            </a>
            <a
              href="#"
              className="hover:transition-transform inline-block text-decoration-none w-10 h-10 border rounded-full  text-center 
            "
            >
              {" "}
              <span className="fa fa-instagram mt-3"></span>
            </a>
            <a
              href="#"
              className="hover:transition-transform inline-block text-decoration-none w-10 h-10 border rounded-full  text-center "
            >
              <span className="fa fa-twitter mt-3"></span>
            </a>
            <a
              href="#"
              className="hover:transition-transform inline-block text-decoration-none w-10 h-10 border rounded-full  text-center "
            >
              <span className="fa fa-whatsapp mt-3 "></span>{" "}
            </a>
          </div>
        </div>
        <div className="flex place-content-start">
          <div className="bg-slate-700 text-center p-4 rounded-md w-11/12 place-content-center max-md: flex flex-col max-md:place-content-center">
            <div className=" text-white flex place-content-center">
              <img
                src="src/assets/photo.jpg"
                className="w-[45px] h-[45px] rounded-full "
                alt=""
                id="imgphoto"
              />
            </div>
            <div>
              <p id="fpc1">Ing. Lorenzo Prieto </p>
              <p>Ofrecemos soporte las 24h</p>
              <a
                href="#"
                className="fa fa-facebook text-white mx-1"
                id="socials"
              ></a>
              <a
                href="#"
                className="fa fa-whatsapp text-white mx-1 "
                id="socials"
              ></a>
              <a
                href="#"
                className="fa fa-instagram text-white mx-1 "
                id="socials"
              ></a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-3 place-content-center  flex">
        <small>
          &copy; 2023 <b>METALCONF</b> - Todos los Derechos Reservados.
        </small>
      </div>
    </footer>
  );
};

export default FooterPW;
