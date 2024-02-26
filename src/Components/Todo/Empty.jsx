import React, { useState, useEffect } from "react";

const Empty = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, []);

  const formatDate = (date) => {
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  };

  return (
    <div className="flex flex-col items-center my-20 gap-5">
      <h1 className="font-serif font-bold xs:text-2xl">Empty TODO list</h1>
      <h2 className="font-mono font-medium xs:text-xl">
        Today's Date and Time
      </h2>
      <p className="font-mono font-medium text-base xs:text-2xl">
        {formatDate(currentDateTime)}
      </p>
    </div>
  );
};

export default Empty;
