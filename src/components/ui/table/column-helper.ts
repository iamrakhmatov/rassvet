import { createColumnHelper as _createColumnHelper } from "@tanstack/react-table";

import * as columns from "./columns";

export function createColumnHelper<T>() {
  return {
    ..._createColumnHelper<T>(),
    columns: {
      text: columns.text<T>(),
    },
  };
}
