import Image from "next/image";
import Link from "next/link";
import { CgCalendarDates } from "react-icons/cg";
import { FaArrowRightLong, FaRegUser } from "react-icons/fa6";
import { BiMessageRoundedDetail } from "react-icons/bi";

const BlogCard = ({ blData }) => {
  return (
    <>
      <Link href={"/blog"} key={blData.id}>
        <div className="group block">
          <div className="relative">
            <Image src={blData.img} className="w-full" alt="" />
            <div className="absolute flex gap-1 bg-primary rounded-full items-center text-white px-3 py-1 xl:text-sm text-xs top-6 xl:left-8 left-3">
              <span>
                <CgCalendarDates />
              </span>
              <span>15 Jun 2023</span>
            </div>
          </div>
          <div className="text-white">
            <div className="bg-[#0C0E1A] py-3">
              <div className="xl:px-9 lg:px-4 md:px-5 px-4 2xl:py-9 xl:py-7 lg:py-4 md:py-5 py-4 flex flex-col 2xl:gap-5 xl:gap-4 lg:gap-3 md:gap-3 gap-3 justify-center h-full">
                <div className="flex gap-2 xl:text-sm text-xs items-center">
                  <span className="">
                    <FaRegUser />
                  </span>
                  <span>Posted By</span>
                  <BiMessageRoundedDetail className="text-lg" /> 0
                </div>
                <p className="group-hover:text-primary 2xl:text-2xl xl:text-lg font-semibold">
                  {blData.name}
                </p>
                <p className="xl:text-base text-sm">
                  {blData.description.substring(0, 115)}...
                </p>
                <div className="pt-2 xl:text-sm text-xs flex justify-between items-center">
                  <button className="hover:scale-105 duration-300 group-hover:border-primary group-hover:bg-primary rounded-tr-3xl rounded-bl-3xl flex gap-2 items-center py-3 border border-primaryy lg:px-7 px-4">
                    <span>Learn More</span>
                    <span>
                      <FaArrowRightLong />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
