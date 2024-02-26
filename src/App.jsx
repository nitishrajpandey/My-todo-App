import React from "react";
import Banner from "./Components/Banner";
import Todo from "./Components/Todo/Todo";

function App() {
  return (
    <div className="p-5">
      <div className="relative">
        {/* banner section */}
        <div className="absolute h-[300px] w-full -z-30">
          <Banner />
        </div>
        {/* banner section end */}

        {/* todo section */}

        <div className="z-30   flex  justify-center ">
          <div className="my-[60px] w-[70%]">
            <Todo />
          </div>
        </div>
        {/* todo section end */}
      </div>
    </div>
  );
}

export default App;
