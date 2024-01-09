import { AnimatePresence, motion } from "framer-motion";
import ProductCard from "../Products/Hero/ProductCards/ProductCard";


export const NewModal2 = ({
    secondIsOpen,
    setSecondIsOpen,
    image,
    name,
    price,
    id,
  }) => {
   
    return (
      <AnimatePresence>
        {secondIsOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // onClick={() => setIsOpen(false)}
            className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer "
          >
            <motion.div
              initial={{ scale: 0, rotate: "12.5deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              exit={{ scale: 0, rotate: "0deg" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-[900px] h-[600px] shadow-xl cursor-default relative overflow-hidden"
            >
   
                   <ProductCard></ProductCard>
                
                <div className="flex gap-2 ">
                  <button
                    onClick={(e) => {setSecondIsOpen(false),e.stopPropagation();}
                  }
                    className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                  >
                    Nah, go back
                  </button>
                 
                  
                </div>
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

);
};
