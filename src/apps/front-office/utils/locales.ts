import { groupedTranslations, trans } from "@mongez/localization";
import mainTranslation from "shared/localization/index.json";
import topSellingTranslation from "shared/localization/topSellingLocal.json";

// DO NOT IMPORT IT IF THE PROJECT IS NOT LARGE
groupedTranslations(mainTranslation);
groupedTranslations(topSellingTranslation);

// useful for Arabic language, if not needed you can remove it
export function the(key: string) {
  return trans("the", { key: trans(key) });
}

// Add only common localization
groupedTranslations({
  // add your common localization here
});
