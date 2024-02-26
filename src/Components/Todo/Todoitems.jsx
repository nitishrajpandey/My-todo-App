import React from "react";

import Todoitem from "./Todoitem";
import { useSelector } from "react-redux";
import Empty from "./Empty";

function Todoitems() {
  const todobox = useSelector((state) => state.todos.todos);

  return (
    <div className="w-full  ">
      {todobox.length === 0 ? (
        <Empty />
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
