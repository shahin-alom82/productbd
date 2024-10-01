
const ProductCart = ({ product }) => {
      console.log("product", product)
      return (
            <div className="bg-[#cbe9ff]">
                  <img src={product?.image} className="h-64 w-full px-3 py-3" alt="productImage" />
                  <div className="px-3 ">
                        <h1 className="text-[18px] text-gray-700">{product?.title}</h1>
                  </div>
            </div>
      );
};

export default ProductCart;