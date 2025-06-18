import React from "react";
import Header from "../../other/Header";
import TaskListNum from "../../other/TaskListNum";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = (props) => {
  return (
    <div className=' p-10 bg-[#1C1C1C] h-screen w'>
      {/* <h1>{data.id}</h1> */}
      <Header changeUser={props.changeUser} data={props.data}/>
      <TaskListNum data={props.data} />
      <TaskList data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;
