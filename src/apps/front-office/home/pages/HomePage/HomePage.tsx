import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import { FaAngleRight, FaShoppingCart } from "react-icons/fa";
import { FcRating } from "react-icons/fc";

export default function HomePage() {
  return (
    <>
      <Helmet title={trans("home")} appendAppName={false} />
      <section className="py-10 pb-5">
        <div className="container mx-auto pr-4 pl-4">
          <div className="flex justify-between items-center p-4 ">
            <h3 className="font-quicksand text-slate-600 leading-tight mr-8 text-2xl font-bold mb-4">
              Deals Of The Day
            </h3>
            <a
              className=" flex items-center justify-center text-base  text-gray-500 transition duration-300  hover:text-teal-500"
              href="#">
              All Deals
              <FaAngleRight className="ml-2 w-5" />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap -m-2">
          <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-6">
            <div className="border-0 pb-12 relative bg-white rounded-2xl overflow-hidden transition duration-200">
              <div className="p-0 relative z-0">
                <div className="relative overflow-hidden rounded-3xl">
                  <a className="overflow-hidden block" href="#">
                    <img src="/public/img/banner-5.png" alt="" />
                  </a>
                </div>
                <div className="absolute top-0 w-full text-center">
                  <div className="flex space-x-4">
                    <span></span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                  </div>
                </div>
              </div>

              <div className="relative mt-[-90px] z-[3] p-0 max-w-[94%] mx-auto transition-top duration-500 hover:mt-[-100px] ">
                <div className="mx-auto bg-white rounded-xl shadow-md pt-6 pb-6 pr-8 pl-7">
                  <h2 className="font-quicksand text-sm font-bold mb-1 transition duration-300 hover:text-teal-500">
                    <a href="#">
                      Seeds of Change Organic Quinoa, Brown, & Red Rice
                    </a>
                  </h2>
                  <div className="mt-2">
                    <div className="flex items-center space-x-0">
                      <div className="h-4 w-6 rounded-md">
                        <FcRating />
                      </div>
                      <span className="text-sm ml-0 text-gray-500">(4.0)</span>
                    </div>
                  </div>
                  <div className="text-base font-normal leading-6 font-lato mt-1">
                    <span className="text-gray-500 pr-1 mt-1">BY</span>
                    <a
                      className="text-teal-500 transition duration-300 hover:text-orange-400"
                      href="#">
                      NestFood
                    </a>
                  </div>
                  <div className="flex justify-between mt-4 font-bold">
                    <div className="pt-1">
                      <span className="text-teal-500 text-lg">$32.85</span>
                      <span className="text-base text-gray-500 ml-2 line-through">
                        $33.8
                      </span>
                    </div>
                    <div>
                      <a
                        className="flex items-center py-1.5 px-5 rounded-md bg-teal-200 font-bold text-base text-teal-500 duration-300 hover:text-white hover:bg-green-600"
                        href="#">
                        <FaShoppingCart className="mr-1" />
                        Add
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-6">
            <div className="border-0 pb-12 relative bg-white rounded-2xl overflow-hidden transition duration-200">
              <div className="p-0 relative z-0">
                <div className="relative overflow-hidden rounded-3xl">
                  <a className="overflow-hidden block" href="#">
                    <img src="public/img/banner-5.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="absolute top-0 w-full text-center">
                <div className="flex space-x-4">
                  <span></span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                </div>
              </div>
              <div className="relative mt-[-90px] z-[3] p-0 max-w-[94%] mx-auto hover:mt-[-100px] transition duration-500">
                <div className="mx-auto bg-white rounded-xl shadow-md pt-6 pb-6 pr-8 pl-7">
                  <h2 className="font-quicksand text-sm font-bold mb-1 transition duration-300 hover:text-teal-500">
                    <a href="#">
                      Seeds of Change Organic Quinoa, Brown, & Red Rice
                    </a>
                  </h2>
                  <div className="mt-2">
                    <div className="flex items-center space-x-0">
                      <div className="h-4 w-6 rounded-md">
                        <FcRating />
                      </div>
                      <span className="text-sm ml-0 text-gray-500">(4.0)</span>
                    </div>
                  </div>
                  <div className="text-base font-normal leading-6 font-lato mt-1">
                    <span className="text-gray-500 pr-1 mt-1">BY</span>
                    <a
                      className="text-teal-500 transition duration-300 hover:text-orange-400"
                      href="#">
                      NestFood
                    </a>
                  </div>
                  <div className="flex justify-between mt-4 font-bold">
                    <div className="pt-1">
                      <span className="text-teal-500 text-lg">$32.85</span>
                      <span className="text-base text-gray-500 ml-2 line-through">
                        $33.8
                      </span>
                    </div>
                    <div>
                      <a
                        className="flex items-center py-1.5 px-5 rounded-md bg-teal-200 font-bold text-base text-teal-500 duration-300 hover:text-white hover:bg-green-600"
                        href="#">
                        <FaShoppingCart className="mr-1" />
                        Add
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
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
