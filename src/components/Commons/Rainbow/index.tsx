import React from "react";

const Rainbow: React.FC = () => {
  const data = [
    { color: "bg-theme-yellow" },
    { color: "bg-theme-gray" },
    { color: "bg-theme-pink" },
    { color: "bg-theme-green" },
  ];

  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className={`inline-block ${item.color} w-5 h-5`}></div>
      ))}
    </div>
  );
};

export default Rainbow;
