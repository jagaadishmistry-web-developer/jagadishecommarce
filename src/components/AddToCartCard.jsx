import Image from "next/image";
import { FaRegCircleXmark } from "react-icons/fa6";

const AddToCartCard = ({ addToCardData }) => {
  return (
    <>
      <div className="border-primary grid grid-cols-12">
        <div className="lg:col-span-7 col-span-5 grid grid-cols-7">
          <div className="col-span-2 flex items-center justify-center border border-primary py-2">
            <FaRegCircleXmark />
          </div>
          <div className="col-span-5 flex lg:flex-row flex-col gap-2 lg:px-4 items-center border border-primary py-2">
            <Image src={addToCardData.img} alt="iamage" />
            <p>{addToCardData.title}</p>
          </div>
        </div>
        <div className="lg:col-span-5 col-span-7 grid lg:grid-cols-8 grid-cols-6">
          <div className="lg:col-span-2 col-span-2 flex items-center justify-center border border-primary py-2">
            {addToCardData.price}
          </div>
          <div className="border border-primary lg:col-span-3 col-span-2 flex md:flex-row flex-col items-center justify-center py-2">
            <span className="border border-primary px-2 py-1 md:rounded-l-md">
              -
            </span>
            <span className="border border-primary px-2 py-1">2</span>
            <span className="border border-primary px-2 py-1 md:rounded-r-md">
              +
            </span>
          </div>
          <div className="lg:col-span-3 col-span-2 flex items-center justify-center border border-primary py-2">
            {addToCardData.subtotal}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCartCard;
