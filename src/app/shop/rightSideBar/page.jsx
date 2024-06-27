import ShortSideShopSection from "@/components/ShortSideShopSection";
import SideShopSection from "@/components/SideShopSection";
import ViewPartDemoContent from "@/components/ViewPartDemoContent";

const page = () => {
  return (
    <>
      <ViewPartDemoContent title="Right Side Shop" title1="Right Side Shop" />
      <div className="container mx-auto px-4 grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <SideShopSection />
        </div>
        <div className="lg:col-span-1">
          <ShortSideShopSection />
        </div>
      </div>
    </>
  );
};

export default page;
