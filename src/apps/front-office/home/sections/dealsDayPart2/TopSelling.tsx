import ProductHeadName from "apps/front-office/design-system/components/topSelling/ProductHeadName";
import ProductCard from "apps/front-office/design-system/components/topSelling/ProductCard";
import productImg1 from "assets/productImages/thumbnail-1.jpg";
import productImg2 from "assets/productImages/thumbnail-2.jpg";
import productImg3 from "assets/productImages/thumbnail-3.jpg";
const TopSelling = () => {
    return (
        <div >
            <div>
                <ProductHeadName productTitle="Top Selling" />
            </div>
            <div>
                <ProductCard
                    productImage={productImg1}
                    productDescription="Nestle Original Coffee-Mate Coffee Creamer"
                    priceNow="$32.85"
                    priceOld="$33.8"
                />
                <ProductCard
                    productImage={productImg2}
                    productDescription="Nestle Original Coffee-Mate Coffee Creamer"
                    priceNow="$32.85"
                    priceOld="$33.8"
                />
                <ProductCard
                    productImage={productImg3}
                    productDescription="Nestle Original Coffee-Mate Coffee Creamer"
                    priceNow="$32.85"
                    priceOld="$33.8"
                />
            </div>
        </div>
    )
}
export default TopSelling;