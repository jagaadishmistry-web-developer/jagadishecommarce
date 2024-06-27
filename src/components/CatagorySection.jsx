"use client";

import { CatagoryData } from "@/utils/CatagoryData";
import { useState } from "react";
import CatagaryCard from "./CatagaryCard";
import FirstDemoContent from "./FirstDemoContent";

const CatagorySection = ({ productBest, addToCart }) => {
  const [nextItems, setNextItems] = useState(8);
  const [items, setItems] = useState(CatagoryData);

  const filterItem = (category) => {
    const updatadItem = CatagoryData.filter((curElem) => {
      return curElem.category === category;
    });
    setItems(updatadItem);
  };

  const loadMore = () => {
    setNextItems((prev) => prev + 4);
  };

  return (
    <>
      <div className="bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <FirstDemoContent
            title1="Maxt Shop"
            title2="Sale Products"
            dec="Preorder now to receive exclusive deals & gifts"
          />
          <div className="md:flex flex flex-wrap gap-4 pt-14 pb-10 justify-center items-center">
            <button
              onClick={() => filterItem("New Product")}
              className="hover:bg-primary px-5 py-2 border rounded-full hover:border-primary duration-300 border-black  hover:text-white text-sm font-medium">
              New Product
            </button>
            <button
              onClick={() => filterItem("Seller")}
              className="hover:bg-primary px-5 py-2 border rounded-full hover:border-primary duration-300 border-black  hover:text-white text-sm font-medium">
              Seller
            </button>
            <button
              onClick={() => filterItem("Top Rated")}
              className="hover:bg-primary px-5 py-2 border rounded-full hover:border-primary duration-300 border-black  hover:text-white text-sm font-medium">
              Top Rated
            </button>
            <button
              onClick={() => filterItem("Featured")}
              className="hover:bg-primary px-5 py-2 border border-black rounded-full text-sm font-medium">
              Featured
            </button>
          </div>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6 pt-5">
            {items.slice(0, nextItems).map((value) => (
              <CatagaryCard key={value.id} {...value} addToCart={addToCart} />
            ))}
          </div>
          <div className="py-10 text-center">
            <button
              onClick={loadMore}
              className="bg-primary text-white w-40 py-2 px-7 rounded-tr-3xl rounded-bl-3xl hover:bg-black text-center">
              Load More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CatagorySection;
