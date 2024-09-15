import { FunctionComponent } from "react";
import SliderModule from "../components/SliderModule";
import TopProductsModule from "../components/TopProductsModule";
import FeaturedCategories from "../pages/HomePage/sections/FeaturedCategories";
import { Module } from "./types";

type ModulesListMap = Record<string, FunctionComponent<{ module: Module }>>;

export const modulesMap: ModulesListMap = {
  slider: SliderModule,
  categories: FeaturedCategories,
  products: TopProductsModule,
};
