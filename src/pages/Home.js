import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { POSTS } from "../utils/contant";
import PostCard from "../components/PostCard";
import chat from "../assets/chat.png";
import RegisterCard from "../components/RegisterCard";
import Modal from "../components/Modal";
import LoginCard from "../components/LoginCard";
import CreatePost from "../components/CreatePost";

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
          <CreatePost setIsOpen={setIsOpen} />
          {/* POST LIST */}
          <div className="mb-10">
            {POSTS.map((post) => (
              <PostCard
                key={post.id}
                id={post.id}
                name={post.user}
                time={post.time}
                edited={post.edited}
                post={post.post}
                comments={post.comments}
                setIsOpen={setIsOpen}
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
