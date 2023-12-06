import CategorieButton from "../CategorieButton";

const Filters = ({ changeFilters }) => {
  const handleChangeCategory = (e) => {
    changeFilters((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  };

  return (
    
   
<section  className="flex w-[90%] h-[10%] justify-between items-center gap-3 overflow-auto border-b-[2px] border-black py-3">

<button  value={"all"} onClick={handleChangeCategory}
      className="py-1 px-2 h-[60%] bg-gray-400 hover:bg-verde  focus:bg-verde   transition-all rounded-md flex place-content-center items-center"
    >
     Todos
    </button>
      
      <button value={"Fundicion"} onClick={handleChangeCategory}
      className="py-1 px-2 h-[60%] bg-gray-400 hover:bg-verde  focus:bg-verde  transition-all rounded-md flex place-content-center items-center"
    >
     Fundicion
    </button>
      <button value={"metalurgica"} onClick={handleChangeCategory}
      className="py-1 px-2 h-[60%] bg-gray-400 hover:bg-verde focus:bg-verde  transition-all rounded-md flex place-content-center items-center"
    >
     Metalurgica
    </button>
      <button value={"manualidades"} onClick={handleChangeCategory}
      className="py-1 px-2 h-[60%] bg-gray-400 hover:bg-verde focus:bg-verde transition-all rounded-md flex place-content-center items-center"
    >
     Manualidades
    </button>

      <button value={"Materiales"} onClick={handleChangeCategory}
      className="py-1 px-2 h-[60%] bg-gray-400 hover:bg-verde focus:bg-verde transition-all rounded-md flex place-content-center items-center"
    >
     Materiales
    </button>
   
    </section>
   /* <label htmlFor="">Categoria</label>
      <select
        onChange={handleChangeCategory}
        className="text-white"
        name="categorias"
        id=""
      >
        <option value="metalurgica">metalurgica</option>
        <option value="manualidades">manualidades</option>
        <option value="all">todos</option>
      </select> */

    
  );
};

export default Filters;
