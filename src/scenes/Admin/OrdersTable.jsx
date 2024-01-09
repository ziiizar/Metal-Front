
const transactions = [
    {
      image: "/assets/John Xina 1.png",
      id: "#123456",
      name: "puerta",
      price: "Lena Mayer",
      description: "Under Armour Shorts",
      category: "Ready for dispatch",
      stock: "$ 49.90",
      ventas: "#",
      avaiable: true,
    },
    {
      id: "#234567",
      name: "reja",
  
      price: "Max Smith",
      description: "Book - Wealth of Nations",
      category: "Ready for dispatch",
      stock: "$ 19.90",
      ventas: 59494,
      avaiable: false,
    },
    {
      image: "/assets/John Xina 1.png",
      id: "#324",
      name: "puerta",
      price: "Lenaaaa Mayer",
      description: "Under Armour Shorts",
      category: "Ready for dispatch",
      stock: "$ 49.90",
      ventas: "#",
      avaiable: true,
    },
  ];

const OrdersTable = () => {
  return (
    <table className="table-auto text-left divide-y-[2px] divide-gray-600 w-full text-black">
    <thead>
      <tr className="">
        <th className="px-4 py-2">Imagen</th>
        <th className="px-4 py-2">Nombre</th>
        <th className="px-4 py-2">Precio</th>
        <th className="px-4 py-2">Descripcion</th>
        <th className="px-4 py-2">Categoria</th>
        <th className="px-4 py-2">Stock</th>
        <th className="px-4 py-2">Ventas</th>
        <th className="px-4 py-2">Habilitado</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map((item) => (
        <tr key={item.id}>
          <td className="px-4 py-2">
            <picture className="h-10 w-10 ">
              <img className="h-10 w-10" src={item.image} alt=""></img>
            </picture>
          </td>
          <td className="px-4 py-2">{item.name} </td>
          <td className="px-4 py-2">{item.price}</td>
          <td className="px-4 py-2">{item.description}</td>

          <td className="px-4 py-2">{item.category}</td>
          <td className="px-4 py-2">{item.stock}</td>
          <td className="px-4 py-2">{item.ventas}</td>
          <td className="px-4 py-2 text-center">
            {item.avaiable ? (
              <input
                className="bg-green-200"
                checked
                type="checkbox"
                name=""
                id=""
              />
            ) : (
              <input className="bg-red-400" type="checkbox" name="" id="" />
            )}

            {item.avaiable}
          </td>
        
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default OrdersTable