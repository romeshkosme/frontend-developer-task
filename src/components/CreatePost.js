import React from "react";
import chat from "../assets/chat.png";

function CreatePost({ setIsOpen }) {
  return (
    <div
      className="bg-[#27292D] border-[#35373B] rounded-[8px] border-[2px] w-[700px] min-h-[244px] px-[20px] py-[24px] mt-10 cursor-pointer"
      onClick={() => setIsOpen(true)}
    >
      <h2 className="font-[500] text-[18px] text-[#C5C7CA]">Create Post</h2>
      <div className="w-full bg-[#191920] rounded-[8px] mt-[15px] min-h-[60px] p-5 flex">
        <div className="h-[44px] min-w-[44px] rounded-full bg-[#27292D] flex justify-center items-center">
          <img className="w-[20px]" src={chat} />
        </div>
        <textarea
          className="w-full bg-[#191920] rounded-[8px] min-h-[60px] px-2 focus:outline-none"
          placeholder="How are you feeling today?"
        ></textarea>
      </div>
      <button className="float-right w-[111px] h-[43px] bg-[#4A96FF] rounded-[4px] text-white mt-[10px]">
        Post
      </button>
    </div>
  );
}

export default CreatePost;
