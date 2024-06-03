import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import clsx from "clsx";

export type DataTableProps<
  DataType extends Record<any, any> = Record<any, any>
> = {
  dataSource?: Array<DataType>;
  columns?: Array<{
    title?: string;
    className?: string;
    dataIndex?: string;
    width?: number;
    render?: (value: any, record: DataType, index: number) => React.ReactNode;
  }>;
};

const DataTable = <DataType extends Record<any, any>>(
  props: DataTableProps<DataType>
) => {
  const { columns = [], dataSource = [] } = props;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((column, index) => {
            const { className, dataIndex, render, title, ...rest } = column;
            return (
              <TableHead key={index} className={className} {...rest}>
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
                const { dataIndex, render, width, className, ...rest } = column;
                const value = dataIndex ? record[dataIndex] : undefined;
                return (
                  <TableCell
                    key={index}
                    className={clsx(className, "min-w-[100px]")}
                    {...rest}
                  >
                    <div style={{ width }}>
                      {render ? render(value, record, index) : value || "-"}
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
};

export default DataTable;
