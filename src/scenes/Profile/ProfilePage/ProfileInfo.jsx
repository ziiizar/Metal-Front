import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProfileInfo = ({ userData }) => {
  return (
    <>
      <div className="flex">
        <img
          className="w-[120px] h-[180px] rounded-full bg-gray-800"
          src=""
          alt=""
        />
        <h2>Nombre de perfil</h2>
      </div>
      <div className="flex flex-col">
        <div>
          <label htmlFor=""> username: </label>
          <h3>{userData.username}</h3>
        </div>
        <div>
          <label htmlFor=""> email: </label>
          <h3>{userData.email}</h3>
        </div>
        <div>
          <label htmlFor=""> rol: </label>
          <h3>{userData.rol}</h3>
        </div>

        <button className="bg-green-700">
          <Link to={`/MyProfile/Orders/${userData.id}`}>Mis Ordenes </Link>
        </button>
      </div>
    </>
  );
};

// ProfileInfo.propTypes ={
//     userData: PropTypes.array
//   }

export default ProfileInfo;
