import FirstDemoContent from "@/components/FirstDemoContent";
import MeetOutTeamCard from "@/components/MeetOutTeamCard";
import ViewPartDemoContent from "@/components/ViewPartDemoContent";
import { AboutImage1 } from "@/utils/AboutPageData";
import button from "../../../public/button.png";
import Image from "next/image";
import { OurTeamWorkingProgressData } from "@/utils/AllData";
import OurWorkingProgressCard from "@/components/OurWorkingProgressCard";
import BrandSection from "@/components/BrandSection";

const page = () => {
  return (
    <>
      <ViewPartDemoContent title="Team" title1="Team" />
      <div className="">
        <FirstDemoContent
          title1="Maxt Shop"
          title2="Meet Our Team"
          dec="Preorder now to receive exclusive deals & gifts"
        />
        <div className="container mx-auto px-4 grid lg:grid-cols-4 md:grid-cols-2 gap-8 xl:py-10 py-6">
          {AboutImage1.map((aData2) => (
            <div key={aData2.id}>
              <MeetOutTeamCard aboutData2={aData2} />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[url('/teamVideoBg.png')] bg-cover bg-center flex justify-center xl:py-52 py-40">
        <Image src={button} alt="image" />
      </div>
      <div className="container mx-auto px-4 pb-10">
        <FirstDemoContent
          title1="Maxt Shop"
          title2="Our Working Progress"
          dec="Preorder now to receive exclusive deals & gifts"
        />
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8 xl:py-10 py-6">
          {OurTeamWorkingProgressData.map((otData) => (
            <div key={otData.id}>
              <OurWorkingProgressCard progressData={otData} />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[url('/classicalProductBg.png')] bg-cover bg-center flex justify-center xl:py-52 py-40">
        <div className="text-white flex flex-col items-center gap-5">
          <p>Our Best Categories</p>
          <h1 className="xl:text-5xl pb-3">Classical Product</h1>
          <button className="py-2 px-7 rounded-tr-3xl rounded-bl-3xl border">
            Shop Now
          </button>
        </div>
      </div>
      <div className="py-10">
        <BrandSection />
      </div>
    </>
  );
};

export default page;
