import Image from "next/image";
import star from "../../public/star.png";

const OurClientsReviewCard = ({ ClintsData }) => {
  return (
    <>
      <div className="py-6 xl:px-4">
        <div className="rounded-xl xl:px-6 px-4 py-8 flex flex-col items-center shado">
          <div className="flex flex-col items-center text-center gap-3">
            <h1 className="font-bold xl:text-xl md:text-lg text-lg pb-2">
              {ClintsData.title}
            </h1>
            <Image src={ClintsData.img} alt="img" />
            <p className="xl:text-base lg:text-sm font-bold text-slate-700 pb-2">
              {ClintsData.profession}
            </p>
          </div>
          <Image src={star} alt="img" />
          <p className="px-4 semibold text-center pt-4">
            {ClintsData.decription}
          </p>
        </div>
      </div>
    </>
  );
};

export default OurClientsReviewCard;
