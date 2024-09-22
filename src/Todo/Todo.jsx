import { useState } from "react";

import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import "./Todo.css";

const todosKey = "todos";

export const Todo = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem(todosKey)) || []
  );

  const handleFormSubmit = (inputvalue) => {
    const { id, content, checked } = inputvalue;

    // Check if the input is empty
    if (!content) return;

    // Check if the input is only spaces
    if (!content.trim()) return;

    // Check if the task already exists
    // if (tasks.includes(inputvalue)) return;
    const ifTodoContentMatched = tasks.find((task) => task.content === content);
    if (ifTodoContentMatched) return;

    setTasks((prevTask) => [...prevTask, { id, content, checked }]);
  };

  // Save Task to Local Storage
  localStorage.setItem(todosKey, JSON.stringify(tasks));

  // Delete Task
  const handleDeleteTask = (value) => {
    const updatedTask = tasks.filter((curTask) => curTask.content !== value);
    setTasks(updatedTask);
  };

  // Clear All Task
  const handleClearAll = () => {
    setTasks([]);
  };

  // Check and Uncheck Task
  const handleCheckedTodo = (task) => {
    const updatedTask = tasks.map((curTask) => {
      if (curTask.content === task) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setTasks(updatedTask);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>

      <TodoForm onAddTodo={handleFormSubmit} />

      <section className="myUnOrderList">
        <ul>
          {tasks.map((curTask) => {
            return (
              <TodoList
                key={curTask.id}
                data={curTask.content}
                checked={curTask.checked}
                onHandleDeleteTodo={handleDeleteTask}
                onHandleCheckedTodo={handleCheckedTodo}
              />
            );
          })}
        </ul>
      </section>

      <section>
        <button onClick={() => handleClearAll()} className="clear-btn">
          Clear all
        </button>
      </section>
    </section>
  );
};
