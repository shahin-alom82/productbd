"use client"
import { RiCloseLine } from "react-icons/ri";
import { useState, useEffect } from 'react';
import { fetchData } from "./helper";
import Link from "next/link";

const SearchInput = () => {
      const [search, setSearch] = useState("")
      const [products, setProducts] = useState([]);
      const [filterData, setFilterData] = useState([]);

      useEffect(() => {

            const getProducts = async () => {
                  const endPoind = "https://shoppingapi.vercel.app/shahin"
                  try {
                        const alldata = await fetchData(endPoind)
                        setProducts(alldata)
                  }
                  catch (error) {
                        console.log("Data Not Pound")
                  }
            }
            getProducts()
      }, [])

      useEffect(() => {

            const filterdata = products.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
            setFilterData(filterdata)


      }, [search, products])


      return (
            <div>
                  <div className="relative">
                        <input
                              type="text"
                              value={search}
                              onChange={(e) => setSearch(e.target.value)}
                              placeholder="Product Search..."
                              className="border placeholder:text-sm relative border-gray-300 py-1.5 outline-none pr-8 pl-4 text-sm text-gray-600 lg:w-[400px] w-[260px] rounded-full"
                        />
                        {
                              search && (
                                    <RiCloseLine onClick={() => setSearch("")} className="absolute top-[8px] right-[10px] lg:top-[8px] lg:right-[12px] text-gray-600 cursor-pointer hover:text-red-400" />
                              )
                        }

                        {search && filterData.length > 0 && (
                              <div className="absolute z-10 w-full bg-gray-50 shadow-lg shadow-gray-300 rounded-md mt-2 max-h-60 overflow-auto">
                                    {filterData.map((item) => (
                                          <Link
                                                key={item.id}
                                                onClick={() => setSearch("")}
                                                href={{ pathname: `/product/${item._id}`, query: { _id: item._id } }}
                                          >
                                                <div className="p-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-5 transition duration-200">
                                                      <img
                                                            className="w-14 h-14 rounded object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                                                            src={item.image}
                                                            alt={item.title}
                                                      />
                                                      <div>
                                                            <h1 className="text-sm font-medium text-gray-600">
                                                                  {item.title}
                                                            </h1>
                                                            <h1 className="text-sm font-medium text-gray-600">
                                                                Price : <span className="font-medium text-green-600">${item.price}</span>
                                                            </h1>
                                                      </div>
                                                </div>
                                          </Link>
                                    ))}
                              </div>
                        )}
                        {search && filterData.length === 0 && (
                              <div className="absolute  bg-gray-50 shadow-lg rounded-md mt-2 w-full">
                                    <div className="p-2 text-gray-500">Product Not found</div>
                              </div>
                        )}
                  </div>
            </div>
      );
};

export default SearchInput;