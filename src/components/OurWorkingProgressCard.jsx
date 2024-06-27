import Image from "next/image";

const OurWorkingProgressCard = ({ progressData }) => {
  return (
    <>
      <div className="group block">
        <div className="bg-black/5 group-hover:bg-primary group-hover:text-white rounded-xl flex flex-col items-center xl:py-10 py-7">
          <Image
            src={progressData.img}
            alt="image"
            className="group-hover:bg-white rounded-full"
          />
          <h1 className="xl:text-4xl text-2xl font-medium py-2">
            {progressData.number}+
          </h1>
          <p>{progressData.title}</p>
        </div>
      </div>
    </>
  );
};

export default OurWorkingProgressCard;
