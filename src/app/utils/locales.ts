import { extend, groupedTranslations } from "@mongez/localization";
import {
  arValidationTranslation,
  enValidationTranslation,
} from "@mongez/react-form";
import bannersTranslation from "shared/localization/banners.json";
import contactUsTranslation from "shared/localization/contact.json";
import dashboardTraslations from "shared/localization/dashboard.json";
import headerTranslation from "shared/localization/header.json";
import mainTranslation from "shared/localization/index.json";
import loginTranslation from "shared/localization/login.json";
import productsTranslation from "shared/localization/products.json";
import sectionsTranslation from "shared/localization/sections.json";
import TermsAndConditionsTranslation from "shared/localization/terms.json";

// DO NOT IMPORT IT IF THE PROJECT IS NOT LARGE
groupedTranslations(mainTranslation);

extend("en", { validation: enValidationTranslation });
extend("ar", { validation: arValidationTranslation });

// Add only common localization
groupedTranslations({
  home: {
    en: "Home",
    ar: "الرئيسية",
  },
  contactUs: {
    en: "Contact Us",
    ar: "اتصل بنا",
  },
  popularProducts: {
    en: "Popular Products",
    ar: "المنتجات الشائعة",
  },
  allProducts: {
    en: "all products",
    ar: "جميع المنتجات ",
  },
  description: {
    en: "description",
    ar: "الوصف",
  },
  additionalInfo: {
    en: "additional info",
    ar: "معلومات اضافية",
  },
  addReview: {
    en: "Add a review",
    ar: "أضف تعليق",
  },
  yourComment: {
    en: "Your comment",
    ar: "تعليقك",
  },
  submitReview: {
    en: "Submit Review",
    ar: "أضافة تعلبق",
  },
  readMore: {
    en: "Read More",
    ar: "اقرأ المزيد",
  },
  page: {
    en: "Page",
    ar: "صفحة",
  },
  ...productsTranslation,
  ...sectionsTranslation,
  ...bannersTranslation,
  ...headerTranslation,
  ...loginTranslation,
  ...TermsAndConditionsTranslation,
  ...dashboardTraslations,
  ...contactUsTranslation,
});
