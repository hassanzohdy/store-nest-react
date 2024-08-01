import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { useOnce } from "@mongez/react-hooks";
import { Button } from "apps/front-office/design-system/components/ui/button";
import { products } from "apps/front-office/utils/data";
import { useState } from "react";
import { popularProductsAtom } from "../../atoms/popular-products-atom";
import "./../../../../../main.css";
import PopularProducts from "./components/PopularProducts";
import DailyBestSellsSection from "./sections/DailyBestSellsSection";
import DealsDayPart2 from "./sections/DealsDayPart2/DealsDayPart2";
import FeaturedCategories from "./sections/FeaturedCategories/FeaturedCategories";

export default function HomePage() {
  const [data, setData] = useState<any>(null);

  const fetchData = async () => {
    setData(products);
    popularProductsAtom.change("products", products);
  };

  useOnce(() => {
    fetchData();
  });

  return (
    <>
      <Helmet title={trans("home")} appendAppName={false} />

      <FeaturedCategories />
      <div className="App">
        <DailyBestSellsSection />
      </div>
      {data && <PopularProducts />}
      <Button className="bg-primary-default hover:bg-primary-dark font-custom">
        Welcome Home
      </Button>
      <div>
        <DealsDayPart2 />
      </div>
    </>
  );
}
