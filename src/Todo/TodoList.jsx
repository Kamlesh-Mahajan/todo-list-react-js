/* eslint-disable react/prop-types */
import { MdCheck, MdDeleteForever } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";

export const TodoList = ({
  data,
  checked,
  onHandleDeleteTodo,
  onHandleCheckedTodo
}) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>

      <button
        className={checked ? "uncheck-btn" : "check-btn"}
        onClick={() => onHandleCheckedTodo(data)}
      >
        {checked ? <IoMdCloseCircle /> : <MdCheck />}
      </button>

      <button onClick={() => onHandleDeleteTodo(data)} className="delete-btn">
        <MdDeleteForever />
      </button>
    </li>
  );
};
