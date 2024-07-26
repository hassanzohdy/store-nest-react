import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import DealList from "../../../design-system/components/ui/DealsOfTheDay/DealList";
import Header from "../../../design-system/components/ui/DealsOfTheDay/Header";
import SectionWrapper from "../../../design-system/components/ui/DealsOfTheDay/SectionWrapper";

export default function HomePage() {
  const deals = [
    {
      imageSrc: "/img/banner-5.png",
      title: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
      rating: "4.0",
      by: "NestFood",
      price: "32.85",
      oldPrice: "33.8",
      timeCards: [
        { time: "2", type: "Days" },
        { time: "14", type: "Hours" },
        { time: "20", type: "Mins" },
        { time: "30", type: "Secs" },
      ],
    },
    {
      imageSrc: "/img/banner-6.png",
      title: "Perdue Simply Smart Organics Gluten Free",
      rating: "4.5",
      by: "Old El Paso",
      price: "24.85",
      oldPrice: "26.8",
      timeCards: [
        { time: "1", type: "Days" },
        { time: "10", type: "Hours" },
        { time: "30", type: "Mins" },
        { time: "45", type: "Secs" },
      ],
    },
    {
      imageSrc: "/img/banner-7.png",
      title: "Signature Wood-Fired Mushroom and Caramelized",
      rating: "3.0",
      by: "Progresso",
      price: "12.85",
      oldPrice: "13.8",
      timeCards: [
        { time: "3", type: "Days" },
        { time: "6", type: "Hours" },
        { time: "45", type: "Mins" },
        { time: "50", type: "Secs" },
      ],
    },
    {
      imageSrc: "/img/banner-8.png",
      title: "Simply Lemonade with Raspberry Juice",
      rating: "3.0",
      by: "Yoplait",
      price: "15.85",
      oldPrice: "16.8",
      timeCards: [
        { time: "0", type: "Days" },
        { time: "8", type: "Hours" },
        { time: "50", type: "Mins" },
        { time: "10", type: "Secs" },
      ],
    },
  ];

  return (
    <>
      <Helmet title={trans("home")} appendAppName={false} />
      <SectionWrapper>
        <Header title="Deals Of The Day" linkText="All Deals" linkHref="#" />
        <DealList deals={deals} />
      </SectionWrapper>
    </>
  );
}

{
  /* <section className="py-12 pb-5">
        <div className="container  mx-auto">
          <div className="flex justify-between items-center p-4 ">
            <h3 className="font-quicksand text-slate-700 leading-tight mr-8 text-2xl font-bold mb-4">
              Deals Of The Day
            </h3>
            <a
              className="flex items-center justify-center text-base text-gray-500 hover:text-teal-500"
              href="#">
              All Deals
              <FaAngleRight />
            </a>
          </div> 
          <div className="flex flex-wrap -m-4">
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-6">
              <div className="mx-auto bg-white p-6 rounded-lg overflow-hidden shadow-lg">
                <div className="product-img-action-wrap">
                  <div className="product-img">
                    <a href="#">
                      <img src="#" alt="" />
                    </a>
                  </div>
                </div> 
                <div className="product-content-wrap">
                  <div className="deals-countdown-wrap">
                    <div
                      className="deals-countdown"
                      data-countdown="2025/03/25 00:00:00">
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">242</span>
                        <span className="countdown-period"> days </span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">07</span>
                        <span className="countdown-period"> hours </span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">53</span>
                        <span className="countdown-period"> mins </span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">36</span>
                        <span className="countdown-period"> sec </span>
                      </span>
                    </div>
                  </div>
                  <div className="deals-content">
                    <h2>
                      <a href="#">
                        Seeds of Change Organic Quinoa, Brown, &amp; Red Rice
                      </a>
                    </h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div className="product-rating"></div>
                      </div>
                      <span className="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div>
                      <span className="font-small text-muted">
                        By <a href="#">NestFood</a>
                      </span>
                    </div>
                    <div className="product-card-bottom">
                      <div className="product-price">
                        <span>$32.85</span>
                        <span className="old-price">$33.8</span>
                      </div>
                      <div className="add-cart">
                        <a className="add" href="#">
                          <i className="fi-rs-shopping-cart mr-5"></i>Add{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-6">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="product-img-action-wrap">
                  <div className="product-img">
                    <a href="/shop-product-right">
                      <img src="" alt="" />
                    </a>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="deals-countdown-wrap">
                    <div
                      className="deals-countdown"
                      data-countdown="2026/04/25 00:00:00">
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">638</span>
                        <span className="countdown-period"> days </span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">06</span>
                        <span className="countdown-period"> hours </span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">53</span>
                        <span className="countdown-period"> mins </span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">36</span>
                        <span className="countdown-period"> sec </span>
                      </span>
                    </div>
                  </div>
                  <div className="deals-content">
                    <h2>
                      <a href="/shop-product-right">
                        Perdue Simply Smart Organics Gluten Free
                      </a>
                    </h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div className="product-rating"></div>
                      </div>
                      <span className="font-small ml-5 text-muted"> (4.0)</span>
                    </div>
                    <div>
                      <span className="font-small text-muted">
                        By <a href="/vendor-details-1">Old El Paso</a>
                      </span>
                    </div>
                    <div className="product-card-bottom">
                      <div className="product-price">
                        <span>$24.85</span>
                        <span className="old-price">$26.8</span>
                      </div>
                      <div className="add-cart">
                        <a className="add" href="/shop-cart">
                          <i className="fi-rs-shopping-cart mr-5"></i>Add{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
            <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
              <div
                className="product-cart-wrap style-2 wow animate__ animate__fadeInUp"
                data-wow-delay=".2s">
                <div className="product-img-action-wrap">
                  <div className="product-img">
                    <a href="/shop-product-right">
                      <img src="" alt="" />
                    </a>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="deals-countdown-wrap">
                    <div
                      className="deals-countdown"
                      data-countdown="2027/03/25 00:00:00">
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">972</span>
                        <span className="countdown-period"> days </span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">07</span>
                        <span className="countdown-period"> hours </span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">53</span>
                        <span className="countdown-period"> mins </span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">36</span>
                        <span className="countdown-period"> sec </span>
                      </span>
                    </div>
                  </div>
                  <div className="deals-content">
                    <h2>
                      <a href="/shop-product-right">
                        Signature Wood-Fired Mushroom and Caramelized
                      </a>
                    </h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div className="product-rating"></div>
                      </div>
                      <span className="font-small ml-5 text-muted"> (3.0)</span>
                    </div>
                    <div>
                      <span className="font-small text-muted">
                        By <a href="/vendor-details-1">Progresso</a>
                      </span>
                    </div>
                    <div className="product-card-bottom">
                      <div className="product-price">
                        <span>$12.85</span>
                        <span className="old-price">$13.8</span>
                      </div>
                      <div className="add-cart">
                        <a className="add" href="/shop-cart">
                          <i className="fi-rs-shopping-cart mr-5"></i>Add{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
            <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
              <div
                className="product-cart-wrap style-2 wow animate__ animate__fadeInUp"
                data-wow-delay=".3s">
                <div className="product-img-action-wrap">
                  <div className="product-img">
                    <a href="/shop-product-right">
                      <img src="" alt="" />
                    </a>
                  </div>
                </div>
                <div className="product-content-wrap">
                  <div className="deals-countdown-wrap">
                    <div
                      className="deals-countdown"
                      data-countdown="2025/02/25 00:00:00">
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">214</span>
                        <span className="countdown-period"> days </span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">07</span>
                        <span className="countdown-period"> hours </span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">53</span>
                        <span className="countdown-period"> mins </span>
                      </span>
                      <span className="countdown-section">
                        <span className="countdown-amount hover-up">36</span>
                        <span className="countdown-period"> sec </span>
                      </span>
                    </div>
                  </div>
                  <div className="deals-content">
                    <h2>
                      <a href="/shop-product-right">
                        Simply Lemonade with Raspberry Juice
                      </a>
                    </h2>
                    <div className="product-rate-cover">
                      <div className="product-rate d-inline-block">
                        <div className="product-rating"></div>
                      </div>
                      <span className="font-small ml-5 text-muted"> (3.0)</span>
                    </div>
                    <div>
                      <span className="font-small text-muted">
                        By <a href="/vendor-details-1">Yoplait</a>
                      </span>
                    </div>
                    <div className="product-card-bottom">
                      <div className="product-price">
                        <span>$15.85</span>
                        <span className="old-price">$16.8</span>
                      </div>
                      <div className="add-cart">
                        <a className="add" href="/shop-cart">
                          <i className="fi-rs-shopping-cart mr-5"></i>Add{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </div>
        </div>
      </section>
    </>
  );
} */
}
