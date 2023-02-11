import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { POSTS } from "../utils/contant";
import PostCard from "../components/PostCard";
import chat from "../assets/chat.png";
import RegisterCard from "../components/RegisterCard";
import Modal from "../components/Modal";
import LoginCard from "../components/LoginCard";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalState, setModalState] = useState("register");
  return (
    <>
      <div className="bg-[#131319] flex justify-center items-center cursor-default">
        <div className="text-[#C5C7CA] mt-10">
          {/* INTRO */}
          <div>
            <h1 className="font-[500] text-[28px]">Hello Jane</h1>
            <p className="text-[#7F8084] font-[400] text-[16px] mt-3 max-w-[580px]">
              How are you doing today? Would you like to share something with
              the community 🤗
            </p>
          </div>
          {/* CREATE POST */}
          <div
            className="bg-[#27292D] border-[#35373B] rounded-[8px] border-[2px] w-[700px] min-h-[244px] px-[20px] py-[24px] mt-10"
            onClick={() => setIsOpen(true)}
          >
            <h2 className="font-[500] text-[18px] text-[#C5C7CA]">
              Create Post
            </h2>
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
          {/* POST LIST */}
          <div>
            {POSTS.map((post) => (
              <PostCard
                key={post.id}
                id={post.id}
                name={post.user}
                time={post.time}
                edited={post.edited}
                post={post.post}
                comments={post.comments}
              />
            ))}
          </div>
        </div>
      </div>
      <Modal open={isOpen}>
        {modalState === "register" ? (
          <RegisterCard setIsOpen={setIsOpen} setModalState={setModalState} />
        ) : (
          <LoginCard
            isModal={true}
            setIsOpen={setIsOpen}
            setModalState={setModalState}
          />
        )}
      </Modal>
    </>
  );
}

export default Home;
