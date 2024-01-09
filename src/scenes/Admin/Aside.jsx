import { Link } from "react-router-dom";
import Exit from "../Icons/Exit";
const Aside = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-8 p-4 bg-payneGray">
      <button className="bg-babyPowder py-1 px-2">
      <Link to={"/"}><Exit></Exit></Link>
      </button>
      <Link to={"/Admin/Dashboard"}>Dashboard</Link>
      <Link to={"/Admin/Products"}>Productos</Link>
      <Link to={"/Admin/Inbox"}>Inbox</Link>
      <Link to={"/Admin/Orders"}>Ordenes</Link>
      <Link to={"/Admin/Accounts"}>Cuentas</Link>
    </div>
  );
};

export default Aside;
