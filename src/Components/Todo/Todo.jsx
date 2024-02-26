import React from "react";
import SearchBox from "./SearchBox";
import Todoitem from "./Todoitems";
import Controler from "./Controler";
import Todoitems from "./Todoitems";

function Todo() {
  return (
    <div className="w-full">
      <div>
        <div className="mb-5">
          <h1 className="font-bold text-5xl text-white">TODO</h1>
        </div>
        <div className="mb-14">
          <SearchBox />
        </div>

        <div className="min-h-[50vh] flex flex-col justify-between p-5 bg-red-600">
          <div>
            <Todoitems />
          </div>

          {/* controlleres */}
          <div className="w-full">
            <Controler />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
