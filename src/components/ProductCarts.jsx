"use client"
import Container from "./Container";
import { fetchData } from "./helper";
import ProductCart from "./ProductCart";

const ProductCarts = async () => {

      const endPoind = "https://shahinjsondata.vercel.app/product"
      const product = await fetchData(endPoind)
      console.log("product", product)
      return (
            <div>
                  <Container>
                        <div className="text-center py-10">
                              <h1 className="lg:text-2xl text-xl tracking-wide font-semibold text-gray-700">Top Product to Shopping</h1>
                              <p className="lg:text-[14px] text-xs mt-2 text-gray-800">Simply browse through our extensive list of trusted product.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 gap-4">
                              {
                                    product.slice(0, 16).map((item) => <ProductCart key={item?._id} product={item} />)
                              }
                        </div>
                        {/* <div>jsljla</div> */}
                  </Container>
            </div>
      );
};

export default ProductCarts;