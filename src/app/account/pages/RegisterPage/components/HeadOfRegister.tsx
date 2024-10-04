import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { URLS } from "shared/utils";
export default function HeadOfRegister() {
  return (
    <>
      <h1 className="text-5xl font-bold text-[#253D4E] mb-3">
        {trans("headRegister")}
      </h1>
      <p className="mb-7 text-[#7E7E7E] font-medium	">
        {trans("alreadyHaveAccount")}
        <Link
          to={URLS.auth.login}
          className="text-[#3BB77E] font-semibold duration-300 hover:text-[#FDC040] cursor-pointer	">
          {trans("login")}
        </Link>
      </p>
    </>
  );
}
