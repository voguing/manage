"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

export const columns: (ColumnDef<any> & {
  width?: number;
})[] = [
  {
    header: "ID",
    accessorKey: "id",
  },
  {
    header: "头像",
    accessorKey: "avatar",
    cell: (props) => {
      const avatar = props.getValue<any>();
      return (
        <Image
          width={30}
          height={30}
          src={avatar}
          alt="avatar"
          style={{
            borderRadius: 4,
          }}
        />
      );
    },
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
