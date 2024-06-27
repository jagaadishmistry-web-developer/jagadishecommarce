import BlogCard from "@/components/BlogCard";
import ViewPartDemoContent from "@/components/ViewPartDemoContent";
import { BlogData } from "@/utils/BlogData";

const page = () => {
  return (
    <>
      <ViewPartDemoContent title="Blog" title1="Blog" />
      <div className="container mx-auto px-4 xl:py-16 py-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-8 gap-6">
          {BlogData.map((bData) => {
            return (
              <div key={bData.id}>
                <BlogCard blData={bData} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default page;
