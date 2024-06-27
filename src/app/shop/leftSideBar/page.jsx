import ShortSideShopSection from "@/components/ShortSideShopSection";
import SideShopSection from "@/components/SideShopSection";
import ViewPartDemoContent from "@/components/ViewPartDemoContent";

const page = () => {
  return (
    <>
      <ViewPartDemoContent title="Left Side Shop" title1="Left Side Shop" />
      <div className="container mx-auto px-4 grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <ShortSideShopSection />
        </div>
        <div className="lg:col-span-3">
          <SideShopSection />
        </div>
      </div>
    </>
  );
};

export default page;
