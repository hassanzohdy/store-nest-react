import { trans } from "@mongez/localization";
import { Button } from "apps/front-office/design-system/components/ui/button";

export default function ProductActionsBtns() {
  return (
    <>
      <Button variant="default">
        <i className="bx bx-cart text-xl"></i>
        {trans("addToCart")}
      </Button>
      <Button variant="outline">
        <i className="bx bx-heart text-xl"></i>
      </Button>
      <Button variant="outline">
        <i className="bx bx-transfer-alt text-xl"></i>
      </Button>
    </>
  );
}
