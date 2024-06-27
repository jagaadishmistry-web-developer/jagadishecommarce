import { InstagramStoreData } from "@/utils/InstagramStoriseData";
import InstagramStoriseCard from "./InstagramStoriseCard";
import FirstDemoContent from "./FirstDemoContent";

const InstagramStoriseSection = () => {
  return (
    <>
      <div className="bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <FirstDemoContent
            title1="Maxt Shop"
            title2="Our Instagram Stories"
            dec="Preorder now to receive exclusive deals & gifts"
          />
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 xl:pt-10 pt-6 xl:pb-28 pb-16">
            {InstagramStoreData.map((iData) => (
              <div key={iData.id} className="">
                <InstagramStoriseCard instaData={iData} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default InstagramStoriseSection;
