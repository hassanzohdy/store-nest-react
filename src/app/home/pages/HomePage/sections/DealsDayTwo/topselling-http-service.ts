import { Column, Row } from "app/home/utils/types";
import Module from "module";
import endpoint from "shared/endpoint";

export type TopData = {
  rows: Row[];
  columns: Column[];
  module?: Module[];
};

export async function getTopsellingHttpsList(): Promise<TopData> {
  const response = await endpoint.get("/home?layout=1");
  return {
    rows: response.data.rows,
    columns: response.data.columns,
  };
}
