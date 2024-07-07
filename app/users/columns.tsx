"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Product } from "../types";

export const columns: (ColumnDef<Product> & {
  width?: number;
})[] = [
  {
    header: "ID",
    accessorKey: "id",
  },
  {
    header: "头像",
    accessorKey: "avatar",
  },
  {
    header: "姓名",
    accessorKey: "name",
  },
  {
    header: "用户名",
    accessorKey: "username",
  },
  {
    header: "电话",
    accessorKey: "phone",
  },
  {
    header: "注册时间",
    accessorKey: "createdAt",
  },
  {
    header: "微信ID",
    accessorKey: "openid",
  },
];
