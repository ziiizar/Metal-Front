import Accordion from "../Components/Acc/Accordion";

const Prod_Process_Acc = () => {
  return (
    <div>
      <Accordion
        header={"Metal"}
        body={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nostrum consequuntur veritatis itaque placeat ut voluptas necessitatibus voluptates laudantium nobis vitae neque reiciendis maxime, nam deserunt ullam aut iusto deleniti!"
        }
      ></Accordion>
      <Accordion
        header={"Carton"}
        body={
          "Lorem ipsum vitae neque reiciendis maxime, nam deserunt ullam aut iusto deleniti!"
        }
      ></Accordion>
      <Accordion
        header={"Acero"}
        body={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nostrum consequuntur veritatis itaque placeat ut voluptas necessitatibus vitae neque reiciendis maxime, nam deserunt ullam aut iusto deleniti!"
        }
      ></Accordion>
    </div>
  );
};

export default Prod_Process_Acc;
