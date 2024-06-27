import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";

const MeetOutTeamCard = ({ aboutData2 }) => {
  return (
    <>
      <div className="relative group flex justify-center items-center">
        <div className="absolute group-hover:block hidden bg-black/50 text-white w-full h-full rounded-full">
          <div className="flex items-center gap-3 justify-center h-full">
            <div className="bg-white hover:bg-primary text-primary hover:text-white p-2 rounded-full">
              <FaFacebookF className="text-xl" />
            </div>
            <div className="bg-white hover:bg-primary text-primary hover:text-white p-2 rounded-full">
              <FaTwitter className="text-xl" />
            </div>
            <div className="bg-white hover:bg-primary text-primary hover:text-white p-2 rounded-full">
              <FaLinkedinIn className="text-xl" />
            </div>
            <div className="bg-white hover:bg-primary text-primary hover:text-white p-2 rounded-full">
              <FaInstagram className="text-xl" />
            </div>
          </div>
        </div>
        <Image src={aboutData2.img} alt="image" className="w-full" />
      </div>
      <div className="flex flex-col gap-1 items-center py-5">
        <h1 className="md:text-lg font-semibold">{aboutData2.title}</h1>
        <p>{aboutData2.profession}</p>
      </div>
    </>
  );
};

export default MeetOutTeamCard;
