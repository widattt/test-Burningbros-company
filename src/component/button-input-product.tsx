import React from "react";

const ButtonInputProduct = () => {

  return (
    <div
      className={`button-input-product-name bg-neutral-8 rounded-lg p-2 flex items-center gap-2 hover:bg-neutral-7 active:bg-neutral-6 focus:border-primary-30 focus:border-2 focus-visible:border-primary-100`}
    >
      <div className="product-name text-text-0 font-pretendard-headline-4 flex-1">
        Product name
      </div>
    </div>
  );
};

export default ButtonInputProduct;
