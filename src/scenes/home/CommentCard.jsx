const CommentCard = ({ profilePic, username, comment, date }) => {
  return (
    <article className="flex flex-col  rounded-xl bg-dark text-white px-3 py-5 shadow-md gap-3">
      <div className="h-full flex  rounded-full gap-2 ">
        <picture className="w-[60px] flex h-[60px]"><img className="" src={profilePic} alt="" /></picture>
        <div>
          <h4 className="text-xl font-bold">{username}</h4>
          <h4 className="text-gray-200">{date}</h4>
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full h-[70%] place-content-center items-center">
        
        <p className="text-sm">{comment}</p>
      </div>
    </article>
  );
};

export default CommentCard;
