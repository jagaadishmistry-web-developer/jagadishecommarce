import Link from "next/link";
import { BsFillRecordFill } from "react-icons/bs";

const ViewPartDemoContent = (props) => {
  return (
    <>
      <div className="bg-[url('/viewPartBg.png')] bg-cover bg-center">
        <div className="container mx-auto px-4 text-white flex lg:justify-between">
          <div className=""></div>
          <div className="xl:py-32 py-24">
            <h1 className="xl:text-6xl text-3xl font-medium">{props.title}</h1>
            <div className="flex items-center gap-3 xl:text-3xl text-xl pt-4">
              <Link href="/home">Home</Link>
              <BsFillRecordFill />
              <p>{props.title1}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewPartDemoContent;
