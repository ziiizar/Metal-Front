import CommentCard from "./CommentCard";

const CommentSection = () => {
  return (
    <section className="w-full h-screen flex place-content-center items-center bg-limon">
      <ul className="flex  overflow-auto w-full pl-3 gap-3">
        <li className="flex min-w-[300px] h-[400px] ">
          <CommentCard
            comment={
              "Cuando me vayan a cael caiganme en alicoltelo tanke e guerra toesa historia yo ando enfermoelosnelvio"
            }
            username={"John China"}
            profilePic={"/assets/John Xina 1.png"}
          ></CommentCard>
        </li>

        <li className="flex min-w-[300px] h-[400px]">
          <CommentCard
            comment={
              "Cuando me vayan a cael caiganme en alicoltelo tanke e guerra toesa historia yo ando enfermoelosnelvio"
            }
            username={"John China"}
            profilePic={"/assets/John Xina 1.png"}
          ></CommentCard>
        </li>

        <li className="flex min-w-[300px] h-[400px]">
          <CommentCard
            comment={
              "Cuando me vayan a cael caiganme en alicoltelo tanke e guerra toesa historia yo ando enfermoelosnelvio"
            }
            username={"John China"}
            profilePic={"/assets/John Xina 1.png"}
          ></CommentCard>
        </li>

        <li className="flex min-w-[300px] h-[400px]">
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
