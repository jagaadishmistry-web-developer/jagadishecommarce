import { ShopSideBarCategoriesData } from "@/utils/AllData";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import star from "../../public/star.png";
import { CatagoryData } from "@/utils/CatagoryData";

const ShortSideShopSection = () => {
  return (
    <>
      <div className="xl:py-28 py-16">
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
          Color
        </p>
        <ul className="flex xl:gap-6 gap-4 pt-6 pb-14">
          <li className="xl:p-4 p-3 bg-[#F09121] rounded-full" />
          <li className="xl:p-4 p-3 bg-[#C54E10] rounded-full" />
          <li className="xl:p-4 p-3 bg-[#313131] rounded-full" />
          <li className="xl:p-4 p-3 bg-[#62C624] rounded-full" />
          <li className="xl:p-4 p-3 bg-[#3389D9] rounded-full" />
          <li className="xl:p-4 p-3 bg-[#911B94] rounded-full" />
        </ul>
        <p className="xl:text-xl text-lg font-medium bg-primary text-white text-center py-4">
          Filter By Price
        </p>
        <div className="flex items-center py-7">
          <span className="p-1 bg-white border-4 border-primary rounded-full" />
          <span className="border-b-4 border-primary w-full" />
          <span className="p-1 bg-white border-4 border-primary rounded-full" />
        </div>
        <li className="flex justify-between items-center group-hover:text-primary pb-10">
          Price: $10 - $80
          <p className="py-2 px-6 text-sm rounded-full text-primary border border-primary">
            Filter
          </p>
        </li>
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
        <p className="xl:text-xl text-lg font-medium bg-primary text-white text-center py-4">
          Size
        </p>
        <ul className="py-6 flex gap-4">
          <li className="px-3 py-1 rounded-lg border border-black hover:bg-primary hover:border-primary hover:text-white">
            L
          </li>
          <li className="px-3 py-1 rounded-lg border border-black hover:bg-primary hover:border-primary hover:text-white">
            X
          </li>
          <li className="px-3 py-1 rounded-lg border border-black hover:bg-primary hover:border-primary hover:text-white">
            M
          </li>
          <li className="px-3 py-1 rounded-lg border border-black hover:bg-primary hover:border-primary hover:text-white">
            XL
          </li>
          <li className="px-3 py-1 rounded-lg border border-black hover:bg-primary hover:border-primary hover:text-white">
            XX
          </li>
          <li className="px-3 py-1 rounded-lg border border-black hover:bg-primary hover:border-primary hover:text-white">
            LL
          </li>
        </ul>
      </div>
    </>
  );
};

export default ShortSideShopSection;
