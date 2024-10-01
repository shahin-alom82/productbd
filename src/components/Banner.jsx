import { banner1 } from "@/asset";
import Image from "next/image";

const Banner = () => {
      return (
            <div>
                  <Image src={banner1} alt="bannerimg" />
            </div>
      );
};

export default Banner;