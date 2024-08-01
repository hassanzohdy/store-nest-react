import ProductCardTop from "apps/front-office/design-system/components/topSelling/ProductCardTop";
import ProductHeadName from "apps/front-office/design-system/components/topSelling/ProductHeadName";
import productImg10 from "assets/productImages/thumbnail-10.jpg";
import productImg11 from "assets/productImages/thumbnail-11.jpg";
import productImg12 from "assets/productImages/thumbnail-12.jpg";
const TopRated = () => {
  return (
    <div>
      <div>
        <ProductHeadName productTitle="Top Rated" />
      </div>
      <div>
        <ProductCardTop
          productImageTop={productImg10}
          productDescription="Nestle Original Coffee-Mate Coffee Creamer"
          priceNow="$32.85"
          priceOld="$33.8"
        />
        <ProductCardTop
          productImageTop={productImg11}
          productDescription="Nestle Original Coffee-Mate Coffee Creamer"
          priceNow="$32.85"
          priceOld="$33.8"
        />
        <ProductCardTop
          productImageTop={productImg12}
          productDescription="Nestle Original Coffee-Mate Coffee Creamer"
          priceNow="$32.85"
          priceOld="$33.8"
        />
      </div>
    </div>
  );
};
export default TopRated;
