import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import SectionTopSelling from "../../sections/SectionTopSelling/SectionTopSelling";
import "./../../../../../main.css";
export default function HomePage() {
  return (
    <>
      <Helmet title={trans("home")} appendAppName={false} />
      <div>
        <SectionTopSelling />
      </div>
    </>
  );
}
