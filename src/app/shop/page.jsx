import CatagaryCard from "@/components/CatagaryCard";
import ViewPartDemoContent from "@/components/ViewPartDemoContent";
import { CatagoryData } from "@/utils/CatagoryData";
import { MdOutlineFormatListBulleted } from "react-icons/md";
import {
  TfiLayoutGrid2Alt,
  TfiLayoutGrid3Alt,
  TfiLayoutGrid4Alt,
} from "react-icons/tfi";

const page = () => {
  return (
    <>
      <ViewPartDemoContent title="Shop" title1="Shop" />
      <div className="container mx-auto px-4 xl:py-28 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          <p className="border px-4 py-3">Showing 1–32 of 50 results</p>
          <div className="md:flex hidden"></div>
          <div className="w-full flex lg:justify-end">
            <div className="border px-4 py-3 flex gap-6 items-center">
              <MdOutlineFormatListBulleted className="text-3xl" />
              <TfiLayoutGrid2Alt className="text-2xl" />
              <TfiLayoutGrid3Alt className="text-2xl" />
              <TfiLayoutGrid4Alt className="text-2xl" />
            </div>
          </div>
          <select className="border px-4 py-3">
            <option value="">Default Sorting</option>
            <option value="">Default Sorting 1</option>
            <option value="">Default Sorting 2</option>
          </select>
        </div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6 xl:py-12 py-8">
          {CatagoryData.map((cData) => (
            <CatagaryCard key={cData.id} {...cData} />
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
