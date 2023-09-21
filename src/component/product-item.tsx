import React, { useEffect, useState } from "react";
import { Product } from "../model/index";
import useDebounce from "../hooks/useDebounce";
import { useQueryClient } from "react-query";
import { useProductStore } from "./useProductStore";

type Props = {
  product: Product;
};

const ProductItem = ({ product }: Props) => {
  const { updateProduct } = useProductStore();

  const [inputData, setInputData] = useState(product.title);
  const queryClient = useQueryClient()

  // Sử dụng hook useDebounce để trì hoãn giá trị inputData
  const debouncedInputData = useDebounce(inputData, 500); // 500 mill

  useEffect(() => {

    const handleProductEdit = (productId: number, title: string) => {
      queryClient.setQueryData('products', (oldData: Product[] | undefined) => {
        if (!oldData) {
          return [];
        }
        const updatedProducts = oldData.map((product) => {
          if (product.id === productId) {
              
            return { ...product, title };
          }
          return product;
        });
        return updatedProducts;
      });
      updateProduct(product.id, {...product,title: inputData})
    }
    
    handleProductEdit(product.id, inputData)
  }, [debouncedInputData]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    setInputData(event.target.value);
  };


  return (
    <div className="box-border transition-transform duration-300 ease-in-out bg-neutral-8 dark:bg-white rounded-lg p-[12px] 16px 12px 16px flex flex-row gap-[24px] items-center justify-start flex-shrink-0 w-252px relative overflow-hidden transform hover:scale-105">
      <img
        className="rounded-lg flex-shrink-0 w-[72px] h-[72px] relative overflow-hidden"
        src={product.images[0]}
        alt="Product"
      />
      <div className="bg-neutral-8 dark:bg-white flex flex-col gap-[8px] items-start justify-start flex-1 relative">
        <div className="bg-neutral-8  rounded-lg py-[6px] px-[8px] flex flex-row gap-[10px] items-center justify-start self-stretch flex-shrink-0 relative hover:bg-[#f8f8f9]">
          <input
            type="text"
            value={inputData}
            onChange={handleInputChange}
            className="bg-inherit text-text-0 text-left font-pretendard-headline-4 relative flex-1 focus-visible:outline-none"
          />
        </div>
        <div className="p-0 8px 0px 8px flex flex-row gap-10 items-start justify-start flex-shrink-0 relative">
          <div className="text-text-1 text-left font-pretendard-body-2 relative">{`$ ${product.price}`}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
