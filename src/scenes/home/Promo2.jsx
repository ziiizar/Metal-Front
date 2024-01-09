import React from 'react'
import { SwipeCarousel } from './Carrousel'

const Promo2 = () => {
  return (
    <section  data-header-color='white' className="landing grid grid-cols-12 grid-rows-6 gap-3 w-full h-screen bg-black  pt-20 pb-6 px-40">


<div className="col-span-6 row-span-6 col-start-1 rounded-lg shadow-md ">
  <SwipeCarousel></SwipeCarousel>
</div>
      {/* <picture className="col-span-6 row-span-6 col-start-1 rounded-lg shadow-md ">
        <img className="w-full h-full object-cover rounded-lg" src="/assets/ventana.jpg" alt="" />
      </picture> */}
      {/* <h4 className=" col-span-5 row-span-1 col-start-1 row-start-6 text-5xl font-serif tracking-widest text-naranja"> Mas Vendido</h4> */}

      {/* <h4 className="col-span-1 col-start-12 row-span-6 escribepabajo text-5xl tracking-widest font-serif text-naranja">Mejores Ofertas</h4> */}

      <div className="col-span-6 row-span-4 col-start-7 row-start-1 border"></div>
     
        <div className="col-span-6 row-span-2 col-start-7 row-start-5 border"></div>

    {/* <div className=" flex flex-col place-content-center items-center gap-4 w-1/2">
      <h4 className="font-bold text-3xl self-start">Construye tus sueños desde los cimientos</h4>
      <p className="line-clamp-3">Echele un vistazo a nuestros materiales de construcción que van desde bloques, ladrillos hasta tanques de agua para su hogar.</p>
      <button className="bg-naranja flex py-2 px-4 rounded-xl text-white">Explora nuestros materiales</button>
    </div> */}
    {/* <div className="flex  place-content-center items-center w-[90%] md:w-1/2
    ">
      <img src="/assets/materiales.png" alt="" />
    // </div> */}
    {/* // <img className='absolute smokeAnimation w-40 right-4' src="/assets/humo1.png" alt="" />
    <img className='absolute smokeAnimation2  bottom-20 right-7' src="/assets/humo2.png" alt="" />
    <img className='absolute smokeAnimation3 right-10 bottom-12' src="/assets/humo3.png" alt="" />
    <img className='absolute smokeAnimation  right-5' src="/assets/humo1.png" alt="" />
    <img className='absolute smokeAnimation2  bottom-18 right-9' src="/assets/humo2.png" alt="" />
    <img className='absolute smokeAnimation3 right-12 bottom-15' src="/assets/humo3.png" alt="" />
    <img className='absolute smokeAnimation  right-5' src="/assets/humo1.png" alt="" />
    <img className='absolute smokeAnimation2  bottom-1 right-9' src="/assets/humo2.png" alt="" />
    <img className='absolute smokeAnimation3 right-12 bottom25' src="/assets/humo3.png" alt="" /> */}

  </section>
  )
}

export default Promo2