import React from "react";

export default function FilterDiv(props) {
  const { image } = props;
  return (
    <div>
      <div className="w-[140px] h-[140px] m-0 flex justify-center items-center hover:bg-blue-700">
        <img src={image} />
      </div>
    </div>
  );
}
