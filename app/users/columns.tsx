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
        avatar && (
          <Image
            width={30}
            height={30}
            src={avatar}
            alt="avatar"
            style={{
              borderRadius: 4,
            }}
          />
        )
      );
    },
  },
  {
    header: "电话",
    accessorKey: "phone",
  },
  {
    header: "微信ID",
    accessorKey: "openid",
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
    header: "注册时间",
    accessorKey: "createdAt",
  },
];
