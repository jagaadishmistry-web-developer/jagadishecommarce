import Image from "next/image";

const OurWorkingProssesCard = ({ aboutWorkingdDAta }) => {
  return (
    <>
      <div className="group block">
        <div className="flex flex-col items-center text-center gap-6 xl:px-8 px-4 xl:py-12 py-6 border border-primary group-hover:bg-primary group-hover:text-white rounded-2xl">
          <h1 className="xl:text-lg font-semibold">
            {aboutWorkingdDAta.title}
          </h1>
          <Image
            src={aboutWorkingdDAta.img}
            alt="image"
            className="group-hover:bg-white rounded-full"
          />
          <p>{aboutWorkingdDAta.decription}</p>
        </div>
      </div>
    </>
  );
};

export default OurWorkingProssesCard;
