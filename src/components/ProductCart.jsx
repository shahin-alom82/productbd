import Link from "next/link";

const ProductCart = ({ product }) => {

      return (
            <div className="bg-[#e1e5e8] rounded">
                  <Link href={{ pathname: `/product/${product._id}`, query: {_id: product._id } }}>
                        <img src={product?.image} className="lg:h-64 w-full h-32 lg:px-2 lg:py-2 py-1 px-1 rounded" alt="productImage" />
                  </Link>
                  <div className="px-2 py-2">
                        <h1 className="lg:text-[16px] text-xs text-gray-700 mb-2 text-center">{product?.title.slice(0, 21)}</h1>
                  </div>
            </div>
      );
};

export default ProductCart;