import React from "react";
import Header from "../../other/Header";
import TaskListNum from "../../other/TaskListNum";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ changeUser, user }) => {
  const userData = user?.data;

  return (
    <div className="p-10 bg-[#1C1C1C] h-screen w-screen">
      <Header changeUser={changeUser} user={userData} />
      <TaskListNum data={userData} />
      <TaskList data={userData} />
    </div>
  );
};

export default EmployeeDashboard;
