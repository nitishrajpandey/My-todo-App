// Controler.js

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, clearCompleted } from "../../Store/todoSlice";

function Controler() {
  const dispatch = useDispatch();
  const todoItems = useSelector((state) => state.todos.todos);
  const filter = useSelector((state) => state.todos.filter);

  const handleFilter = (filter) => {
    dispatch(setFilter(filter));
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  // Calculate counts based on filter
  const getCount = (status) => {
    if (status === "all") {
      return todoItems.length;
    } else if (status === "active") {
      return todoItems.filter((todo) => !todo.isActive).length;
    } else if (status === "complete") {
      return todoItems.filter((todo) => todo.isActive).length;
    }
    return 0;
  };

  return (
    <div>
      <div className="flex justify-between items-baseline">
        <div>{getCount(filter)} item left</div>
        <div className="flex gap-3">
          <button onClick={() => handleFilter("all")}>All</button>
          <button onClick={() => handleFilter("active")}>Active</button>
          <button onClick={() => handleFilter("complete")}>Complete</button>
        </div>
        <div>
          <button onClick={handleClearCompleted}>Clear Completed</button>
        </div>
      </div>
    </div>
  );
}

export default Controler;
