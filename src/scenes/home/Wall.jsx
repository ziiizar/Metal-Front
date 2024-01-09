import PromoCard from "./PromoCard";
import { motion } from "framer-motion";


const Wall = ({img,price, title}) => {
  return (
    <motion.div
        // animate={{ x: "10px" }}
        className="absolute top-[40%] right-[40%] h-[150px] w-[100px]  transition duration-200"
      >
        <PromoCard
          img={img}
          price={price}
          title={title}
        ></PromoCard>
      </motion.div>
  )
}

export default Wall