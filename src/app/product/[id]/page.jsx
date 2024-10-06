"use client";
import Container from "@/components/Container";
import { useEffect, useState } from "react";
import { fetchData } from "@/components/helper";

const ProductPage = ({ params }) => {
      const [product, setProduct] = useState([]);
      const _id = params.id;
      useEffect(() => {
            const fetchProduct = async () => {
                  const endPoind = `https://shahinjsondata.vercel.app/product`;
                  const data = await fetchData(endPoind);
                  const foundProduct = data.find((item) => item._id == _id);
                  setProduct(foundProduct);
            };

            fetchProduct();
      }, [_id]);

      return (
            <div className="py-10 ">
                  <Container className={""}>
                        <div className="flex gap-10">
                              <div>
                                    <img src={product?.image} className="lg:h-64 w-64 rounded" alt="productImage" />
                              </div>
                              <div>
                                    <h1 className="lg:text-2xl text-xl tracking-wide text-gray-700">{product?.title}</h1>
                              </div>
                        </div>
                  </Container>
            </div>
      );
};

export default ProductPage;
