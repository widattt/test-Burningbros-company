import React from "react";

const ButtonMark = () => {
  return (
    <button
      className="w-64 h-224 top-120 left-1061 p-20 border-1 gap-16 bg-gradient-to-b from-#9747FF to-#9747FF via-#FCFCFC from-[#FCFCFC] to-[#FCFCFC] border-#9747FF border-solid rounded-lg text-white hover:bg-#FCFCFC hover:text-#9747FF focus:outline-none focus:border-#9747FF focus:ring focus:ring-#9747FF focus:ring-opacity-50 relative"
    >
      <img
        src="/path/to/your/image-x.png" // Thay đổi đường dẫn hình ảnh của bạn
        alt="X"
        className="w-full h-full object-cover"
      />
    </button>
  );
};

export default ButtonMark;