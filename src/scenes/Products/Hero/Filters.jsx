const Filters = ({ changeFilters }) => {
  const handleChangeCategory = (e) => {
    changeFilters((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  };

  return (
    <>
      <label htmlFor="">Categoria</label>
      <select
        onChange={handleChangeCategory}
        className="text-white"
        name="categorias"
        id=""
      >
        <option value="metalurgica">metalurgica</option>
        <option value="manualidades">manualidades</option>
        <option value="all">todos</option>
      </select>
    </>
  );
};

export default Filters;
