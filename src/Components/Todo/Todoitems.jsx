import React from "react";

import Todoitem from "./Todoitem";
import { useSelector } from "react-redux";

function Todoitems() {
  const todobox = useSelector((state) => state.todos.todos);
  console.log(todobox.length);
  console.log(typeof todobox);
  return (
    <div className="w-full  ">
      {todobox.length === 0 ? (
        <h1>Empty</h1>
      ) : (
        <div>
          <ul>
            <li className="">
              <Todoitem />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Todoitems;
