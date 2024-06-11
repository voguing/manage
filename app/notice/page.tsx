"use client";

import { PageContainer } from "@/components/PageContainer";
import { DataTable } from "@/components/ReactTable";
import { Title } from "@/components/Title";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

const Page = () => {
  return (
    <PageContainer current="/notice">
      <Title title="触达中心" />
      <DataTable
        className="mt-4"
        data={[{}]}
        columns={[
          // paymentNo?: string;
          // amount: number;
          // status: string;
          // user: User;
          // userId: number;
          // createdAt: string;
          // sku: Sku;
          // skuId: number;
          // notificationOrders: NotificationOrder[];
          {
            header: "订单编号",
            accessorKey: "orderNo",
          },
          {
            header: "付款编号",
            accessorKey: "paymentNo",
          },
          {
            header: "订单状态",
            accessorKey: "status",
          },
          {
            header: "用户",
            accessorKey: "userId",
          },
          {
            header: "创建时间",
            accessorKey: "createdAt",
          },
          {
            header: "商品名称",
            // accessorKey: "orderNo",
          },
          {
            header: "sku 名称",
            // accessorKey: "orderNo",
          },
          {
            header: "操作",
            cell: ({ row }) => {
              // const status = row.getValue<Status>("status");

              return (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <span className="sr-only">Open menu</span>
                      <DotsHorizontalIcon className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>操作</DropdownMenuLabel>
                    <DropdownMenuItem>转交</DropdownMenuItem>
                    {/* <DropdownMenuItem>编辑</DropdownMenuItem> */}
                    {/* <DropdownMenuSeparator /> */}
                    {/* <DropdownMenuItem
                      onClick={() =>
                        navigator.clipboard.writeText("payment.id")
                      }
                    >
                      导出参与人
                    </DropdownMenuItem>
                    <DropdownMenuItem>发送通知短信</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>查看购买人</DropdownMenuItem>
                    <DropdownMenuItem>查看付款信息</DropdownMenuItem> */}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            },
          },
        ]}
      />
    </PageContainer>
  );
};

export default Page;
