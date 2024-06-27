import Image from "next/image";
import { IoSearch } from "react-icons/io5";

const InstagramStoriseCard = ({ instaData }) => {
  return (
    <>
      <div className="relative group flex justify-center items-center">
        <div className="absolute group-hover:block hidden bg-black/50 text-white w-full h-full rounded-full">
          <div className="flex items-center justify-center h-full">
            <IoSearch className="text-xl" />
          </div>
        </div>
        <Image src={instaData.img} alt="image" className="w-full" />
      </div>
    </>
  );
};

export default InstagramStoriseCard;
