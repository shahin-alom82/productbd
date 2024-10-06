import { twMerge } from "tailwind-merge";

const Priceformate = ({ className, amount }) => {
      const priceFormate = new Number(amount).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2
      })
      return (
            <div className={twMerge("text-gray-700", className)}>
                  {priceFormate}
            </div>
      );
};

export default Priceformate;