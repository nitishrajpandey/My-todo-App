import React from "react";

import Todoitem from "./Todoitem";

function Todoitems() {
  return (
    <div className="w-full  ">
      <div>
        <ul>
          <li className="">
            <Todoitem />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Todoitems;
