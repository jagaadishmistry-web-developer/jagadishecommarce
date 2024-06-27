"use client";

import { ClintsReviewData } from "@/utils/OurClientsReciewData";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import FirstDemoContent from "./FirstDemoContent";
import OurClientsReviewCard from "./OurClientsReviewCard";

const OurClientsReviewSection = () => {
  var settings = {
    focusOnSelect: true,
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="container mx-auto px-7 pb-6">
        <FirstDemoContent
          title1="Maxt Shop"
          title2="Our clients Reviews"
          dec="Preorder now to receive exclusive deals & gifts"
        />
        <div className="xl:py-10 py-6">
          <Slider {...settings} className="">
            {ClintsReviewData.map((ClData) => (
              <div key={ClData.id}>
                <OurClientsReviewCard ClintsData={ClData} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default OurClientsReviewSection;
