import { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const AddTask = () => {
    if (newTask !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  };

  const handleNewTask = (e) => {
    setNewTask(e.target.value);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const moveTaskUp = (index) => {

    if(index > 0){
      const updatedTasks = [...tasks];
      [updatedTasks[index],updatedTasks[index - 1]] = [updatedTasks[index - 1],updatedTasks[index]];
      setTasks(updatedTasks)
    }
  };

  const moveTaskDown = (index) => {
    if(index < tasks.length - 1){
      const updatedTasks = [...tasks];
      [updatedTasks[index],updatedTasks[index + 1]] = [updatedTasks[index + 1],updatedTasks[index]];
      setTasks(updatedTasks)
    }
  };

  return (
    <>
      <div className="mx-3">
        <h2>To-Do-List</h2>
      </div>
      <div className="d-flex justify-around">
        <input
          className="form-control w-50 mx-3"
          type="text"
          placeholder="Enter a Task"
          value={newTask}
          onChange={handleNewTask}
        />
        <button className="btn btn-dark" onClick={() => AddTask()}>
          Add
        </button>
      </div>
      <div className="mx-3 my-5">
        <ol>
          {tasks.map((task, index) => (
            <li key={index} className="mb-3">
              <span className="fw-bold">{task} </span>
              <button
                className="btn btn-danger py-0"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
              <button
                className="btn btn-success py-0 mx-2"
                onClick={() => moveTaskUp(index)}
              >
                UP
              </button>
              <button
                className="btn btn-dark py-0 mx-2"
                onClick={() => moveTaskDown(index)}
              >
                DOWN
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default ToDoList;
