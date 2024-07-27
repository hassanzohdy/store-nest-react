import ProductHeadName from "apps/front-office/design-system/components/topSelling/ProductHeadName";
import ProductCard from "apps/front-office/design-system/components/topSelling/ProductCard";
import productImg7 from "assets/productImages/thumbnail-7.jpg";
import productImg8 from "assets/productImages/thumbnail-8.jpg";
import productImg9 from "assets/productImages/thumbnail-9.jpg";

const RecentlyAdded = () => {
    return (

        <div >
            <div >
                <ProductHeadName productTitle="Recently added" />
            </div>
            <div>
                <ProductCard
                    productImage={productImg7}
                    productDescription="Pepperidge Farm Farmhouse Hearty Bread"
                    priceNow="$32.85"
                    priceOld="$33.8"
                />
                <ProductCard
                    productImage={productImg8}
                    productDescription="Organic Frozen Triple Berry Blend"
                    priceNow="$32.85"
                    priceOld="$33.8"
                />
                <ProductCard
                    productImage={productImg9}
                    productDescription="Oroweat Country Buttermilk Bread"
                    priceNow="$32.85"
                    priceOld="$33.8"
                />
            </div>
        </div>
    )
}
export default RecentlyAdded;