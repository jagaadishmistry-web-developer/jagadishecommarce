import ShortSideShopSection from "@/components/ShortSideShopSection";
import TwoColumShopBar from "@/components/TwoColumShopBar";
import ViewPartDemoContent from "@/components/ViewPartDemoContent";

const page = () => {
  return (
    <>
      <ViewPartDemoContent title="2 Colum Shop" title1="2 Colum Shop" />
      <div className="container mx-auto px-4 grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <ShortSideShopSection />
        </div>
        <div className="lg:col-span-3">
          <TwoColumShopBar />
        </div>
      </div>
    </>
  );
};

export default page;
