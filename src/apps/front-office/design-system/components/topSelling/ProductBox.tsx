import { fullRate, halfRate } from "./topSelling";
import PropTypes from 'prop-types';
const ProductBox = ({
  image,
  text,
  priceNow,
  priceDelete,
}) => {
  return (
    <div
      className="group  flex items-center gap-5 mb-7 cursor-pointer relative 
        hover:-translate-y-2 duration-700
       small-to-medium:block small-to-medium:m-auto">
      <div>
        <img
          className="rounded-xl w-32	small-to-medium:w-11/12	"
          src={image}
          alt="not Found"
        />
      </div>
      <div>
        <h6 className="font-medium text-mainColor leading-5 group-hover:text-priceNowColor duration-500">
          {text}
        </h6>
        <div className="hidden xl:flex gap-1">
          <ul className="flex items-center">
            <li>
              <img src={fullRate} alt="not Found" />
            </li>
            <li>
              <img src={fullRate} alt="not Found" />
            </li>
            <li>
              <img src={fullRate} alt="not Found" />
            </li>
            <li>
              <img src={fullRate} alt="not Found" />
            </li>
            <li>
              <img src={halfRate} alt="not Found" />
            </li>
          </ul>
          <span className="text-rateColor">(4.0)</span>
        </div>
        <div className="flex gap-2 mt-1">
          <h3 className="text-lg font-medium text-priceNowColor">{priceNow}</h3>
          <h5 className="text-sm font-medium mt-1 line-through text-priceOldColor">
            {priceDelete}
          </h5>
        </div>
      </div>
    </div>
  );
};
ProductBox.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  priceNow: PropTypes.string.isRequired,
  priceDelete: PropTypes.string.isRequired,
};
export default ProductBox;
