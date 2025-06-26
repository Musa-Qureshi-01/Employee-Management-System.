import React from "react";
import Header from "../../other/Header";
import CreateTask from "../../other/CreateTask";
import Alltask from "../../other/Alltask";

const AdminDashboard = ({ changeUser, user }) => {
  return (
    <div className="h-screen w-screen p-10 bg-[#1C1C1C]">
      <Header changeUser={changeUser} user={user} />
      <CreateTask />
      <Alltask />
    </div>
  );
};

export default AdminDashboard;
