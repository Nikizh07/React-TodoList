import React, { useState } from "react";
import "../App.css";

const Todo = () => {
  const [Task, setTask] = useState(Array().fill(null));
  const [NewTask, setNewTask] = useState("");
  function handleTasks() {
    let tasks = [...Task, NewTask];
    setTask(tasks);
    setNewTask("");
  }

  function handleNewTasks(event) {
    setNewTask(event.target.value);
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent default Enter behavior
      handleTasks(); // Call your custom submit function
    }
  };

  function handleDelete(index) {
    let t = Task.filter((e , i) => i !== index);
    setTask(t)
  }

  return (
    <>
      <div className="container border-black border-2px mx-auto bg-white py-[50px] my-[50px] w-[40%] rounded-[10px] shadow-lg">
        <h1 className="title text-[30px] my-[5px]">ToDo List</h1>
        <input
          type="text"
          placeholder="Enter The Task.."
          className="mx-[150px] my-[10px] border-gray border-[2px] px-[10px] py-[5px] mr-[30px]  rounded-[10px] text-[15px]"
          onChange={handleNewTasks}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleTasks}
          className="bg-blue-500bg-blue-500 hover:bg-green-600 text-gray-400 font-bold py-2 px-4 rounded shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Submit
        </button>
        <tr className="list-none" id="liist">
          {Task.map((task ,index) => (
            <div className="mx-[30px] border-[2px] border-gray w-[550px] my-[10px] px-[7px] py-[10px] flex justify-between items-center rounded-[5px]
            ">
            <li className="">{task}</li>
            <button className="delete-btn bg-red-400 px-[10px] py-[5px] rounded-[5px]" onClick={() => {handleDelete(index)}}>&#128465;</button>
            </div>
          ))}
        </tr>
      </div>
    </>
  );
};

export default Todo;
