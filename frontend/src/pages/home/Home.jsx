// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";
import { useAuthContext } from "../../context/AuthContext";

const Home = () => {
  const { authUser } = useAuthContext();

  return (
    <>
      <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">

        <Sidebar />

        <MessageContainer />
      </div>
    </>
  );
};

export default Home;
