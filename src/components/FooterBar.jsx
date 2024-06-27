import Image from "next/image";

import Logo from "../../public/Logo.png";
import footerBrand from "../../public/footerBrand.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { FooterDat2, FooterData } from "@/utils/FooterData";
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { TbWorldWww } from "react-icons/tb";
import FirstDemoContent from "./FirstDemoContent";

const FooterBar = () => {
  return (
    <>
      <div className="bg-[url('/footerBg.png')] bg-cover bg-center flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-3 xl:pb-24 pb-16">
          <FirstDemoContent
            title1="Maxt Shop"
            title2="Newsletter Now"
            dec="Preorder now to receive exclusive deals & gifts"
          />
          <div className="relative pt-5">
            <button className="bg-primary text-white py-2 md:px-8 px-4 rounded-tl-3xl rounded-br-3xl absolute right-2 bottom-2">
              Subscribe
            </button>
            <input
              placeholder="Enter Your Email"
              className="h-14 md:w-[550px] w-72 md:px-6 px-3 focus:outline-none bg-transparent border border-primary rounded-tl-3xl rounded-br-3xl placeholder-secemdry"
            />
          </div>
        </div>
      </div>
      <div className="xl:py-24 py-20 ">
        <div className="container mx-auto px-4 grid lg:grid-cols-4 md:grid-cols-2 gap-10">
          <div className="flex flex-col">
            <Image src={Logo} alt="Logo" />
            <spn className="border-t-2 border-primary h-2 w-[30%]" />
            <p className="py-6">
              Iteam is consisted of young pashion developer and designers who
              are intereste
            </p>

            <div className="flex gap-3">
              <FaFacebookF className="text-primary border border-primary rounded-full w-8 h-8 p-2 hover:bg-primary hover:text-white duration-300" />
              <FaInstagram className="text-primary border border-primary rounded-full w-8 h-8 p-2 hover:bg-primary hover:text-white duration-300" />
              <FaTwitter className="text-primary border border-primary rounded-full w-8 h-8 p-2 hover:bg-primary hover:text-white duration-300" />
              <FaLinkedinIn className="text-primary border border-primary rounded-full w-8 h-8 p-2 hover:bg-primary hover:text-white duration-300" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-2xl font-semibold flex flex-col">
              Quick Links
              <spn className="border-t-2 border-primary h-2 w-[30%]" />
            </div>
            {FooterData.map((value) => (
              <div key={value.id} className="flex flex-col gap-3">
                <div className="flex items-center gap-4">{value.title}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-2xl font-semibold flex flex-col">
              Categories
              <spn className="border-t-2 border-primary h-2 w-[30%]" />
            </div>
            {FooterDat2.map((value) => (
              <div key={value.id} className="flex flex-col gap-3">
                <div className="flex items-center gap-4">{value.title}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-2xl font-semibold flex flex-col">
              Contact Us
              <spn className="border-t-2 border-primary h-2 w-[30%]" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-4">
                <FaLocationDot className="mt-2" />
                <span className="flex flex-col">
                  29 Main Rd E, St Albans <span>Shop center LH 1, USA </span>
                </span>
              </div>
              <div className="flex items-center gap-4">
                <IoIosMail />
                <span className="flex flex-col">info@maxtshop.com</span>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneVolume />
                <span className="flex flex-col">+99 88045813402</span>
              </div>
              <div className="flex items-center gap-4">
                <TbWorldWww />
                <span className="flex flex-col">+99 88045813402</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secemdry text-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 py-6 gap-3">
          <div className="">
            Copyright © 2024 <span className="text-primary">Maxtshop</span> .
            All Rights Reserved.
          </div>
          <div className="flex justify-center">
            <Image src={footerBrand} alt="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBar;
