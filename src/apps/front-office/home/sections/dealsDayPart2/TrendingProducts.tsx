import ProductHeadName from "apps/front-office/design-system/components/topSelling/ProductHeadName";
import ProductCard from "apps/front-office/design-system/components/topSelling/ProductCard";
import productImg4 from "assets/productImages/thumbnail-4.jpg";
import productImg5 from "assets/productImages/thumbnail-5.jpg";
import productImg6 from "assets/productImages/thumbnail-6.jpg";
const TrendingProducts = () => {
    return (
        <div >
            <div>
                <ProductHeadName productTitle="Trending Products" />
            </div>
            <div>
                <ProductCard
                    productImage={productImg4}
                    productDescription="Organic Cage-Free Grade A Large Brown Eggs"
                    priceNow="$32.85"
                    priceOld="$33.8"
                />
                <ProductCard
                    productImage={productImg5}
                    productDescription="Seeds of Change Organic Quinoa, Brown, & Red Rice"
                    priceNow="$32.85"
                    priceOld="$33.8"
                />
                <ProductCard
                    productImage={productImg6}
                    productDescription="Naturally Flavored Cinnamon Vanilla Light Roast Coffee"
                    priceNow="$32.85"
                    priceOld="$33.8"
                />
            </div>
        </div>
    )
}
export default TrendingProducts;