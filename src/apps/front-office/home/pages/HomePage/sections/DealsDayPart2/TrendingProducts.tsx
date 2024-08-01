import ProductCardTop from "apps/front-office/design-system/components/topSelling/ProductCardTop";
import ProductHeadName from "apps/front-office/design-system/components/topSelling/ProductHeadName";
import productImg4 from "assets/productImages/thumbnail-4.jpg";
import productImg5 from "assets/productImages/thumbnail-5.jpg";
import productImg6 from "assets/productImages/thumbnail-6.jpg";
const TrendingProducts = () => {
  return (
    <div>
      <div>
        <ProductHeadName productTitle="Trending Products" />
      </div>
      <div>
        <ProductCardTop
          productImageTop={productImg4}
          productDescription="Nestle Original Coffee-Mate Coffee Creamer"
          priceNow="$32.85"
          priceOld="$33.8"
        />
        <ProductCardTop
          productImageTop={productImg5}
          productDescription="Nestle Original Coffee-Mate Coffee Creamer"
          priceNow="$32.85"
          priceOld="$33.8"
        />
        <ProductCardTop
          productImageTop={productImg6}
          productDescription="Nestle Original Coffee-Mate Coffee Creamer"
          priceNow="$32.85"
          priceOld="$33.8"
        />
      </div>
    </div>
  );
};
export default TrendingProducts;
