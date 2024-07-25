import { trans } from "@mongez/localization";
import HeadName from "apps/front-office/design-system/components/topSelling/HeadName";
import ProductBox from "apps/front-office/design-system/components/topSelling/ProductBox";
import {
  productImg1,
  productImg10,
  productImg11,
  productImg12,
  productImg2,
  productImg3,
  productImg4,
  productImg5,
  productImg6,
  productImg7,
  productImg8,
  productImg9,
} from "./index";
const SectionTopSelling: React.FC = () => {
  return (
    <section className="container my-24 flex gap-6 flex-wrap md:flex-nowrap">
      <div>
        <div>
          <HeadName headName={trans("headBoxProduct1")} />
        </div>
        <div>
          <ProductBox
            image={productImg1}
            text={trans("textProduct1")}
            priceNow="$32.85"
            priceDelete="$33.8"
          />
          <ProductBox
            image={productImg2}
            text={trans("textProduct2")}
            priceNow="$32.85"
            priceDelete="$33.8"
          />
          <ProductBox
            image={productImg3}
            text={trans("textProduct3")}
            priceNow="$32.85"
            priceDelete="$33.8"
          />
        </div>
      </div>
      <div>
        <div>
          <HeadName headName={trans("headBoxProduct2")} />
        </div>
        <div>
          <ProductBox
            image={productImg4}
            text={trans("textProduct4")}
            priceNow="$32.85"
            priceDelete="$33.8"
          />
          <ProductBox
            image={productImg5}
            text={trans("textProduct5")}
            priceNow="$32.85"
            priceDelete="$33.8"
          />
          <ProductBox
            image={productImg6}
            text={trans("textProduct6")}
            priceNow="$32.85"
            priceDelete="$33.8"
          />
        </div>
      </div>
      <div className="hidden lg:block">
        <div>
          <HeadName headName={trans("headBoxProduct3")} />
        </div>
        <div>
          <ProductBox
            image={productImg7}
            text={trans("textProduct7")}
            priceNow="$32.85"
            priceDelete="$33.8"
          />
          <ProductBox
            image={productImg8}
            text={trans("textProduct8")}
            priceNow="$32.85"
            priceDelete="$33.8"
          />
          <ProductBox
            image={productImg9}
            text={trans("textProduct9")}
            priceNow="$32.85"
            priceDelete="$33.8"
          />
        </div>
      </div>
      <div className="hidden xl:block ">
        <div>
          <HeadName headName={trans("headBoxProduct4")} />
        </div>
        <div>
          <ProductBox
            image={productImg10}
            text={trans("textProduct10")}
            priceNow="$32.85"
            priceDelete="$33.8"
          />
          <ProductBox
            image={productImg11}
            text={trans("textProduct11")}
            priceNow="$32.85"
            priceDelete="$33.8"
          />
          <ProductBox
            image={productImg12}
            text={trans("textProduct12")}
            priceNow="$32.85"
            priceDelete="$33.8"
          />
        </div>
      </div>
    </section>
  );
};
export default SectionTopSelling;
