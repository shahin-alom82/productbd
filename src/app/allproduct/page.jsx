"use client";
import { useState, useEffect } from 'react';
import Container from "@/components/Container";
import { fetchData } from "@/components/helper";
import ProductCart from "@/components/ProductCart";

const AllProductPage = () => {

  const [category, setCategory] = useState('all');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  
  const endPoint = "https://shahinjsondata.vercel.app/product";
  useEffect(() => {
    const getProducts = async () => {
      const productData = await fetchData(endPoint);
      setProducts(productData);
      setFilteredProducts(productData);
    };
    getProducts();
  }, []);


  useEffect(() => {
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((item) =>
        item.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  }, [category, products]);


  const sideNav = [
    { title: "All", path: "all" },
    { title: "LED TV", path: "tv" },
    { title: "Watch", path: "watch" },
    { title: "Electric", path: "electric" },
    { title: "Furniture", path: "furniture" },
    { title: "Head Phone", path: "headphone" }
  ];


  return (
    <Container className={"py-5"}>
      <h1 className="text-sm tracking-wide text-gray-700">Browse through the products specialist.</h1>
      <div className="lg:flex flex-row gap-5 ">

        {/* Sidebar */}
        <div className="w-full lg:w-1/6 mt-5 flex flex-row lg:flex-col gap-4 text-start cursor-pointer overflow-auto">
          {sideNav.map((item, index) => (
            <button
              key={index}
              onClick={() => setCategory(item.path)}
              className={`border border-gray-300 px-2 text-sm py-1 rounded text-gray-700 uppercase ${category === item.path ? 'bg-gray-300' : ''}`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 gap-4 py-5 w-full lg:w-5/6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <ProductCart key={item?._id} product={item} />
            ))
          ) : (
            <p className='lg:text-2xl text-center text-gray-700 tracking-wide font-medium'>Product Not found.</p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default AllProductPage;
