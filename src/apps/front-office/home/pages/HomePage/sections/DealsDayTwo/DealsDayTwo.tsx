import { Column } from "src/apps/front-office/utils/types";
import TopSelling from "./TopSelling";

type DealsDayTwoPropsType = {
  columns: Column[];
};

export default function DealsDayTwo({ columns }: DealsDayTwoPropsType) {
  return (
    <ul className="container my-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {columns.map((column, index) => (
        <li
          key={column.id}
          className={`${index === 3 ? "hidden xl:block" : ""} ${
            index === 2 ? "hidden lg:block" : ""
          }`}>
          <TopSelling moduleName={column.module.name} />
        </li>
      ))}
    </ul>
  );
}
