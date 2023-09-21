import React from "react";
import SearchInput from "./component/search-input";
import ProductList from "./component/product-list";
import 'tailwindcss/tailwind.css';
// import { ReactQueryDevtools } from 'react-query-devtools'
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className='className="bg-neutral-8 rounded-3xl p-6 flex flex-col gap-8 items-start justify-start w-96 h-[880px] relative shadow-basic-box-shadow overflow-hidden'>
        <SearchInput />
        <ProductList />
      </div>
      {/* <ReactQueryDevtools initialIsOpen={true} /> */}
    </QueryClientProvider>
  );
}

export default App;
