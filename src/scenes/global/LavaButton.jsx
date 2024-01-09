const LavaButton = ({ children }) => {
    return (
      <button className="bg-gradient-to-r from-orange-600 via-red-800 to-amber-800 font-bold py-1 px-3 rounded-lg transform transition duration-500 hover:scale-105 border-2 border-black">
        {children}
      </button>
    );
  };
  
  export default LavaButton;