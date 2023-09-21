import React, { useEffect, useState } from "react";
import { useSearchProductQuery } from "../hooks/useProductsQuery";
import { useProductStore } from "./useProductStore";
import { Product } from "../model";
import { QueryObserverResult } from "react-query";

const SearchInput: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState( '');
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const setProductsInStore = useProductStore((state) => state.setProducts);
  const { data, isLoading, isError, error, refetch } = useSearchProductQuery({
    searchQuery,
    limit: 0, 
    skip: 0,   
    select: []
  });



  useEffect(() => {
    if (data) {
      setProductsInStore(data);
    }
  }, [data]);

  const clearSearchInput = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setSearchQuery('');
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="border-box flex flex-row gap-[10px] items-center justify-start  self-stretch flex-shrink-0 relative">
      <div
        className={
          "border-box min-w-[260px]  bg-neutral-7 rounded-3xl border border-[#d9e0e8] py-[9px] px-[16px] flex flex-row gap-[8px] items-center justify-start flex-shrink-0 flex-1 relative hover:border-[#d1b8fa] text-[#353c49] focus:border-[#6713ef] focus:text-[#353c49] focus-visible:border-[#6713ef] focus-visible:text-[#353c49] active:border-[#353c49] active:text-[#353c49] "
        }
      >
        <div >
        <svg
          className="flex-shrink-0 relative overflow-visible"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.87211 14.5383C9.35126 14.538 10.7878 14.0428 11.9529 13.1316L15.0271 16.2058C15.3525 16.5312 15.8801 16.5312 16.2054 16.2058C16.5308 15.8804 16.5308 15.3528 16.2054 15.0275L13.1313 11.9533C14.0429 10.788 14.5384 9.35115 14.5388 7.87162C14.5388 4.19579 11.5479 1.20496 7.87211 1.20496C4.19628 1.20496 1.20544 4.19579 1.20544 7.87162C1.20544 11.5475 4.19628 14.5383 7.87211 14.5383ZM7.87211 2.87162C10.6296 2.87162 12.8721 5.11412 12.8721 7.87162C12.8721 10.6291 10.6296 12.8716 7.87211 12.8716C5.11461 12.8716 2.87211 10.6291 2.87211 7.87162C2.87211 5.11412 5.11461 2.87162 7.87211 2.87162Z"
            fill="#B1B8C0"
          />
        </svg>
        </div>
        <input
          type="text"
          className="text-text-3 text-left font-normal text-base relative flex-1 focus-visible:outline-none"
          placeholder="Search..."
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={searchQuery}
          onChange={handleInputChange}
        />
       <div onClick={clearSearchInput}>
       {
        searchQuery && (
          <div className="bg-neutral-7 dark:bg-gray-900 rounded-lg flex flex-row gap-10 items-start justify-start flex-shrink-0 flex-1 relative">
            <svg
          className="flex-shrink-0 relative overflow-visible"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.3751 3.62502C12.0299 3.27983 11.4703 3.27979 11.1251 3.62494L7.99956 6.75L4.87489 3.62505C4.52972 3.27986 3.97006 3.27986 3.62489 3.62506C3.27976 3.97021 3.27976 4.52979 3.62489 4.87494L6.74967 8L3.62489 11.1251C3.27976 11.4702 3.27976 12.0298 3.62489 12.3749C3.97006 12.7201 4.52972 12.7201 4.87489 12.3749L7.99956 9.25L11.1251 12.3751C11.4703 12.7202 12.0299 12.7202 12.3751 12.375C12.7202 12.0298 12.7202 11.4702 12.3751 11.125L9.25033 8L12.3751 4.87498C12.7202 4.5298 12.7202 3.97019 12.3751 3.62502Z"
            fill="#353C49"
          />
        </svg>
          </div>
        )
       }
       </div>
      </div>
      <div className="bg-neutral-8 dark:bg-white rounded-lg py-[12px] px-[16px] flex flex-row gap-[10px] items-start justify-start flex-shrink-0 relative hover:bg-[#f8f8f9] active:bg-[#f2f4f6] focus:border-2 focus:border-[#d1b8fa]">
        <div className="text-0 text-left font-normal text-base leading-6 font-sans relative ">
          Cancel
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
