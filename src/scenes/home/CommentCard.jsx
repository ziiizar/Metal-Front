const CommentCard = ({ profilePic, username, comment }) => {
  return (
    <article className="flex flex-col h-full w-full border-[1px] border-white rounded-xl bg-gradient-to-br from-commentGradient1 to-commentGradient2 text-white p-3 pt-5">
      <div className="w-full flex h-[30%] place-content-center items-center">
        <img className="rounded-full" src={profilePic} alt="" />
      </div>
      <div className="flex flex-col gap-3 w-full h-[70%] place-content-center items-center">
        <h4>{username}</h4>
        <p>{comment}</p>
      </div>
    </article>
  );
};

export default CommentCard;
