import React from "react";
import DeviceList from "./device-list";

const ProductList = () => {
  return (
    <div className="bg-white dark:bg-gray-800 flex flex-col gap-[24px] items-start justify-start self-stretch flex-1 relative overflow-hidden">
     <div className="bg-white dark:bg-gray-800 flex flex-row gap-[16px] items-center justify-start self-stretch flex-shrink-0 relative">
        <div className="text-text-0 text-left font-pretendard-headline-2 relative">Product List</div>
        <div className="flex flex-row gap-10 items-center justify-center flex-1 relative overflow-hidden">
          <div className="border border-dashed border-neutral-4 h-[1px] flex-1 relative overflow-hidden"></div>
        </div>
      </div>
      <DeviceList/>
    </div>
  );
};

export default ProductList;
