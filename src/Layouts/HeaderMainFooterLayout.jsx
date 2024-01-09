import Footer from "../scenes/global/Footer"
import Navbar from '../scenes/global/Navbar'
import { useState, useEffect } from 'react'

const HeaderMainFooterLayout = ({children}) => {


  //!!Header que me dio GPT
  // const [prevScrollPos, setPrevScrollPos] = useState(0);
  // const [visible, setVisible] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPos = window.scrollY;
  //     setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
  //     setPrevScrollPos(currentScrollPos);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [prevScrollPos]);

  // ${visible ?"top-0" : "-top-60"}


  //!!!Header que me dio copiloto

// import React, { useState, useEffect } from 'react';
// import { Transition } from '@headlessui/react';

// const Header = () => {
//   const [isVisible, setIsVisible] = useState(true);
//   const [prevScrollPos, setPrevScrollPos] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPos = window.pageYOffset;
//       const visible = prevScrollPos > currentScrollPos;

//       setIsVisible(visible);
//       setPrevScrollPos(currentScrollPos);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [prevScrollPos]);

//   return (
//     <Transition
//       show={isVisible}
//       enter="transition-opacity duration-100"
//       enterFrom="opacity-0"
//       enterTo="opacity-100"
//       leave="transition-opacity duration-100"
//       leaveFrom="opacity-100"
//       leaveTo="opacity-0"
//     >
//       <header className="fixed top-0 bg-white w-full p-4">Aquí va tu header</header>
//     </Transition>
//   );
// };

// export default Header;


  return (
    <div className=' bg-columbiaBlue dark:bg-payneGray min-h-screen  relative'>
       <nav  className={`h-auto w-full flex place-content-center items-center [grid-areas:header]  basis-0 z-50   `}>
         {/* <HeaderPC></HeaderPC> */}
         <Navbar></Navbar>
       </nav>
      <main className='h-auto flex flex-col w-full'>{children}</main>
      <footer className="bg-black  w-full  text-white flex flex-col    gap-2 justify-between  [grid-areas:footer]"> <Footer></Footer></footer>
   
    </div>
  )
}

export default HeaderMainFooterLayout