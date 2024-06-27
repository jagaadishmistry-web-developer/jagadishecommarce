import Image from "next/image";
import brand1 from "../../public/brand1.png";
import brand2 from "../../public/brand2.png";
import brand3 from "../../public/brand3.png";
import brand4 from "../../public/brand4.png";
import brand5 from "../../public/brand5.png";

const BrandData = [
  {
    id: 0,
    img: brand1,
  },
  {
    id: 1,
    img: brand2,
  },
  {
    id: 2,
    img: brand3,
  },
  {
    id: 3,
    img: brand4,
  },
  {
    id: 4,
    img: brand5,
  },
];

const BrandSection = () => {
  return (
    <>
      <div className="container mx-auto px-4 xl:py-16 py-8">
        <div className="grid lg:grid-cols-5 md:grid-cols-3">
          {BrandData.map((bData) => (
            <div
              key={bData.id}
              className="flex flex-col items-center border border-primary xl:p-6 p-3">
              <Image src={bData.img} alt="image" className="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BrandSection;
