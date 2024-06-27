import Blog1Colums from "@/components/Blog1Colums";
import ViewPartDemoContent from "@/components/ViewPartDemoContent";
import Image from "next/image";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { CgCalendarDates } from "react-icons/cg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRegUser,
  FaTwitter,
} from "react-icons/fa6";
import blogImg1 from "../../../../public/blogImg1.png";
import singleBlog1 from "../../../../public/singleBlog1.png";
import singleBlog2 from "../../../../public/singleBlog2.png";
import clients2 from "../../../../public/clients2.png";
import { BlogData } from "@/utils/BlogData";
import BlogCard from "@/components/BlogCard";
import UserMassageCard from "@/components/UserMassageCard";
import BlogContactPage from "@/components/BlogContactPage";

const page = () => {
  return (
    <>
      <ViewPartDemoContent title="Single Blog" title1="Single Blog" />
      <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-8 xl:py-28 py-16">
        <div className="lg:col-span-2">
          <div className="">
            <div className="relative">
              <Image
                src={blogImg1}
                className="2xl:h-[600px] md:h-[500px] h-full w-full"
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
                  Handmade Pieces That Took Time To Make
                </p>
                <p className="xl:text-base text-sm">
                  You all must have heard and observed about your Personality
                  Traits according to your Olars CandleLoremLorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Amet purus
                  gravida quis blandit turpis cursus in. Sapien pellentesque
                  habitant morbi tristique senectus et. Fames ac turpis egestas
                  integer eget aliquet nibh praesent. In ante metus dictum at
                  tempor commodo ullamcorper a lacus. Dis parturient montes
                  nascetur ridiculus mus. In ornare quam viverra orci sagitti.{" "}
                  <br />
                  <br />
                  You all must have heard and observed about your Personality
                  Traits according to your Olars CandleLoremLorem ipsum dolor
                  sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Amet purus
                  gravida quis blandit turpis cursus in. Sapien pellentesque
                  habitant morbi tristique senectus et.
                </p>
                <div className="py-6 grid lg:grid-cols-2 gap-8 ">
                  <Image src={singleBlog1} alt="image" className="w-full" />
                  <Image src={singleBlog2} alt="image" className="w-full" />
                </div>
                <div className="flex flex-col gap-4 items-center text-center xl:py-8 py-6 xl:px-10 px-5 bg-black/5 lg:rounded-br-[170px] rounded-br-3xl lg:rounded-tl-[170px] rounded-tl-3xl">
                  <p className="xl:text-lg font-semibold">Amalia Nicole</p>
                  <Image src={clients2} alt="image" />
                  <p className="pb-2">
                    About your Personality Traits according to your Olars
                    CandleLoremLorem ipsum dolor sit amet adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <button className="bg-primary text-white w-36 py-2 rounded-br-[30px] rounded-tl-[30px] text-center">
                    View All
                  </button>
                </div>
                <div className="flex lg:flex-row flex-col lg:gap-0 gap-6 justify-between py-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-medium">Tags :</span>
                    <span className="px-5 py-1 border border-black hover:border-primary hover:bg-primary hover:text-white rounded-lg">
                      Chair
                    </span>
                    <span className="px-5 py-1 border border-black hover:border-primary hover:bg-primary hover:text-white rounded-lg">
                      Trands
                    </span>
                    <span className="px-5 py-1 border border-black hover:border-primary hover:bg-primary hover:text-white rounded-lg">
                      Table
                    </span>
                    <span className="px-5 py-1 border border-black hover:border-primary hover:bg-primary hover:text-white rounded-lg">
                      Sofa
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium">Shaer :</span>
                    <FaFacebookF className="text-primary border border-primary rounded-full w-8 h-8 p-2 hover:bg-primary hover:text-white duration-300" />
                    <FaInstagram className="text-primary border border-primary rounded-full w-8 h-8 p-2 hover:bg-primary hover:text-white duration-300" />
                    <FaTwitter className="text-primary border border-primary rounded-full w-8 h-8 p-2 hover:bg-primary hover:text-white duration-300" />
                    <FaLinkedinIn className="text-primary border border-primary rounded-full w-8 h-8 p-2 hover:bg-primary hover:text-white duration-300" />
                  </div>
                </div>
                <div className="">
                  <p className="xl:text-2xl text-lg font-medium text-primary underline">
                    Related Posts
                  </p>
                  <div className="py-6 grid lg:grid-cols-2 gap-6">
                    {BlogData.slice(0, 2).map((bData) => {
                      return (
                        <div key={bData.id}>
                          <BlogCard blData={bData} />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="">
                  <p className="xl:text-2xl text-lg font-medium text-primary underline">
                    2 Comment
                  </p>
                  <UserMassageCard />
                  <div className="xl:pl-12 pl-8">
                    <UserMassageCard />
                  </div>
                  <UserMassageCard />
                  <div className="xl:pl-12 pl-8">
                    <UserMassageCard />
                  </div>
                </div>
                <div className="">
                  <p className="xl:text-2xl text-lg font-medium text-primary underline">
                    Leave a Reply
                  </p>
                  <BlogContactPage />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1">
          <Blog1Colums />
        </div>
      </div>
    </>
  );
};

export default page;
