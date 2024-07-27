import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import "./../../../../../main.css";
import DealsDayPart2 from "./../../sections/dealsDayPart2/DealsDayPart2";
export default function HomePage() {
  return (
    <>
      <Helmet title={trans("home")} appendAppName={false} />
      <div>
        <DealsDayPart2 />
      </div>
    </>
  );
}
