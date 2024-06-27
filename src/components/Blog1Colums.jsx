import { ShopSideBarCategoriesData } from "@/utils/AllData";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import star from "../../public/star.png";
import { CatagoryData } from "@/utils/CatagoryData";
import { BlogTagsData } from "@/utils/BlogData";

const Blog1Colums = () => {
  return (
    <>
      <div className="">
        <p className="xl:text-xl text-lg font-medium bg-primary text-white text-center py-4">
          Search
        </p>
        <div className="py-8">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="focus:outline-none w-full py-4 px-4 border rounded-l-full border-black"
            />
            <div className="px-4 border border-l-0 border-black rounded-r-full py-4">
              <IoIosSearch className="text-2xl" />
            </div>
          </div>
        </div>
        <p className="xl:text-xl text-lg font-medium bg-primary text-white text-center py-4">
          Categories
        </p>
        <div className="flex flex-col 2xl:gap-6 gap-4 pt-6 pb-14">
          {ShopSideBarCategoriesData.map((catagriosData) => (
            <ul key={catagriosData.id} className="group block">
              <li className="flex justify-between group-hover:text-primary">
                {catagriosData.text}
                <p className="h-6 w-14 grid place-items-center text-sm border rounded-full group-hover:bg-primary group-hover:text-white">
                  {catagriosData.number}
                </p>
              </li>
            </ul>
          ))}
        </div>
        <p className="xl:text-xl text-lg font-medium bg-primary text-white text-center py-4">
          Tags
        </p>
        <ul className="flex flex-wrap gap-3 pt-6 pb-14">
          {BlogTagsData.map((bData) => (
            <li key={bData.id} className="py-1 px-8 border border-black">
              {bData.tag}
            </li>
          ))}
        </ul>
        <p className="xl:text-xl text-lg font-medium bg-primary text-white text-center py-4">
          Sale Products
        </p>
        <div className="flex flex-col gap-6 pb-12">
          {CatagoryData.slice(0, 4).map((cData) => (
            <div key={cData.id}>
              <p className="border-t border-primary pb-6" />
              <div className="flex xl:gap-6 lg:gap-3 gap-6 xl:text-base lg:text-sm">
                <Image
                  src={cData.img}
                  alt="image"
                  className="h-20 w-20 rounded-xl"
                />
                <div className="">
                  <p>{cData.title}</p>
                  <div className="flex gap-2 pb-1">
                    <span className="line-through">
                      ${cData.discount_Price}.00
                    </span>
                    <span className="text-primary">
                      ${cData.price}
                      .00
                    </span>
                  </div>
                  <Image src={star} alt="image" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog1Colums;
