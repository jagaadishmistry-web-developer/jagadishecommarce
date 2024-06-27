import CatagorySection from "@/components/CatagorySection";
import FirstDemoContent from "@/components/FirstDemoContent";
import PopularItemPart from "@/components/PopularItemPart";
import { product1, productCard } from "@/utils/AllData";
import Image from "next/image";
import gallary1 from "../../../public/gallary1.png";
import gallary2 from "../../../public/gallary2.png";
import gallary3 from "../../../public/gallary3.png";
import gallary4 from "../../../public/gallary4.png";
import gallary5 from "../../../public/gallary5.png";
import gallary6 from "../../../public/gallary6.png";
import star from "../../../public/star.png";
import BlogCard from "@/components/BlogCard";
import { BlogData } from "@/utils/BlogData";
import BrandSection from "@/components/BrandSection";
import InstagramStoriseSection from "@/components/InstagramStoriseSection";

const HomePage = () => {
  return (
    <>
      <section className="bg-[url('/Headers.jpg')] bg-cover bg-center text-white">
        <div className="container mx-auto px-4 flex flex-col items-center lg:py-48 py-32">
          <i className="font-1 text-3xl font-bold text-center">
            Welcome to Maxt Stock,
            <span className="text-primary">Up To 25% Off</span>
          </i>
          <div className="flex flex-col gap-1 xl:text-6xl text-4xl font-bold text-center pb-8 pt-4">
            <h1>Our Bast Beautifully</h1>
            <h1>Table & Chair</h1>
          </div>
          <button className="bg-black py-2 px-7 rounded-tr-3xl rounded-bl-3xl">
            Shop Now
          </button>
        </div>
      </section>
      <section className="container mx-auto px-4 lg:pt-10 pt-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {product1.map((pData) => (
            <div
              key={pData.id}
              className="relative group flex justify-center items-center">
              <div className="absolute group-hover:block hidden bg-black/50 w-full h-full">
                <div className="flex flex-col items-center justify-center h-full gap-2 text-white">
                  <h1 className="text-2xl font-medium">{pData.title}</h1>
                  <button className="bg-wh text-primary py-2 px-7 rounded-tr-3xl rounded-bl-3xl">
                    Shop Now
                  </button>
                </div>
              </div>
              <Image src={pData.img} alt="image" className="w-full" />
            </div>
          ))}
        </div>
      </section>
      <section className="container mx-auto px-4">
        <FirstDemoContent
          title1="Maxt Shop"
          title2="Our Best Categories"
          dec="Preorder now to receive exclusive deals & gifts"
        />
        <div className="grid lg:grid-cols-2 py-6 gap-6">
          <div className="grid lg:grid-cols-1 gap-6">
            <div className="relative group flex justify-center items-center">
              <div className="absolute group-hover:block hidden bg-black/50 w-full h-full">
                <div className="flex flex-col items-center justify-center h-full gap-2 text-white">
                  <h1 className="text-2xl font-medium">Lounge Chair</h1>
                  <p>25 Products</p>
                </div>
              </div>
              <Image src={gallary1} alt="image" className="w-full" />
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="w-full">
                <div className="relative group flex justify-center items-center">
                  <div className="absolute group-hover:block hidden bg-black/50 w-full h-full">
                    <div className="flex flex-col items-center justify-center h-full gap-2 text-white">
                      <h1 className="text-2xl font-medium">Lounge Chair</h1>
                      <p>25 Products</p>
                    </div>
                  </div>
                  <Image src={gallary4} alt="image" className="w-full" />
                </div>
              </div>
              <div className="w-full">
                <div className="relative group flex justify-center items-center">
                  <div className="absolute group-hover:block hidden bg-black/50 w-full h-full">
                    <div className="flex flex-col items-center justify-center h-full gap-2 text-white">
                      <h1 className="text-2xl font-medium">Lounge Chair</h1>
                      <p>25 Products</p>
                    </div>
                  </div>
                  <Image src={gallary5} alt="image" className="w-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="relative group flex justify-center items-center">
              <div className="absolute group-hover:block hidden bg-black/50 w-full h-full">
                <div className="flex flex-col items-center justify-center h-full gap-2 text-white">
                  <h1 className="text-2xl font-medium">Lounge Chair</h1>
                  <p>25 Products</p>
                </div>
              </div>
              <Image src={gallary2} alt="image" className="w-full" />
            </div>
            <div className="grid lg:grid-cols-1">
              <div className="relative group flex justify-center items-center">
                <div className="absolute group-hover:block hidden bg-black/50 w-full h-full">
                  <div className="flex flex-col items-center justify-center h-full gap-2 text-white">
                    <h1 className="text-2xl font-medium">Lounge Chair</h1>
                    <p>25 Products</p>
                  </div>
                </div>
                <Image src={gallary3} alt="image" className="w-full" />
              </div>
              <div className="relative group flex justify-center items-center">
                <div className="absolute group-hover:block hidden bg-black/50 w-full h-full">
                  <div className="flex flex-col items-center justify-center h-full gap-2 text-white">
                    <h1 className="text-2xl font-medium">Lounge Chair</h1>
                    <p>25 Products</p>
                  </div>
                </div>
                <Image src={gallary6} alt="image" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-primary/5">
        <section className="container mx-auto px-4">
          <FirstDemoContent
            title1="Maxt Shop"
            title2="Top Picks For You"
            dec="Preorder now to receive exclusive deals & gifts"
          />
          <div className="grid lg:grid-cols-4 gap-6 xl:py-10 py-6">
            {productCard.map((pData) => (
              <div
                key={pData.id}
                className="text-center flex flex-col items-center bg-white">
                <Image src={pData.img} alt="image" className="w-full" />
                <div className="flex flex-col items-center py-6">
                  <Image src={star} alt="image" />
                  <h1 className="text-lg font-medium py-1">{pData.title}</h1>
                  <div className="flex gap-3">
                    <span className="line-through">$40.00</span>
                    <span className="text-primary">$30.00</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <PopularItemPart />
      <CatagorySection />
      <section className="container mx-auto px-4 flex flex-col items-center pb-6">
        <FirstDemoContent
          title1="Maxt Shop"
          title2="Our Latest News"
          dec="Preorder now to receive exclusive deals & gifts"
        />
        <div className="xl:py-10 py-6">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-8 gap-6">
            {BlogData.slice(0, 3).map((bData) => {
              return (
                <div key={bData.id} className="">
                  <BlogCard blData={bData} />
                </div>
              );
            })}
          </div>
        </div>
        <button className="bg-primary text-white py-3 px-8 rounded-tr-3xl rounded-bl-3xl">
          View All Post
        </button>
      </section>
      <BrandSection />
      <InstagramStoriseSection />
    </>
  );
};

export default HomePage;
