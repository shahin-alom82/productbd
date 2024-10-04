"use  client"
import Container from "@/components/Container";
import { fetchData } from "@/components/helper";
import ProductCart from "@/components/ProductCart";

const AllProductPage = async () => {
  const endPoind = "https://shahinjsondata.vercel.app/product";
  const product = await fetchData(endPoind);
  return (
    <div>
      <Container className={"py-5"}>
        <h1 className="text-sm tracking-wide text-gray-700">Browse through the products specialist.</h1>
        <div className="flex gap-5">
          {/* Sidebar */}
          <div className="w-1/6 mt-5 flex flex-col gap-4 text-start sticky top-20 cursor-pointer">
            <h1 className="border border-gray-300 px-2 text-sm py-1 rounded">Electric</h1>
            <h1 className="border border-gray-300 px-2 text-sm py-1 rounded">LED TV</h1>
            <h1 className="border border-gray-300 px-2 text-sm py-1 rounded">Head Phone</h1>
            <h1 className="border border-gray-300 px-2 text-sm py-1 rounded">Watch</h1>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 gap-4 py-5 w-5/6">
            {product.map((item) => (
              <ProductCart key={item?._id} product={item} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllProductPage;
