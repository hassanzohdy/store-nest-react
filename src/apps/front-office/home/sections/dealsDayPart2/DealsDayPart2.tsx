import RecentlyAdded from "./RecentlyAdded";
import TopRated from "./TopRated";
import TopSelling from "./TopSelling";
import TrendingProducts from "./TrendingProducts";

const DealsDayPart2 = () => {
    return (
        <section className="container my-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6  h-[930px] md:h-[450px] small-to-medium:h-[4000px] overflow-hidden ">
            <TopSelling />
            <TrendingProducts />
            <RecentlyAdded />
            <TopRated />
        </section>
    );
};
export default DealsDayPart2;
