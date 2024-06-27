"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FaRegHeart,
  FaRegUserCircle,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";
import { FaAngleDown, FaBars, FaXmark } from "react-icons/fa6";
import Logo from "../../public/Logo.png";

const navManu = [
  {
    id: 1,
    herf: "/home",
    name: "Home",
  },
  {
    id: 2,
    herf: "/about",
    name: "About",
  },
  {
    id: 3,
    herf: "/team",
    name: "Team",
  },

  {
    id: 4,
    herf: "/shop",
    name: "Shop",
  },
  {
    id: 5,
    herf: "/blog",
    name: "Blog",
  },
  {
    id: 6,
    herf: "/contact",
    name: "Contact",
  },
];
const navManuS = [
  {
    herf: "/shop",
    name: "Shop",
  },
  {
    herf: "/shop/leftSideBar",
    name: "Shop Left Side Bar",
  },
  {
    herf: "/shop/rightSideBar",
    name: "Shop Right Side Bar",
  },
  {
    herf: "/shop/twoColumSideBar",
    name: "2 Colum Shop",
  },
  {
    herf: "/shop/leftOneColumSideBar",
    name: "1 Left Colum Shop",
  },
  {
    herf: "/shop/rightOneColumSideBar",
    name: "1 Right Colum Shop",
  },
];

const navManuS2 = [
  {
    herf: "/blog",
    name: "Blog",
  },
  {
    herf: "/blog/blogLeftSideBar",
    name: "Blog Left SideBar",
  },
  {
    herf: "/blog/blogRightSideBar",
    name: "Blog Right SideBar",
  },
  {
    herf: "/blog/singleBlog",
    name: "Single Blog",
  },
];

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [dropDoun, setDropDoun] = useState(false);
  const [dropDoun2, setDropDoun2] = useState(false);
  const pathname = usePathname();
  const pathname1 = usePathname();
  const pathname2 = usePathname();
  return (
    <>
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <Link href="/">
          <Image src={Logo} alt="Logo" />
        </Link>
        <div className="md:flex hidden gap-6 items-center">
          {navManu.map((value) => {
            const isActive = pathname.startsWith(value.herf);
            if (value.name === "Shop") {
              return (
                <div
                  key={value.name}
                  onMouseEnter={() => setDropDoun(true)}
                  onMouseLeave={() => setDropDoun(false)}
                  className="group flex gap-3">
                  <Link
                    href={value.herf}
                    className={isActive ? "text-primary" : ""}>
                    {value.name}
                  </Link>
                  <div className="pt-[3px] ">
                    <FaAngleDown
                      className={`${
                        isActive ? "text-primary" : ""
                      } duration-300 group-hover:rotate-180`}
                    />
                  </div>
                  {dropDoun && (
                    <div className="absolute pt-10 z-30">
                      <div className="flex w-full flex-col gap-2 rounded-md border border-primary bg-white p-4">
                        {navManuS.map((itams) => {
                          const isActive = pathname1.startsWith(itams.herf);
                          return (
                            <span key={itams.name}>
                              <Link
                                href={itams.herf}
                                className={isActive ? "text-primary" : ""}>
                                {itams.name}
                              </Link>
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            if (value.name === "Blog") {
              return (
                <div
                  key={value.name}
                  onMouseEnter={() => setDropDoun2(true)}
                  onMouseLeave={() => setDropDoun2(false)}
                  className="group flex gap-3">
                  <Link
                    href={value.herf}
                    className={isActive ? "text-primary" : ""}>
                    {value.name}
                  </Link>
                  <div className="pt-[3px] ">
                    <FaAngleDown
                      className={`${
                        isActive ? "text-primary" : ""
                      } duration-300 group-hover:rotate-180`}
                    />
                  </div>
                  {dropDoun2 && (
                    <div className="absolute pt-10 z-30">
                      <div className="flex w-full flex-col gap-2 rounded-md border border-primary bg-white p-4">
                        {navManuS2.map((itams) => {
                          const isActive = pathname2.startsWith(itams.herf);
                          return (
                            <span key={itams.name}>
                              <Link
                                href={itams.herf}
                                className={isActive ? "text-primary" : ""}>
                                {itams.name}
                              </Link>
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={value.id}
                href={value.herf}
                className={isActive ? "text-primary" : ""}>
                {value.name}
              </Link>
            );
          })}
        </div>
        <div className="flex md:gap-6 gap-4 items-center">
          <FaSearch />
          <Link href="/account/register">
            <FaRegUserCircle />
          </Link>
          <FaRegHeart />
          <Link href={"/cart"}>
            <FaShoppingCart />
          </Link>
        </div>
        <div onClick={() => setNav(!nav)} className="cursor-pointer md:hidden">
          {nav ? (
            <FaXmark className="h-7 w-8" />
          ) : (
            <FaBars className="h-7 w-8" />
          )}
        </div>
        {nav && (
          <div className="h-scree absolute left-0 right-0 top-[152px] bottom-0 text-center backdrop-blur-lg text-white">
            <div className="flex flex-col items-center gap-3 px-6 pt-16 font-medium">
              {navManu.map((value) => {
                const isActive = pathname.startsWith(value.herf);
                if (value.name === "Shop") {
                  return (
                    <div
                      key={value.name}
                      onMouseEnter={() => setDropDoun(true)}
                      onMouseLeave={() => setDropDoun(false)}
                      className="group flex gap-3">
                      <Link
                        href={value.herf}
                        className={isActive ? "text-primary" : ""}>
                        {value.name}
                      </Link>
                      <div className="pt-[3px] ">
                        <FaAngleDown
                          className={`${
                            isActive ? "text-primary" : ""
                          } duration-300 group-hover:rotate-180`}
                        />
                      </div>
                      {dropDoun && (
                        <div className="absolute pt-10 z-30">
                          <div className="flex w-full flex-col gap-2 rounded-md border border-primary bg-white p-4">
                            {navManuS.map((itams) => {
                              const isActive = pathname1.startsWith(itams.herf);
                              return (
                                <span key={itams.name}>
                                  <Link
                                    href={itams.herf}
                                    className={isActive ? "text-primary" : ""}>
                                    {itams.name}
                                  </Link>
                                </span>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }
                if (value.name === "Blog") {
                  return (
                    <div
                      key={value.name}
                      onMouseEnter={() => setDropDoun2(true)}
                      onMouseLeave={() => setDropDoun2(false)}
                      className="group flex gap-3">
                      <Link
                        href={value.herf}
                        className={isActive ? "text-primary" : ""}>
                        {value.name}
                      </Link>
                      <div className="pt-[3px] ">
                        <FaAngleDown
                          className={`${
                            isActive ? "text-primary" : ""
                          } duration-300 group-hover:rotate-180`}
                        />
                      </div>
                      {dropDoun2 && (
                        <div className="absolute pt-10 z-30">
                          <div className="flex w-full flex-col gap-2 rounded-md border border-primary bg-white p-4">
                            {navManuS2.map((itams) => {
                              const isActive = pathname2.startsWith(itams.herf);
                              return (
                                <span key={itams.name}>
                                  <Link
                                    href={itams.herf}
                                    className={isActive ? "text-primary" : ""}>
                                    {itams.name}
                                  </Link>
                                </span>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <Link
                    href={value.herf}
                    key={value.name}
                    className={isActive ? "text-primary" : ""}>
                    {value.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
