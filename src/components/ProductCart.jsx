const ProductCart = ({ product }) => {
      
      return (
            <div className="bg-[#cbe9ff] rounded mb-10">
                  <img src={product?.image} className="lg:h-64 w-full h-32 lg:px-2 lg:py-2 py-1 px-1 rounded" alt="productImage" />
                  <div className="px-3 py-2">
                        <h1 className="lg:text-[18px] text-xs text-gray-700 mb-2 text-center">{product?.title}</h1>
                  </div>
            </div>
      );
};

export default ProductCart;