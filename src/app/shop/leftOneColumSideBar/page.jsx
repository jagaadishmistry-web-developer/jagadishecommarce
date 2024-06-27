import OneColumShopSection from "@/components/OneColumShopSection";
import ShortSideShopSection from "@/components/ShortSideShopSection";
import ViewPartDemoContent from "@/components/ViewPartDemoContent";

const page = () => {
  return (
    <>
      <ViewPartDemoContent title="Shop" title1="One Colums Shop" />
      <div className="container mx-auto px-4 grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <ShortSideShopSection />
        </div>
        <div className="lg:col-span-3">
          <OneColumShopSection />
        </div>
      </div>
    </>
  );
};

export default page;
