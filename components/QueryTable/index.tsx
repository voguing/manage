"use client";

import { useEffect } from "react";
import { Card } from "../Card";
import DataTable, { DataTableProps } from "../DataTable";
import { Pagination } from "../Pagination";
import api from "@/lib/api";

export type QueryTableProps = DataTableProps & {
  api: string;
};

export const QueryTable = (props: QueryTableProps) => {
  const { api: apiName, ...rest } = props;
  const { data, isLoading } = api.useSwr(apiName);
  const { data: dataSource, total } = data?.[apiName] || {};

  return (
    <Card>
      <div className="flex flex-col gap-2">
        <DataTable dataSource={dataSource} loading={isLoading} {...rest} />
        <Pagination total={total} />
      </div>
    </Card>
  );
};
