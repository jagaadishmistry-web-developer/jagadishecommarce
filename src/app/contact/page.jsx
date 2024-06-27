import FirstDemoContent from "@/components/FirstDemoContent";
import ViewPartDemoContent from "@/components/ViewPartDemoContent";
import { ContactCardData } from "@/utils/AllData";
import Image from "next/image";

const page = () => {
  return (
    <>
      <ViewPartDemoContent title="Contact" title1="Contact" />
      <div className="bg-[url('/contactBg.png')] bg-cover bg-center xl:py-60 py-40">
        <div className="container mx-auto px-4 grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {ContactCardData.map((cData) => (
            <div key={cData.id} className="group block">
              <div className="flex flex-col items-center text-center group-hover:bg-primary group-hover:text-white bg-white xl:px-6 xl:py-12 px-4 py-8 rounded-tr-[4rem] rounded-bl-[4rem]">
                <Image
                  src={cData.img}
                  alt="image"
                  className="group-hover:bg-white rounded-full"
                />
                <h1 className="xl:text-2xl text-xl font-semibold py-3">
                  {cData.title}
                </h1>
                <p>{cData.decription1}</p>
                <p className="h-6">{cData.decription2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto 2xl:px-44 xl:px-36 px-4 xl:pb-24 lg:px-28 pb-16">
        <FirstDemoContent
          title1="Maxt Shop"
          title2="Feel free to contact Us"
          dec="Preorder now to receive exclusive deals & gifts"
        />
        <div className="grid lg:grid-cols-2 2xl:gap-8 gap-6 xl:py-10 py-6">
          <div className="lg:col-span-1">
            <p className="font-bold pb-4">Enter Your Name</p>
            <input
              type="text"
              placeholder="Name"
              className="border-2 border-primary w-full xl:py-4 focus:outline-none rounded-xl py-3 px-4"
            />
          </div>
          <div className="lg:col-span-1">
            <p className="font-bold pb-4">Enter Your Email</p>
            <input
              type="text"
              placeholder="Email"
              className="border-2 border-primary w-full xl:py-4 focus:outline-none rounded-xl py-3 px-4"
            />
          </div>
          <div className="lg:col-span-2">
            <p className="font-bold pb-4">Your Subject</p>
            <input
              type="text"
              placeholder="Subject"
              className="border-2 border-primary w-full xl:py-4 focus:outline-none rounded-xl py-3 px-4"
            />
          </div>
          <div className="lg:col-span-2">
            <p className="font-bold pb-4">Enter Your Message</p>
            <textarea
              type="text"
              placeholder="Message"
              className="border-2 border-primary w-full xl:py-4 focus:outline-none rounded-xl py-3 px-4 xl:h-72 h-52"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <button className="border-2 border-primary text-primary py-3 px-7 rounded-tr-3xl rounded-bl-3xl">
            Send Massage
          </button>
        </div>
      </div>
    </>
  );
};

export default page;
