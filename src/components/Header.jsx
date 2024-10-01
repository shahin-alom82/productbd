"use client"
import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { BsCartCheckFill } from "react-icons/bs";
import Container from "./Container";

const Header = () => {
      const [active, setActive] = useState("HOME");

      return (
            <div className="border-b border-gray-300 py-4 sticky z-50 top-0 bg-white opacity-85">
                  <Container className="flex justify-between items-center">
                        {/* Logo */}
                        <h1 className="text-2xl font-semibold"><span className="text-blue-600">PRODUCT</span><span className="text-gray-700">BD</span></h1>

                        {/* Navigation Links */}
                        <div className="flex items-center gap-10">
                              <h1
                                    onClick={() => setActive("HOME")}
                                    className={`cursor-pointer ${active === "HOME" ? "text-blue-700" : "text-gray-700"
                                          }`}
                              >
                                    HOME
                              </h1>
                              <h1
                                    onClick={() => setActive("ALL PRODUCTS")}
                                    className={`cursor-pointer ${active === "ALL PRODUCTS"
                                          ? "text-blue-700"
                                          : "text-gray-700"
                                          }`}
                              >
                                    ALL PRODUCTS
                              </h1>
                              <h1
                                    onClick={() => setActive("ABOUT")}
                                    className={`cursor-pointer ${active === "ABOUT" ? "text-blue-700 " : "text-gray-700"
                                          }`}
                              >
                                    ABOUT
                              </h1>
                              <h1
                                    onClick={() => setActive("CONTACT")}
                                    className={`cursor-pointer ${active === "CONTACT" ? "text-blue-700 " : "text-gray-700"
                                          }`}
                              >
                                    CONTACT
                              </h1>
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
