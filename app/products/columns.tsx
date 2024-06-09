"use client";

import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Product, Status } from "../types";
import { Button } from "@/components/ui/button";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Badge, BadgeProps } from "@/components/ui/badge";

export const columns: ColumnDef<Product>[] = [
  { header: "商品名称", accessorKey: "title" },
  { header: "分类", accessorKey: "category" },
  { header: "库存", accessorKey: "headCount" },
  { header: "已售人数", accessorKey: "soldCount" },
  { header: "价格", accessorKey: "price" },
  {
    header: "状态",
    accessorKey: "status",
    cell({ getValue }) {
      const value = getValue() as Status;
      const mapper = {
        DRAFT: {
          variant: "outline",
          children: "草稿",
        },
        ARCHIVED: {
          variant: "secondary",
          children: "已下架",
        },
        PUBLISHED: {
          variant: "default",
          children: "售卖中",
        },
      } as Record<Status, BadgeProps>;
      const badgeProps = mapper[value as "DRAFT"];
      return <Badge {...badgeProps} />;
    },
  },
  { header: "创建时间", accessorKey: "createdAt" },
  {
    header: "操作",
    cell: ({ row }) => {
      const status = row.getValue<Status>("status");

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
            <DropdownMenuItem>设置库存</DropdownMenuItem>
            <DropdownMenuItem>编辑</DropdownMenuItem>
            <DropdownMenuItem hidden={status !== Status.DRAFT}>
              发布商品
            </DropdownMenuItem>
            <DropdownMenuItem hidden={status !== Status.ARCHIVED}>
              上架
            </DropdownMenuItem>
            <DropdownMenuItem hidden={status !== Status.PUBLISHED}>
              下架
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText("payment.id")}
            >
              导出参与人
            </DropdownMenuItem>
            <DropdownMenuItem>发送通知短信</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>查看购买人</DropdownMenuItem>
            <DropdownMenuItem>查看付款信息</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
