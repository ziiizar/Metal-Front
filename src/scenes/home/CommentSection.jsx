import CommentCard from "./CommentCard";
import { useState } from "react";

const CommentSection = () => {

  const [seeMore, setSeeMore] = useState(false);
  const handleClick = () => {
    setSeeMore(!seeMore)
  }
  return (
    <section  data-header-color='black' className={ `landing grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3  overflow-hidden pt-16 bg-babyPowder dark:bg-payneGray p-5 relative ${seeMore?"h-auto":"max-h-screen"}`}>

<div className="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-black pt-32 pb-8 pointer-events-none  absolute"><button onClick={handleClick} type="button" className="relative bg-slate-900 hover:bg-slate-700 focus:outline-none  text-sm text-white font-semibold h-12 px-6 rounded-lg flex items-center  pointer-events-auto">{seeMore ? "Ver menos": "Ver mas"}</button></div>
      {/* <button className="h-8 py-2 px-4 bg-slate-800 absolute bottom-2 m text-center">Ver mas</button> */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div> */}
      <ul className="flex flex-col gap-6">
      <li className="flex ">
          <CommentCard
            comment={
              "Cuando me vayan a cael caiganme en alicoltelo tanke e guerra toesa historia yo ando enfermoelosnelvio"
            }
            username={"John China"}
            date={"30-12-2023"}
            profilePic={"/assets/John Xina 1.png"}
          ></CommentCard>
        </li> 
        
        <li className="flex ">
          <CommentCard
            comment={
              "Cuando me vaya me vayan a cael caiganme en alicoltelo tanke e guerra toesa historia yo ando enfermoelosnelvin a cael caiganme en alicoltelo tanke e guerra toesa historia yo ando enfermoelosnelvio"
            }
            date={"30-12-2023"}

            username={"John China"}
            profilePic={"/assets/John Xina 1.png"}
          ></CommentCard>
        </li> 
        <li className="flex ">
          <CommentCard
            comment={
              "Cuando me vayan a cael caiganme en alicoltelo tanke e guerra toesa historia yo ando enfermoelosnelvio"
            }
            date={"30-12-2023"}
            username={"John China"}
            profilePic={"/assets/John Xina 1.png"}
          ></CommentCard>
        </li> 

        <li className="flex ">
          <CommentCard
            comment={
              "Cuando me vayan a cael caiganme en alicoltelo tanke e guerra toesa historia yo ando enfermoelosnelvio"
            }
            date={"30-12-2023"}
            username={"John China"}
            profilePic={"/assets/John Xina 1.png"}
          ></CommentCard>
        </li> 
      </ul>
      <ul className="flex flex-col gap-6">
      <li className="flex ">
          <CommentCard
            comment={
              "Cuando me vayan a cael caiganme en alicoltelo tanke e guerra toesa historia yo ando enfermoelosnelvio"
            }
            username={"John China"}
            profilePic={"/assets/John Xina 1.png"}
          ></CommentCard>
        </li> 
        
        <li className="flex ">
          <CommentCard
            comment={
              "Cuando me vayan a cael caiganme en alicoltelo tanke e guerra toesa historia yo ando enfermoelosnelvio"
            }
            username={"John China"}
            profilePic={"/assets/John Xina 1.png"}
          ></CommentCard>
        </li> 
        <li className="flex ">
          <CommentCard
            comment={
              "Cuando me vayan a cael caiganme en alicoltelo tanke e guerra toesa historia yo ando enfermoelosnelvio"
            }
            username={"John China"}
            profilePic={"/assets/John Xina 1.png"}
          ></CommentCard>
        </li> 

        <li className="flex ">
          <CommentCard
            comment={
              "Cuando me vayan a cael caiganme en alicoltelo tanke e guerra toesa historia yo ando enfermoelosnelvio"
            }
            username={"John China"}
            profilePic={"/assets/John Xina 1.png"}
          ></CommentCard>
        </li> 
      </ul>
      <ul className="flex flex-col gap-6">
      <li className="flex ">
          <CommentCard
            comment={
              "Cuando me vayan a cael caiganme en alicoltelo tanke e guerra toesa historia yo ando enfermoelosnelvio yan a cael caiganme en alicoltelo tanke e guerra toesa historia yo ando enfermoelosnelv"
            }
            username={"John China"}
            profilePic={"/assets/John Xina 1.png"}
          ></CommentCard>
        </li> 
        
        <li className="flex ">
          <CommentCard
            comment={
              "Cuando me vayan a cael caiganme en alicoltelo tanke e guerra toesa historia yo ando enfermoelosnelvio"
            }
            username={"John China"}
            profilePic={"/assets/John Xina 1.png"}
          ></CommentCard>
        </li> 
        <li className="flex ">
          <CommentCard
            comment={
              "Cuando me vayan a cael caiganme en alicoltelo tanke e guerra toesa historia yo ando enfermoelosnelvio"
            }
            username={"John China"}
            profilePic={"/assets/John Xina 1.png"}
          ></CommentCard>
        </li> 

        <li className="flex ">
          <CommentCard
            comment={
              "Cuando me vayan a cael caiganme en alicoltelo tanke e guerra toesa historia yo ando enfermoelosnelvio"
            }
            username={"John China"}
            profilePic={"/assets/John Xina 1.png"}
          ></CommentCard>
        </li> 
      </ul>
    </section>
  );
};

export default CommentSection;
