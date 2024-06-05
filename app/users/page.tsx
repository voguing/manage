"use client";

import { PageContainer } from "@/components/PageContainer";
import { QueryTable } from "@/components/QueryTable";

const Page = () => {
  return (
    <PageContainer current="/users">
      <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0 mb-4">
        春日华尔兹
      </h1>
      <QueryTable
        api="users"
        columns={[
          {
            title: "ID",
            dataIndex: "id",
            width: 40,
          },
          {
            title: "姓名",
            dataIndex: "name",
            width: 60,
          },
          {
            title: "用户名",
            dataIndex: "username",
            width: 60,
          },
          {
            title: "电话",
            dataIndex: "phone",
            width: 60,
          },
          {
            title: "注册时间",
            dataIndex: "createdAt",
            valueType: "date",
            width: 60,
          },
          {
            title: "头像",
            dataIndex: "avatar",
            width: 60,
          },
        ]}
      />
    </PageContainer>
  );
};

export default Page;
