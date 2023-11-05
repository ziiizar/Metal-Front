import Best_product from "../home/Best_product"
import { useParams } from "react-router-dom";

const RelatedArticles = () => {
  return (
    <div className="flex flex-col gap-10">
      <h3 className="text-black">De la misma categoria</h3>
      <ul className="flex">
          <Best_product></Best_product>
          <Best_product></Best_product>
      </ul>
    </div>
  );
};

export default RelatedArticles;
