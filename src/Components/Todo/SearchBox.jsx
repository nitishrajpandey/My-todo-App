import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../Store/todoSlice";
import { nanoid } from "nanoid";

function SearchBox() {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handelOnClick = () => {
    const value = {
      inputValue: inputElement.current.value,
      id: nanoid(),
    };
    inputElement.current.value = "";
    dispatch(addTodo(value));
  };

  const handelOnKeyDown = (event) => {
    const value = {
      inputValue: inputElement.current.value,
      id: nanoid(),
    };
    if (event.key === "Enter") {
      inputElement.current.value = "";
      dispatch(addTodo(value));
    }
  };

  return (
    <div className="flex gap-10 bg-white py-2 px-5 rounded-xl">
      <input
        type="text"
        placeholder="Add todo.."
        ref={inputElement}
        className="w-full px-5 py-2 text-xl outline-none"
        onKeyDown={handelOnKeyDown}
      />
      <button
        className="px-5 py-2 bg-green-700 text-white  text-xl rounded-xl"
        onClick={handelOnClick}
      >
        Create
      </button>
    </div>
  );
}

export default SearchBox;
