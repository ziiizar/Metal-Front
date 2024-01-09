
  import { motion } from "framer-motion";
  import { Dispatch, SetStateAction, useState } from "react";
//   import { IconType } from "react-icons";
  
  const CategoriesDropDown = (changeFilters) => {
    const [open, setOpen] = useState(false);

    const handleChangeCategory = (e) => {
        changeFilters((prevState) => ({
          ...prevState,
          category: e.target.value,
        }));
      };
  
    return (
      
        <motion.div animate={open ? "open" : "closed"} className="relative self-end px-20 ">
          <button
            onClick={() => setOpen((pv) => !pv)}
            className="flex items-center gap-2 px-3 py-2 rounded-md text-indigo-50 bg-naranja hover:bg-naranja/80 transition-colors"
          >
            <span className="font-medium text-sm">Todas</span>
            <motion.span variants={iconVariants}>
             ===
            </motion.span>
          </button>
  
          <motion.ul
            initial={wrapperVariants.closed}
            variants={wrapperVariants}
            style={{ originY: "top", transition:'100px', }}
            className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%]  w-48 overflow-hidden"
          >
            <Option setOpen={setOpen} value={"metalurgica"} text="Metalurgica"  />
            <Option setOpen={setOpen} value={"manualidades"} text="Manualidades" />
            <Option setOpen={setOpen} value={"Fundicion"} text="Fundicion" />
            <Option setOpen={setOpen} value={"Materiales"} text="Materiales" />
          </motion.ul>
        </motion.div>
    
    );
  };
  
  const Option = ({ text, value, setOpen }) => {
    return (
      <motion.li
        variants={itemVariants}
        onClick={() => setOpen(false)}
        className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
      >
        {/* <motion.span variants={actionIconVariants}>
          <Icon />
        </motion.span> */}
        <span>{text}</span>
      </motion.li>
    );
  };
  
  export default CategoriesDropDown;
  
  const wrapperVariants = {
    open: {
      scaleY: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    closed: {
      scaleY: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.1,
      },
    },
  };
  
  const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };
  
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
      },
    },
    closed: {
      opacity: 0,
      y: -15,
      transition: {
        when: "afterChildren",
      },
    },
  };
  
  const actionIconVariants = {
    open: { scale: 1, y: 0 },
    closed: { scale: 0, y: -7 },
  };