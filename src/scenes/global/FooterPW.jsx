import { Link } from "react-router-dom";

const FooterPW = () => {
  return (
    <footer className="bg-black h-[500px] w-full  text-white flex flex-col  pt-5 px-36 gap-2 justify-between items-center">
      <div className="flex h-1/5 w-full">
        <ul className="flex  w-full h-full justify-between gap-2 text-12">
          <li className="flex flex-col gap-2 place-content-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="51"
              fill="none"
              viewBox="0 0 50 51"
            >
              <path
                fill="#E0E0E5"
                d="M25 .5C11.193.5 0 11.693 0 25.5s11.193 25 25 25 25-11.193 25-25S38.807.5 25 .5zm-8.984 9.93c.515-.03.98.278 1.333.824l3.418 6.482c.36.768.156 1.59-.381 2.14L18.82 21.44a.766.766 0 00-.162.446c.6 2.324 2.422 4.467 4.029 5.941 1.607 1.475 3.333 3.47 5.575 3.943.277.078.617.105.815-.079l1.819-1.852c.628-.476 1.536-.707 2.206-.318h.03l6.169 3.641c.905.568.999 1.664.35 2.332l-4.248 4.214c-.627.643-1.46.86-2.27.86-3.581-.107-6.965-1.864-9.744-3.67-4.562-3.32-8.747-7.436-11.374-12.41-1.008-2.085-2.191-4.745-2.078-7.073.01-.876.247-1.734.863-2.298l4.248-4.248c.331-.282.659-.421.968-.44z"
              ></path>
            </svg>
            <h4>42-88-43-12</h4>
          </li>
          <li className="flex flex-col gap-2 place-content-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="51"
              fill="none"
              viewBox="0 0 50 51"
            >
              <path
                fill="#E0E0E5"
                d="M25 .5C18.372.506 12.018 2.578 7.331 6.26 2.644 9.942.008 14.935 0 20.143c-.008 4.256 1.761 8.396 5.036 11.786 0 0 .682.705.794.807L25 50.5l19.18-17.773c.1-.095.784-.798.784-.798l.002-.006c3.273-3.388 5.042-7.526 5.034-11.78-.008-5.208-2.644-10.2-7.331-13.883C37.982 2.578 31.628.506 25 .5zm0 26.786c-1.798 0-3.556-.42-5.05-1.204-1.496-.785-2.66-1.9-3.349-3.206-.688-1.305-.868-2.741-.517-4.127.35-1.385 1.216-2.658 2.488-3.657 1.271-.999 2.891-1.68 4.655-1.955a11.413 11.413 0 015.252.407c1.661.54 3.08 1.456 4.08 2.63.999 1.175 1.532 2.556 1.532 3.969-.003 1.893-.962 3.709-2.666 5.048S27.41 27.283 25 27.286z"
              ></path>
            </svg>
            <h4>metalconf@gmail.com</h4>
          </li>
          <li className="flex flex-col gap-2 place-content-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="49"
              fill="none"
              viewBox="0 0 48 49"
            >
              <path
                fill="#E0E0E5"
                d="M46.286.5H1.714C1.26.5.824.73.502 1.139.181 1.549 0 2.103 0 2.682v43.636c0 .579.18 1.134.502 1.543.322.41.758.639 1.212.639h44.572c.454 0 .89-.23 1.212-.639.321-.41.502-.964.502-1.543V2.682c0-.579-.18-1.134-.502-1.543C47.176.729 46.74.5 46.286.5zM25.052 28.404c-.3.298-.67.46-1.052.46-.381 0-.751-.162-1.052-.46L6.166 11.792 8.27 8.348 24 23.918l15.73-15.57 2.104 3.444-16.782 16.612z"
              ></path>
            </svg>
            <h4>1ra del oeste e/ 1 y 2 del sur</h4>
          </li>
        </ul>
      </div>
      <div className="w-full flex justify-between">
        <div className=" flex place-content-center items-center justify-between">
          <img
            className="w-full h-full"
            src="assets/Logo_invertido 1.png"
            alt=""
          />
        </div>

        <div className="flex w-[150px] h-full ">
          {/* <p>
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </p> */}
        </div>
        <ul className="flex flex-col">
          <h5>Paginas</h5>
        <Link></Link>
        <Link></Link>
        <Link></Link>
        <Link></Link>
        </ul>
      </div>
      <div className="flex place-content-center items-center  w-full  gap-4">
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

      <div className=" place-content-center  flex  w-full text-8">
        <small className="w-[98%] h-full border-t-[1px] place-content-center  flex">
          &copy; 2023 <b>METALCONF</b> - Todos los Derechos Reservados.
        </small>
      </div>
    </footer>
  );
};

export default FooterPW;
