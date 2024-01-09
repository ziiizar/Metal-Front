import {
  Card,
  Title,
  Text,
  Flex,
  Table,
  TableRow,
  TableHead,
  TableHeaderCell,
  TableBody,
  Badge,
  Button,
} from "@tremor/react";

const colors = {
  "Ready for dispatch": "gray",
  Cancelled: "rose",
  Shipped: "emerald",
};

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

import { useState, useEffect } from "react";
import Edit from "../Icons/Edit";
import Save from "../Icons/Save";
import EditModal from "./EditModal";
import PreviewModal from "./PreviewModal";
import { NewModal1 } from "./NewModal1";

export default function Example() {
  const [editing, setEditing] = useState(false);
  const [buttonText, setButtonText] = useState("Edit");
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [secondModalIsOpen, setSecondModalIsOpen] = useState(false);
  const [modalStates, setModalStates] = useState({});

  const handleOpenModal = (itemId) => {
    setModalStates((prevStates) => ({
      ...prevStates,
      [itemId]: true,
    }));
  };

  const handleCloseModal = (itemId) => {
    setModalStates((prevStates) => ({
      ...prevStates,
      [itemId]: false,
    }));
  };
  // function handleEditClick(event) {
  //   const row = event.target.closest("tr");
  //   const cells = row.querySelectorAll("td");
  //   try {
  //     if (editing === false) {
  //       cells.forEach((cell) => {
  //         if (cell.textContent.trim().length > 0) {
  //           cell.contentEditable = true;
  //         }
  //       });
  //     } else {
  //       cells.forEach((cell) => {
  //         cell.contentEditable = false;
  //       });
  //     }
  //   } catch (e) {
  //     console.log("error");
  //   } finally {
  //     setEditing(!editing);
  //   }
  // }

  return (
    <Card className=" text-black ">
      <Flex justifyContent="start" className="space-x-2">
        <Title>Productos</Title>
        <Badge color="gray">8</Badge>
      </Flex>
      <Text className="mt-2">Overview of this month's purchases</Text>
      <table className="table-auto text-left divide-y-[2px] divide-gray-600 w-full">
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
              <td className="">
                <button
                  onClick={() => handleOpenModal(item.id)}
                  className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium px-4 py-2 rounded hover:opacity-90 transition-opacity"
                >
                  <Edit />
                </button>
                <NewModal1
                  image={item.image}
                  price={item.price}
                  name={item.name}
                  isOpen={modalStates[item.id] || false}
                  setIsOpen={(isOpen) => handleCloseModal(item.id, isOpen)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
