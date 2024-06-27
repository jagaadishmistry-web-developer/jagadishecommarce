import Image from "next/image";
import slideImg from "../../public/slideImg.png";
import TimmerSettings from "./TimmerSettings";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { FaArrowsRotate } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { SliderCardData } from "@/utils/AllData";
import star from "../../public/star.png";

const PopularItemPart = () => {
  return (
    <>
      <div className="container mx-auto px-4 lg:py-10 py-6">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="">
            <div className="w-full border border-primary">
              <div className="relative group">
                <div className="flex justify-between m-6">
                  <h1 className="xl:text-3xl text-xl font-medium">
                    Sale Products
                  </h1>
                  <div className="flex gap-4">
                    <div className="bg-white h-10 w-10 text-2xl rounded-full grid place-items-center border-2 border-primary">
                      <MdKeyboardArrowLeft />
                    </div>
                    <div className="text-white h-10 w-10 text-2xl bg-primary rounded-full grid place-items-center border-2 border-primary">
                      <MdKeyboardArrowRight />
                    </div>
                  </div>
                </div>
                <div className="absolute group-hover:block hidden w-full h-full">
                  <div className="flex flex-col gap-2 items-center justify-center h-full">
                    <div className="flex gap-3">
                      <span className="text-primary bg-white h-10 w-10 rounded-full grid place-items-center border-2 border-primary">
                        <IoSearch />
                      </span>
                      <span className="text-primary bg-white h-10 w-10 rounded-full grid place-items-center border-2 border-primary">
                        <FaArrowsRotate />
                      </span>
                    </div>
                    <div className="text-primary bg-white h-10 w-10 rounded-full grid place-items-center border-2 border-primary">
                      <FaRegHeart />
                    </div>
                  </div>
                </div>
                <Image src={slideImg} alt="image" className="w-full" />
              </div>
              <div className="flex flex-col items-center gap-3 mb-6">
                <Image
                  src="/star.png"
                  alt="image"
                  height={500}
                  width={500}
                  className="h-6 w-40"
                />
                <h1 className="text-2xl font-medium">Nerd Wooden Sofa</h1>
                <div className="flex gap-3">
                  <span className="line-through">$40.00</span>
                  <span className="text-primary">$30.00</span>
                </div>
                <Link
                  href="/home"
                  className="bg-primary text-white w-40 py-2 px-7 rounded-tr-3xl rounded-bl-3xl hover:bg-black text-center">
                  Add to Cart
                </Link>
              </div>
            </div>
            <TimmerSettings />
          </div>
          <div className="">
            <div className="flex justify-between m-6">
              <h1 className="xl:text-3xl text-xl font-medium">Popular Iteme</h1>
              <div className="flex gap-4">
                <div className="bg-white h-10 w-10 text-2xl rounded-full grid place-items-center border-2 border-primary">
                  <MdKeyboardArrowLeft />
                </div>
                <div className="text-white h-10 w-10 text-2xl bg-primary rounded-full grid place-items-center border-2 border-primary">
                  <MdKeyboardArrowRight />
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-6 xl:py-10 py-6">
              {SliderCardData.map((sData) => (
                <div
                  key={sData.id}
                  className="text-center flex flex-col items-center bg-white border border-primary rounded-xl">
                  <Image src={sData.img} alt="image" className="w-full" />
                  <div className="flex flex-col items-center py-6">
                    <Image src={star} alt="image" />
                    <h1 className="text-lg font-medium py-1">{sData.title}</h1>
                    <div className="flex gap-3">
                      <span className="line-through">$40.00</span>
                      <span className="text-primary">$30.00</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularItemPart;
