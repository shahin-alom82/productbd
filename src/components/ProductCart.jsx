import Link from "next/link";

const ProductCart = ({ product }) => {

      return (
            <div className="border-2 border-gray-300 rounded">
                  <Link href={{ pathname: `/product/${product._id}`, query: {_id: product._id } }}>
                        <img src={product?.image} className="lg:h-64 w-full h-56" alt="productImage" />
                  </Link>
                  <div className="px-2 py-4">
                        <h1 className="lg:text-[18px] text-xs text-gray-700 mb-2 text-center">{product?.title.slice(0, 21)}</h1>
                  </div>
            </div>
      );
};

export default ProductCart;