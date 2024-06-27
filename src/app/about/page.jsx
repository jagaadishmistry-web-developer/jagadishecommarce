import FirstDemoContent from "@/components/FirstDemoContent";
import MeetOutTeamCard from "@/components/MeetOutTeamCard";
import OurClientsReviewSection from "@/components/OurClientsReviewSection";
import OurWorkingProssesCard from "@/components/OurWorkingProssesCard";
import ViewPartDemoContent from "@/components/ViewPartDemoContent";
import {
  AboutImage,
  AboutImage1,
  AboutWorkingProssesData,
} from "@/utils/AboutPageData";
import Image from "next/image";
import Link from "next/link";
import { BsRecordCircleFill } from "react-icons/bs";
import aboutImage1 from "../../../public/aboutImage1.png";
import aboutImage4 from "../../../public/aboutImage4.png";
import aboutImg from "../../../public/aboutImg.png";

const AboutData = [
  {
    id: 0,
    title: "cras suscipit nascetur ullamcorper.",
  },
  {
    id: 1,
    title: "cras suscipit nascetur ullamcorper.",
  },
  {
    id: 2,
    title: "cras suscipit nascetur ullamcorper.",
  },
  {
    id: 3,
    title: "cras suscipit nascetur ullamcorper.",
  },
];

const page = () => {
  return (
    <>
      <ViewPartDemoContent title="About Us" title1="About Us" />
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 xl:py-10 py-6">
        <Image src={aboutImg} alt="image" className="w-full" />
        <div className="flex flex-col justify-center">
          <i className="font-1 text-primary text-xl font-bold">Maxt Shop</i>
          <h1 className="xl:text-2xl text-xl font-semibold py-2">
            About Our Maxt Online Store
          </h1>
          <p>Preorder now to receive exclusive deals & gifts</p>

          <p className="py-3">
            Dictumst per ante cras suscipit nascetur ullamcorper in nullam
            <br />
            fermentum condimentum torquent iaculis reden posuere potenti <br />
            viverra condimentum dictumst id tellus suspendisse slightly domed
            <br /> convallis condimentum.He lay on his armour-like back, and if
            he lifted <br /> his head a little he could see his brown bell.
          </p>
          <p className="flex gap-2 items-center pb-6">
            <BsRecordCircleFill className="text-primary text-sm" /> Dictumst per
            ante cras suscipit nascetur ullamcorper.
          </p>
          {AboutData.map((aData) => (
            <p key={aData.id} className="flex gap-2 items-center pb-3">
              <BsRecordCircleFill className="text-primary text-sm" />
              {aData.title}
            </p>
          ))}
          <br />
          <button className="bg-primary text-white w-40 py-2 px-7 rounded-tr-3xl rounded-bl-3xl hover:bg-black text-center">
            Load More
          </button>
        </div>
      </div>
      <div className="container mx-auto px-4 grid lg:grid-cols-3 md:grid-cols-2 gap-10 xl:py-10 py-6">
        {AboutImage.map((abData) => (
          <div key={abData.id} className="relative pb-8">
            <Image src={abData.img} alt="image" className="w-full" />
            <div className="absolute bottom-14 left-6">
              <h1 className="xl:text-3xl text-xl font-medium text-primary pb-3">
                {abData.title}
              </h1>
              <Link href="#" className="border-b-2 border-black font-medium">
                View More
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div>
        <FirstDemoContent
          title1="Maxt Shop"
          title2="Meet Our Team"
          dec="Preorder now to receive exclusive deals & gifts"
        />
        <div className="container mx-auto px-4 grid lg:grid-cols-4 md:grid-cols-2 gap-8 xl:py-10 py-6">
          {AboutImage1.slice(0, 4).map((aData2) => (
            <div key={aData2.id}>
              <MeetOutTeamCard aboutData2={aData2} />
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 flex flex-col gap-8 pt-6 pb-8">
        <div className="lg:grid grid-cols-3 gap-8">
          <div className="col-span-1">
            <Image src={aboutImage1} alt="iamge" className="w-full" />
          </div>
          <div className="col-span-2 grid lg:grid-cols-2 bg-[url('/aboutImage2.png')] bg-center bg-cover">
            <div className=""></div>
            <div className="xl:p-6 p-4 flex flex-col justify-center">
              <h1 className="xl:text-2xl text-lg font-bold">
                Best Quality At Every Product
              </h1>
              <p className="pb-6">
                Dictumst per ante cras suscipit nascetur ullamcorper in nullam
                condimentum torquent iaculis.
              </p>
              <button className="bg-primary text-white w-36 py-2 rounded-tr-3xl rounded-bl-3xl text-center">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="lg:grid grid-cols-3 gap-8">
          <div className="col-span-2 grid lg:grid-cols-2 bg-[url('/aboutImage3.png')] bg-center bg-cover">
            <div className="xl:p-6 p-4 flex flex-col justify-center">
              <h1 className="xl:text-2xl text-lg font-bold">
                Best Quality At Every Product
              </h1>
              <p className="pb-6">
                Dictumst per ante cras suscipit nascetur ullamcorper in nullam
                condimentum torquent iaculis.
              </p>
              <button className="bg-primary text-white w-36 py-2 rounded-tr-3xl rounded-bl-3xl text-center">
                Read More
              </button>
            </div>
            <div className=""></div>
          </div>
          <div className="col-span-1">
            <Image src={aboutImage4} alt="iamge" className="w-full" />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <FirstDemoContent
          title1="Maxt Shop"
          title2="our working process"
          dec="Preorder now to receive exclusive deals & gifts"
        />
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 xl:py-10 py-6">
          {AboutWorkingProssesData.map((wpData) => (
            <div key={wpData.id} className="">
              <OurWorkingProssesCard aboutWorkingdDAta={wpData} />
            </div>
          ))}
        </div>
      </div>
      <OurClientsReviewSection />
    </>
  );
};

export default page;
