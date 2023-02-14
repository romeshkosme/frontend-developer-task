import React from "react";
import userImg from "../assets/user.png";
import msg from "../assets/msg.png";
import smiley from "../assets/smiley.png";
import moreIcon from "../assets/more.png";

function PostCard({ id, name, time, edited, post, comments, setIsOpen }) {
  return (
    <>
      <div onClick={() => setIsOpen(true)} className="bg-[#27292D] border-[#35373B] border-[2px] rounded-[8px] text-[#7F8084] py-[24px] px-[20px] max-w-[700px] mt-4 cursor-pointer">
        <div className="flex">
          <div>
            <img className="min-h-[44px] max-h-[44px] min-w-[44px] max-w-[44px]" src={userImg} />
          </div>
          <div className="flex justify-between items-center w-full pl-[10px]">
            <div>
              <h4 className="text-[#C5C7CA] font-[500] text-[16px] leading-[19px]">
                {name}
              </h4>
              <p className="text-[#7F8084] font-[400] text-[14px] leading-[17px] mt-1">
                {time}
              </p>
            </div>
            <img className="h-[20px]" src={moreIcon} />
          </div>
        </div>
        <div className="bg-[#191920] mt-4 flex p-4 rounded-[8px]">
          <div className="h-[44px] min-w-[44px] rounded-full bg-[#27292D] flex justify-center items-center">
            <img className="w-[20px]" src={smiley} />
          </div>
          <p className="pl-2">{post}</p>
        </div>
        <div className="flex items-center mt-4">
          <img className="h-[20px] w-[20px]" src={msg} />
          <span className="pl-2 text-[14px]">{comments} comments</span>
        </div>
      </div>
    </>
  );
}

export default PostCard;
