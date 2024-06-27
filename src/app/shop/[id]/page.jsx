"use client";

import { CatagoryData } from "@/utils/CatagoryData";
import Image from "next/image";
import { useState } from "react";

const Page = ({ params }) => {
  const [items, setItems] = useState(CatagoryData);

  const postId = parseInt(params.id);
  const post = items.find((projectData) => projectData.id === postId);
  const { img, title } = post;
  return (
    <>
      <div>
        {title}
        <Image src={img} alt="image" />
      </div>
    </>
  );
};

export default page;
