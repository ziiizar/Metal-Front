import Navbar from "../scenes/global/Navbar";
const HeaderAndMain = ({ children }) => {
  return (
    <div className=" bg-light dark:bg-dark min-h-screen  relative">
      <nav className="h-auto w-full flex place-content-center items-center [grid-areas:header] fixed basis-0 z-50">
        <Navbar></Navbar>
      </nav>
      <main className="h-auto flex flex-col">{children}</main>
    </div>
  );
};

export default HeaderAndMain;
