import useUserData from "./hooks/useUserData";
import { useLoged } from "../../hooks/useLoged";
import ProfileInfo from "./ProfileInfo";

const ProfilePage = () => {
  const {data} = useUserData();
  const { logOut } = useLoged();

  console.log(data)

  return (
    <div className="w-full h-full flex flex-col items-center place-content-center">
      <div className="w-10/12 h-4/5 bg-slate-300">
        <ProfileInfo userData={data} />

        <button className="bg-black" onClick={logOut}>
          Cerrar sesion
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
