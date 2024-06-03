"use client";

import { Card } from "../Card";
import DataTable, { DataTableProps } from "../DataTable";
import { Pagination } from "../Pagination";

export type QueryTableProps = DataTableProps & {};

export const QueryTable = (props: QueryTableProps) => {
  const { ...rest } = props;
  return (
    <Card>
      <div className="flex flex-col gap-2">
        <DataTable {...rest} />
        <Pagination />
      </div>
    </Card>
  );
};
