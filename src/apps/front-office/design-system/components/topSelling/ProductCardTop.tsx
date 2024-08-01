import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { productType } from "./types";
const ProductCardTop = ({
  productImageTop,
  productDescription,
  priceNow,
  priceOld,
}: productType) => {
  return (
    <div
      className="flex items-center gap-5 mb-7 cursor-pointer relative 
      group hover:-translate-y-2 duration-700
       small-to-medium:block small-to-medium:m-auto">
      <div>
        <img
          className="rounded-xl w-32	small-to-medium:w-11/12	"
          src={productImageTop}
          alt="not Found"
        />
      </div>
      <div>
        <h6 className="font-medium text-mainColor leading-5 group-hover:text-priceNowColor duration-500">
          {productDescription}
        </h6>
        <div className="hidden xl:flex gap-1">
          <ul className="flex items-center">
            <li>
              <FaStar className="text-starColor" />
            </li>
            <li>
              <FaStar className="text-starColor" />
            </li>
            <li>
              <FaStar className="text-starColor" />
            </li>
            <li>
              <FaStar className="text-starColor" />
            </li>
            <li>
              <FaStarHalfAlt className="text-starColor" />
            </li>
          </ul>
          <span className="text-rateColor">(4.0)</span>
        </div>
        <div className="flex gap-2 mt-1">
          <h3 className="text-lg font-medium text-priceNowColor">{priceNow}</h3>
          <h5 className="text-sm font-medium mt-1 line-through text-priceOldColor">
            {priceOld}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ProductCardTop;
