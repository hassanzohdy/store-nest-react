import ProductCardTop from "apps/front-office/design-system/components/topSelling/ProductCardTop";
import ProductHeadName from "apps/front-office/design-system/components/topSelling/ProductHeadName";
import productImg7 from "assets/productImages/thumbnail-7.jpg";
import productImg8 from "assets/productImages/thumbnail-8.jpg";
import productImg9 from "assets/productImages/thumbnail-9.jpg";

const RecentlyAdded = () => {
  return (
    <div>
      <div>
        <ProductHeadName productTitle="Recently added" />
      </div>
      <div>
        <ProductCardTop
          productImageTop={productImg7}
          productDescription="Nestle Original Coffee-Mate Coffee Creamer"
          priceNow="$32.85"
          priceOld="$33.8"
        />
        <ProductCardTop
          productImageTop={productImg8}
          productDescription="Nestle Original Coffee-Mate Coffee Creamer"
          priceNow="$32.85"
          priceOld="$33.8"
        />
        <ProductCardTop
          productImageTop={productImg9}
          productDescription="Nestle Original Coffee-Mate Coffee Creamer"
          priceNow="$32.85"
          priceOld="$33.8"
        />
      </div>
    </div>
  );
};
export default RecentlyAdded;
