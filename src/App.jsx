import React from "react";
import Banner from "./Components/Banner";
import Todo from "./Components/Todo/Todo";

function App() {
  return (
    <div className="p-5 pb-8 bg-[#F8F8F8] -z-20 ">
      <div className="relative z-40">
        {/* banner section */}
        <div className="absolute h-[300px] w-full -z-30">
          <Banner />
        </div>
        {/* banner section end */}

        {/* todo section */}

        <div className="z-30   flex  justify-center  ">
          <div className="mt-[60px] w-[95%] ssm:w-[80%] md:w-[70%] ">
            <Todo />
          </div>
        </div>
        {/* todo section end */}
      </div>
    </div>
  );
}

export default App;
