const SearchBar = () => {
  return (
    <div className="flex w-[90%] h-10 rounded-full bg-stone-400 text-black py-1 px-3 place-content-center items-center">
        <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      fill="none"
      viewBox="0 0 15 15"
    >
      <path
        fill="#000"
        d="M6.415 12.829a6.376 6.376 0 003.926-1.354L13.866 15 15 13.866l-3.525-3.524a6.376 6.376 0 001.354-3.928A6.422 6.422 0 006.415 0 6.422 6.422 0 000 6.414a6.422 6.422 0 006.415 6.415zm0-11.225a4.816 4.816 0 014.81 4.81 4.816 4.816 0 01-4.81 4.811 4.816 4.816 0 01-4.811-4.81 4.816 4.816 0 014.81-4.811z"
      ></path>
    </svg>
        <input className="w-full h-full bg-inherit rounded-full outline-none px-1 placeholder:text-black" placeholder="Buscar" type="text" name="" id="" />
    </div>
  )
}

export default SearchBar