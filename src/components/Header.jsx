"use client"
import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";
import Container from "./Container";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
      const nav = [
            { title: "HOME", path: "/" },
            { title: "ALL PRODUCTS", path: "/allproduct" },
            { title: "ABOUT", path: "/about" },
            { title: "CONTACT", path: "/contact" }
      ]
      const pathName = usePathname()
      return (
            <div className="border-b border-gray-300 py-4 sticky z-50 top-0 bg-white opacity-85">
                  <Container className="flex justify-between items-center">
                        {/* Logo */}
                        <Link href={"/"}>
                              <h1 className="text-2xl font-semibold"><span className="text-blue-600">PRODUCT</span><span className="text-gray-700">BD</span></h1>
                        </Link>

                        {/* Navigation Links */}
                        <div className="flex gap-6">
                              {nav.map((item, index) => (
                                    <Link className={`${pathName === item.path ? "text-blue-700 font-medium" : "text-gray-700 font-medium"}`} href={item?.path} key={index}>
                                          <h1>{item?.title}</h1>
                                    </Link>
                              ))}
                        </div>
                        {/* User & Cart Icons */}
                        <div className="flex items-center gap-8 relative">
                              <FaUserAlt size={25} className="rounded-full text-gray-700" />
                              <BsCartCheckFill size={25} className="text-gray-700" />
                              <span className="absolute right-0.5 bottom-5 h-4 w-4 flex text-[14px] text-blue-700 items-center justify-center rounded-full">8</span>

                        </div>
                  </Container>
            </div>
      );
};

export default Header;
