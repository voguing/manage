import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Spin } from "antd";
import clsx from "clsx";
import dayjs from "dayjs";
import { CSSProperties } from "react";

export type DataTableProps<
  DataType extends Record<any, any> = Record<any, any>
> = {
  dataSource?: Array<DataType>;
  loading?: boolean;
  columns?: Array<{
    title?: string;
    className?: string;
    dataIndex?: string;
    width?: number;
    valueType?: "date";
    render?: (value: any, record: DataType, index: number) => React.ReactNode;
    style?: CSSProperties;
  }>;
};

const DataTable = <DataType extends Record<any, any>>(
  props: DataTableProps<DataType>
) => {
  const { columns = [], dataSource = [], loading } = props;

  const table = (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((column, index) => {
            const {
              className,
              dataIndex,
              render,
              title,
              width,
              style,
              ...rest
            } = column;
            return (
              <TableHead
                key={index}
                className={className}
                {...rest}
                style={{
                  width,
                  ...style,
                }}
              >
                {title}
              </TableHead>
            );
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        {dataSource.map((record, index) => {
          return (
            <TableRow key={index}>
              {columns.map((column, index) => {
                const {
                  dataIndex,
                  render,
                  width,
                  className,
                  valueType,
                  ...rest
                } = column;
                const value = dataIndex ? record[dataIndex] : undefined;
                let renderValue;
                if (valueType === "date" && value) {
                  renderValue = dayjs(value).format("YYYY-MM-DD HH:mm:ss");
                }
                return (
                  <TableCell
                    key={index}
                    className={clsx(className, "min-w-[100px]")}
                    {...rest}
                  >
                    <div>
                      {render
                        ? render(value, record, index)
                        : (renderValue ?? value) || "-"}
                    </div>
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );

  return loading ? (
    <div className="flex items-center justify-center h-24">加载中</div>
  ) : (
    table
  );
};

export default DataTable;
