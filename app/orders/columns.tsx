"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { ColumnDef } from "@tanstack/react-table";
import { Product } from "../types";

export const columns: (ColumnDef<Product> & {
  width?: number;
})[] = [
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
    accessorKey: "user.username",
  },
  {
    header: "商品名称",
    accessorKey: "product.title",
  },
  {
    header: "sku 名称",
    accessorKey: "sku.name",
  },
  {
    header: "创建时间",
    accessorKey: "createdAt",
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
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
