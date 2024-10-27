import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TodoApp = () => {
  const [Tasks, setTasks] = useState([]);
  const [NewTasks, setNewTasks] = useState("");

  function handleAddTask(event) {
    event.preventDefault()
    setTasks([...Tasks, NewTasks]);
    setNewTasks("");
  }

  function handleNewTask(event) {
    setNewTasks(event.target.value);
  }

  function handleDeleteTask(index) {
    const updatedTasks = Tasks.filter((e, i) => i !== index );
    setTasks(updatedTasks);
  }

  return (
    <section className="vh-100" >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-9 col-xl-7">
            <div
              className="card rounded-3"
              style={{ backgroundColor: "rgb(176, 134, 215 , 0.8)" }}
            >
              <div className="card-body p-4">
                <h4
                  className="text-center my-3 pb-3"
                  style={{
                    fontFamily: "Rubik Wet Paint, system-ui",
                    fontSize: "35px",
                  }}
                >
                  To Do App
                </h4>

                <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2" onSubmit={
                  handleAddTask
                }>
                  <div className="col-12">
                    <div data-mdb-input-init className="form-outline">
                      <input
                        type="text"
                        id="form1"
                        className="form-control"
                        placeholder="Enter a task...."
                        onChange={handleNewTask}
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <button
                      className="btn btn-primary"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </form>

                <table className="table mb-4">
                  <thead>
                    <tr>
                      <th scope="col">No.</th>
                      <th scope="col">Todo item</th>
                      <th scope="col">Status</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="tassks">
                    {Tasks.map((task, index) => (
                      <tr>
                        <th scope="row">{index+1}</th>
                        <td>{task}</td>
                        <td>In progress</td>
                        <td>
                          <button type="button" className="btn btn-danger" onClick={() => {handleDeleteTask(index)}}>
                            Delete
                          </button>
                          <button
                            type="button"
                            className="btn btn-success ms-1"
                          >
                            Finished
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodoApp;


