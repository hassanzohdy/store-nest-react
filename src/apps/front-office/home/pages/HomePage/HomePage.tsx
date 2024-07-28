import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import HeroSection from "apps/front-office/design-system/components/Banner/HeroSection";

export default function HomePage() {
  return (
    <>

      <Helmet title={trans("home")} appendAppName={false} />


      <HeroSection />
    </>
  );
}