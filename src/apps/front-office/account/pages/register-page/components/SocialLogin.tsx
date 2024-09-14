import apple from "assets/images/logo-register/logo-apple.svg";
import facebook from "assets/images/logo-register/logo-facebook.svg";
import google from "assets/images/logo-register/logo-google.svg";
import "./../input.css";
export default function SocialLogin() {
  return (
    <div className="hidden lg:block col-span-2 mt-28	ms-5 p-12 w-fit	h-fit rounded-2xl	border border-solid border-[#ececec]">
      <div className="social bg-[#1877F2] text-white mb-5">
        <img src={facebook} alt="notFound" className="me-4" />
        <h2>Continue with Facebook</h2>
      </div>
      <div className="social mb-5 bg-[#fff] text-[#7E7E7E] border border-solid border-[#F2F3F4]">
        <img src={google} alt="notFound" className="me-4" />
        <h2>Continue with Google</h2>
      </div>
      <div className="social bg-[#000000] text-white">
        <img src={apple} alt="notFound" className="me-4" />
        <h2>Continue with Apple</h2>
      </div>
    </div>
  );
}
