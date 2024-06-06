"use client";

import DataTable from "@/components/DataTable";
import { PageContainer } from "@/components/PageContainer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  return (
    <PageContainer current="/products">
      <div className="flex gap-4 flex-col">
        <div className="flex justify-end">
          <Link href="/products/publish">
            <Button size="sm">发布商品</Button>
          </Link>
        </div>
        <DataTable
          dataSource={[{}, {}]}
          columns={[
            { title: "商品名称", dataIndex: "name", render: () => "春游" },
            { title: "价格", dataIndex: "price", render: () => "100" },
            { title: "库存", dataIndex: "stock", render: () => "100" },
            { title: "状态", dataIndex: "status", render: () => "上架" },
            { title: "操作" },
          ]}
        />
      </div>
    </PageContainer>
  );
};

export default Page;
