import React from "react";
import useDetailledOrder from "./hooks/useDetailledOrder";
import DetailledOrderCard from "./DetailledOrderCard";
import { useParams } from "react-router-dom";
import useDetailledProducts from "./hooks/useDetailledProducts";

const DetailledOrderPage = () => {
  const orden_id = useParams();
  const id = orden_id.orden_id;

  const { ordenData } = useDetailledOrder(id);
  const { data } = useDetailledProducts({ ordenData: ordenData });

  return (
    <div>
      <ul>
        {data.map((product) => (
          <li className="flex" key={product.product_id}>
            <div>{product.product_id}</div>
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
