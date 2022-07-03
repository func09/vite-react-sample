import { useState } from "react";
import { STATUS } from "./config/status";
import ToDoItem from "./components/ToDoItem";
import ToDoContainer from "./components/ToDoContainer";
import ToDoFilter from "./components/ToDoFiter";

function App() {
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState(
    `${STATUS.IS_CREATE}, ${STATUS.IS_DONE}`
  );
  const handelSubmit = (todoItem) => {
    setTodos([...todos, todoItem]);
  };
  const handelOperate = (todoItem) => {
    console.log(todoItem);

    const newTodos = todos.filter((todo) => todo.id !== todoItem.id);
    newTodos.push(todoItem);
    setTodos(newTodos);
  };

  const handleStatusChange = (status) => {
    setFilterStatus(status);
    console.log(status);
  };
  return (
    <div className="todo-app">
      <h2 className="todo-title">todo-list</h2>
      <ToDoItem onSubmit={handelSubmit} />
      <ToDoFilter
        filterStatus={filterStatus}
        onFilterStatus={handleStatusChange}
      />
      <ToDoContainer
        filterStatus={filterStatus}
        todos={todos}
        onOperate={handelOperate}
      />
    </div>
  );
}

export default App;
