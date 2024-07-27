import ProductHeadName from "apps/front-office/design-system/components/topSelling/ProductHeadName";
import ProductCard from "apps/front-office/design-system/components/topSelling/ProductCard";
import productImg10 from "assets/productImages/thumbnail-10.jpg";
import productImg11 from "assets/productImages/thumbnail-11.jpg";
import productImg12 from "assets/productImages/thumbnail-12.jpg";
const TopRated = () => {
    return (
        <div >
            <div>
                <ProductHeadName productTitle="Top Rated" />
            </div>
            <div>
                <ProductCard
                    productImage={productImg10}
                    productDescription="Foster Farms Takeout Crispy Classic Buffalo Wings"
                    priceNow="$32.85"
                    priceOld="$33.8"
                />
                <ProductCard
                    productImage={productImg11}
                    productDescription="Angie's Boomchickapop Sweet &amp; Salty Kettle Corn"
                    priceNow="$32.85"
                    priceOld="$33.8"
                />
                <ProductCard
                    productImage={productImg12}
                    productDescription="All Natural Italian-Style Chicken Meatballs"
                    priceNow="$32.85"
                    priceOld="$33.8"
                />
            </div>
        </div>
    )
}
export default TopRated;