"use client";
import Container from "@/components/Container";
import { useEffect, useState } from "react";
import { fetchData } from "@/components/helper";
import { FaStar } from "react-icons/fa6";
import { BsCartCheckFill } from "react-icons/bs";

const ProductPage = ({ params }) => {

      const [product, setProduct] = useState([]);
      const _id = params.id;

      useEffect(() => {
            const fetchProduct = async () => {
                  const endPoind = `https://shoppingapi.vercel.app/shahin`;
                  const data = await fetchData(endPoind);
                  const foundProduct = data.find((item) => item._id == _id);
                  setProduct(foundProduct);
            };
            fetchProduct();
      }, [_id]);


      return (
            <div className="lg:py-10">
                  <Container className={"border-b border-gray-200 border-t"}>
                        <div className="flex flex-col lg:flex-row gap-10 py-4">
                              <div className="lg:w-2/6 w-full">
                                    <img src={product?.image} className="lg:h-64 lg:w-64 rounded items-center justify-center text-center" alt="productImage" />
                              </div>
                              <div className="lg:w-4/6 lg:mt-3">
                                    <h1 className="lg:text-2xl text-[22px] tracking-wide font-medium text-gray-800">{product?.title}</h1>
                                    <h1 className="mt-2 text-gray-700">{product?.description}</h1>
                                    <h1 className="mt-2 text-gray-700">category : {product?.category}</h1>
                                    <div className="flex items-center mt-2">
                                          {Array.from({ length: product.rating }, (_, index) => (
                                                <span key={index} className="text-orange-400">
                                                      <FaStar size={20} />
                                                </span>
                                          ))}
                                    </div>
                                    <div className="flex items-center gap-4">
                                          <h1 className="mt-2 text-[18px] text-green-900 line-through">${product?.oldPrice}</h1>
                                          <h1 className="mt-2 text-[18px] text-green-900">${product?.price}</h1>
                                    </div>
                                    <div className="flex items-center gap-[1px] mt-2">
                                          <h1 className="bg-green-600 text-white py-1 px-2 text-sm">Add To Cart</h1>
                                          <span className="bg-green-600 text-white py-1.5 px-2"><BsCartCheckFill /></span>
                                    </div>
                              </div>
                        </div>
                  </Container>
            </div>
      );
};

export default ProductPage;
