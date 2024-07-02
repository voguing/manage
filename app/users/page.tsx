"use client";

import { PageContainer } from "@/app/page-container";
import { DataTable } from "@/components/ReactTable";
import { Title } from "@/components/Title";
import api from "@/lib/api";
import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    (async () => {
      const data = await api.users();
      console.log(data, "data");
    })();
  }, []);
  return (
    <PageContainer current="/users">
      <Title title="用户列表" />
      <DataTable
        data={[
          {
            id: 1,
            name: "刘海峰",
            username: "leo",
            phone: "13042005339",
            createdAt: "2024-08-08 11:11:12",
          },
        ]}
        columns={[
          {
            header: "ID",
            accessorKey: "id",
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
            header: "头像",
            accessorKey: "avatar",
          },
        ]}
      />
    </PageContainer>
  );
};

export default Page;
