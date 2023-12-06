import React from "react";
import useDetailledOrder from "../../hooks/useDetailledOrder";
import DetailledOrderCard from "./DetailledOrderCard";
import { useParams } from "react-router-dom";
import useDetailledProducts from "../../hooks/useDetailledProducts";

const DetailledOrderPage = () => {
  const orden_id = useParams();
  const id = orden_id.orden_id;

  const { ordenData } = useDetailledOrder(id);
  const { data } = useDetailledProducts({ ordenData: ordenData });

  return (
    <div className="flex flex-col w-[90%] gap-5 ">
       <ul className="flex flex-col w-full gap-2 ">
        {data.map((product) => (
          <li  className="text-black border-b-[1px] border-black w-full pb-2 min-h-[150px]" key={product.product_id}>
            <DetailledOrderCard
              image={product.image}
              name={product.name}
              price={product.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DetailledOrderPage;
