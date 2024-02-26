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
      <div className="flex ss:flex-row flex-col gap-5 items-center justify-between ">
        <div className="font-semibold italic">{getCount(filter)} item left</div>
        <div className="flex flex-col xxs:flex-row gap-3">
          <button
            onClick={() => handleFilter("all")}
            className={`${
              filter === "all" ? "bg-yellow-500 text-white" : "bg-[#F8F8F8]"
            } px-4 py-2 rounded-lg shadow-md shadow-gray-300 active:scale-95 duration-300 ease-in-out outline-none  `}
          >
            All
          </button>
          <button
            onClick={() => handleFilter("active")}
            className={`${
              filter === "active" ? "bg-blue-500 text-white" : "bg-[#F8F8F8]"
            } px-4 py-2 rounded-lg shadow-md shadow-gray-300 active:scale-95 duration-300 ease-in-out outline-none`}
          >
            Active
          </button>
          <button
            onClick={() => handleFilter("complete")}
            className={`${
              filter === "complete" ? "bg-green-500 text-white" : "bg-[#F8F8F8]"
            } px-4 py-2 rounded-lg shadow-md shadow-gray-300 active:scale-95 duration-300 ease-in-out outline-none`}
          >
            Complete
          </button>
        </div>
        <div>
          <button
            onClick={handleClearCompleted}
            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md shadow-gray-300 active:scale-95 duration-300 ease-in-out "
          >
            Clear Completed
          </button>
        </div>
      </div>
    </div>
  );
}

export default Controler;
