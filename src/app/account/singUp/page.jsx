import ViewPartDemoContent from "@/components/ViewPartDemoContent";
import Link from "next/link";

const page = () => {
  return (
    <>
      <ViewPartDemoContent title="My Account" title1="My Account" />
      <div className="bg-[url('/accountBg.png')] bg-center bg-cover xl:py-24 py-10 flex items-center justify-center">
        <div className="flex flex-col gap-5 bg-white xl:px-6 px-4 xl:py-16 py-10 xl:w-[480px] rounded-md">
          <p className="xl:text-2xl text-xl font-semibold pb-3">Sing Up</p>
          <input
            type="text"
            className="focus:outline-none px-4 py-3 border border-primary rounded-lg w-full placeholder:text-black"
            placeholder="Enter Email :"
          />
          <div className="lg:col-span-2 flex justify-between">
            <span className="flex gap-2">
              <input type="checkbox" name="" id="" />
              Keep Remembar
            </span>
            <span className="text-primary">Forget Password?</span>
          </div>
          <div className="flex items-center justify-between pt-3">
            <button className="px-5 py-2 bg-primary text-white rounded-md">
              Reset Password
            </button>
            <Link href="/account/singIn" className="text-primary">
              Click Here To Sing In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
