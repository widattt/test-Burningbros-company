import React, { useEffect, useState } from "react";
import ProductItem from "./product-item";
import { Virtuoso } from "react-virtuoso";
import { Product } from "../model";
import { useProductsQuery } from '../hooks/useProductsQuery';
import { useProductStore } from "./useProductStore";
import { useQueryClient } from "react-query";



function DeviceList() {

  const { data: productsApi, isLoading, isError } = useProductsQuery();
  const products = useProductStore((state) => state.products);

  const [openCategory, setOpenCategory] = useState('');

  const setProductsInStore = useProductStore((state) => state.setProducts);

  useEffect(() => {
    setProductsInStore(productsApi || [])
  }, [])



  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading products.</div>;
  }


  const groupedProducts: Record<string, Product[]> = products!.reduce(
    (acc: Record<string, Product[]>, product: Product) => {
      const { category } = product;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(product);
      return acc;
    },
    {}
  );

  const categories = Object.keys(groupedProducts);
  return (
    <Virtuoso
      className="w-full"
      data={categories}
      itemContent={(index, category) => (
        <div
          key={index}
          className="py-[12px] px-[16px] flex flex-col gap-[8px] items-start justify-start self-stretch flex-1 relative "
        >
          <div className="flex flex-col gap-0 items-start justify-start self-stretch flex-shrink-0 relative">
            <div
              onClick={() => setOpenCategory(category)}
              className=" dark:bg-gray-800 rounded-lg p-12px 16px 12px 16px flex flex-row gap-[8px] items-center justify-start flex-shrink-0 w-480px relative overflow-hidden">
              {
                openCategory === category ? (<svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M16.3536 9.64645C16.5488 9.84171 16.5488 10.1583 16.3536 10.3536L12.3536 14.3536C12.2598 14.4473 12.1326 14.5 12 14.5C11.8674 14.5 11.7402 14.4473 11.6464 14.3536L7.64645 10.3536C7.45118 10.1583 7.45118 9.84171 7.64645 9.64645C7.84171 9.45118 8.15829 9.45118 8.35355 9.64645L12 13.2929L15.6464 9.64645C15.8417 9.45118 16.1583 9.45118 16.3536 9.64645Z" fill="#353C49" />
              </svg>) : <svg
                className="flex-shrink-0 relative overflow-visible"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.64645 7.64645C9.84171 7.45118 10.1583 7.45118 10.3536 7.64645L14.3536 11.6464C14.5488 11.8417 14.5488 12.1583 14.3536 12.3536L10.3536 16.3536C10.1583 16.5488 9.84171 16.5488 9.64645 16.3536C9.45118 16.1583 9.45118 15.8417 9.64645 15.6464L13.2929 12L9.64645 8.35355C9.45118 8.15829 9.45118 7.84171 9.64645 7.64645Z"
                  fill="#B1B8C0"
                />
              </svg>
              }
              
              
              <div className="text-text-0 text-left font-pretendard headline-3 relative ">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </div>
            </div>
            {openCategory === category &&
              groupedProducts[category].map((item) => (
                <ProductItem key={item.title} product={item} />
              ))}
          </div>
        </div>
      )}
    />
  );
}

export default DeviceList;
