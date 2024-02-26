// Todoitem.js

import React from "react";
import { MdDelete } from "react-icons/md";
import { FaCheck, FaEdit } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo, editTodo } from "../../Store/todoSlice";

function Todoitem() {
  const todoItems = useSelector((state) => {
    if (state.todos.filter === "active") {
      return state.todos.todos.filter((todo) => !todo.isActive);
    } else if (state.todos.filter === "complete") {
      return state.todos.todos.filter((todo) => todo.isActive);
    }
    return state.todos.todos;
  });
  const dispatch = useDispatch();
  const [editableItemId, setEditableItemId] = React.useState(null);
  const [editedText, setEditedText] = React.useState("");

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteButton = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEditButton = (id, text) => {
    setEditableItemId(id);
    setEditedText(text);
  };

  const handleEditSave = (id) => {
    dispatch(editTodo({ id, newValue: editedText }));
    setEditableItemId(null);
  };

  const handleChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <div>
      {todoItems.map((item) => (
        <div
          key={item.id}
          className={`flex justify-between py-1 bg-green-500 mb-3 ${
            item.isActive ? "line-through" : ""
          }`}
        >
          {editableItemId === item.id ? (
            <input
              type="text"
              value={editedText}
              onChange={handleChange}
              autoFocus
            />
          ) : (
            <p>{item.inputValue}</p>
          )}
          <span className="flex gap-2">
            {editableItemId === item.id ? (
              <button onClick={() => handleEditSave(item.id)}>
                <FaCheck />
              </button>
            ) : (
              <>
                <button
                  onClick={() => handleEditButton(item.id, item.inputValue)}
                >
                  <FaEdit />
                </button>
                <button onClick={() => handleDeleteButton(item.id)}>
                  <MdDelete />
                </button>
                {item.isActive ? (
                  <button onClick={() => handleToggle(item.id)}>
                    <RxCross2 />
                  </button>
                ) : (
                  <button onClick={() => handleToggle(item.id)}>
                    <FaCheck />
                  </button>
                )}
              </>
            )}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Todoitem;
