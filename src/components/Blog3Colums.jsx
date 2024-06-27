import { BlogData } from "@/utils/BlogData";
import Image from "next/image";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { CgCalendarDates } from "react-icons/cg";
import { FaArrowRightLong, FaRegUser } from "react-icons/fa6";

const Blog3Colums = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-8">
        {BlogData.slice(0, 6).map((blData) => (
          <div key={blData.id}>
            <div className="relative">
              <Image
                src={blData.img}
                className="2xl:h-[600px] h-[500px] w-full"
                alt=""
              />
              <div className="absolute flex gap-1 bg-primary rounded-full items-center text-white px-3 py-1 xl:text-sm text-xs top-6 xl:left-8 left-3">
                <span>
                  <CgCalendarDates />
                </span>
                <span>15 Jun 2023</span>
              </div>
            </div>
            <div className="">
              <div className="xl:px-9 lg:px-4 md:px-5 px-4 2xl:py-9 xl:py-7 lg:py-4 md:py-5 py-4 flex flex-col 2xl:gap-5 xl:gap-4 lg:gap-3 md:gap-3 gap-3 justify-center h-full">
                <div className="flex gap-2 xl:text-sm text-xs items-center">
                  <span className="">
                    <FaRegUser />
                  </span>
                  <span>Posted By</span>
                  <BiMessageRoundedDetail className="text-lg" /> 0
                </div>
                <p className="2xl:text-4xl xl:text-xl font-semibold">
                  {blData.name}
                </p>
                <p className="xl:text-base text-sm">{blData.description}</p>
                <div className="pt-2 xl:text-sm text-xs flex justify-between items-center">
                  <button className="border-primary text-primary rounded-tr-3xl font-medium rounded-bl-3xl flex gap-2 items-center py-3 border-2 lg:px-7 px-4">
                    <span>Read More</span>
                    <span>
                      <FaArrowRightLong />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blog3Colums;
