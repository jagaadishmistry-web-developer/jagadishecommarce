import ViewPartDemoContent from "@/components/ViewPartDemoContent";
import Link from "next/link";

const page = () => {
  return (
    <>
      <ViewPartDemoContent title="My Account" title1="My Account" />
      <div className="bg-[url('/accountBg.png')] bg-center bg-cover xl:py-24 py-10 flex items-center justify-center">
        <div className="flex flex-col gap-5 bg-white xl:px-6 px-4 xl:py-16 py-10 xl:w-[480px] rounded-md">
          <p className="xl:text-2xl text-xl font-semibold pb-3">
            Customers Register
          </p>
          <input
            type="text"
            className="focus:outline-none px-4 py-3 border border-primary rounded-lg w-full placeholder:text-black"
            placeholder="Frist Name :"
          />
          <input
            type="text"
            className="focus:outline-none px-4 py-3 border border-primary rounded-lg w-full placeholder:text-black"
            placeholder="Last Name :"
          />
          <input
            type="text"
            className="focus:outline-none px-4 py-3 border border-primary rounded-lg w-full placeholder:text-black"
            placeholder="Enter Email :"
          />
          <input
            type="text"
            className="focus:outline-none px-4 py-3 border border-primary rounded-lg w-full placeholder:text-black"
            placeholder="Enter Password :"
          />
          <input
            type="text"
            className="focus:outline-none px-4 py-3 border border-primary rounded-lg w-full placeholder:text-black"
            placeholder="Conform Password :"
          />
          <div className="lg:col-span-2 flex gap-2">
            <input type="checkbox" name="" id="" />I Agree Terms and Conditions.
          </div>
          <div className="flex items-center justify-between pt-3">
            <Link
              href="/account/singUp"
              className="px-5 py-2 bg-primary text-white rounded-md">
              Sing Up
            </Link>
            <p>
              You have an account? Please,
              <Link href="/account/singIn" className="text-primary">
                {" "}
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
