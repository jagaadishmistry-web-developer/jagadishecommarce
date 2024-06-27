import Blog1Colums from "@/components/Blog1Colums";
import Blog3Colums from "@/components/Blog3Colums";
import ViewPartDemoContent from "@/components/ViewPartDemoContent";

const page = () => {
  return (
    <>
      <ViewPartDemoContent title="Blog" title1="Blog Left SideBar" />
      <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-8 xl:py-28 py-16">
        <div className="lg:col-span-1">
          <Blog1Colums />
        </div>
        <div className="lg:col-span-2">
          <Blog3Colums />
        </div>
      </div>
    </>
  );
};

export default page;
