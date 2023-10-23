const CreateNewEvent = () => {
  return (
    <div className=" w-screen  h-screen flex place-content-center items-center ">
      <section className="flex flex-col w-3/5 h-4/5 rounded-md shadow-xl bg-white justify-between ">
        <div className="w-4/5 h-3/5 border-2 border-dotted border-black">
          <img src="" alt="" />
        </div>

        <div className="h-2/5 w-full flex flex-col gap-1">
          <input type="date" name="" id="" />
          <input type="text" placeholder="Titulo" />

          <textarea placeholder="Descripcion" className="w-full h-3/5" />
        </div>
      </section>
    </div>
  );
};

export default CreateNewEvent;
