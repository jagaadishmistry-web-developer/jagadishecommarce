import AddToCartCard from "@/components/AddToCartCard";
import ViewPartDemoContent from "@/components/ViewPartDemoContent";
import { CartData } from "@/utils/AllData";

const page = () => {
  return (
    <>
      <ViewPartDemoContent title="Cart" title1="Cart" />
      <div className="container mx-auto px-4 xl:py-20 py-16 md:text-base text-[10px]">
        <div className="grid lg:grid-cols-3 gap-8 w-full">
          <div className="lg:col-span-2 border border-primary">
            <div className="grid grid-cols-12">
              <div className="lg:col-span-7 col-span-5 grid grid-cols-7">
                <div className="col-span-2 flex justify-center border border-primary py-2">
                  cancel
                </div>
                <div className="col-span-5 flex justify-center border border-primary py-2">
                  Product
                </div>
              </div>
              <div className="lg:col-span-5 col-span-7 grid lg:grid-cols-8 grid-cols-6">
                <div className="lg:col-span-2 col-span-2 flex justify-center border border-primary py-2">
                  Price
                </div>
                <div className="lg:col-span-3 col-span-2 flex justify-center border border-primary py-2">
                  Quantity
                </div>
                <div className="lg:col-span-3 col-span-2 flex justify-center border border-primary py-2">
                  Subtotal
                </div>
              </div>
            </div>
            {CartData.map((crData) => (
              <div key={crData.id}>
                <AddToCartCard addToCardData={crData} />
              </div>
            ))}
            <div className="px-4 flex justify-between items-center lg:flex-row flex-col gap-3 border border-primary">
              <div className="flex lg:flex-row flex-col gap-5 xl:py-9 py-5 w-full lg:w-auto">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="focus:outline-none placeholder-primary px-3 py-3 w-full lg:w-auto border text-primary border-primary rounded-md"
                />
                <button className="px-8 py-3 bg-primary text-white rounded-md w-full lg:w-auto">
                  Apply Code
                </button>
              </div>
              <div className="pb-6 lg:pb-0 w-full lg:w-auto">
                <button className="px-8 py-3 bg-primary text-white rounded-md w-full lg:w-auto">
                  Update CArt
                </button>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="border border-primary">
              <p className="border border-primary xl:text-2xl text-lg font-medium py-3 text-center">
                Cart Totals
              </p>
              <div className="border border-primary px-4 flex justify-between font-medium py-3 text-center">
                <p>Subtotal</p>
                <p>$586.00</p>
              </div>
              <div className="border border-primary px-4 flex justify-between text-lg font-semibold py-3 text-center">
                <p>Subtotal</p>
                <p>$586.00</p>
              </div>
              <div className="border border-primary px-4 py-3 w-full">
                <button className="px-8 py-3 bg-primary text-white rounded-md w-full">
                  Proceed to checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
