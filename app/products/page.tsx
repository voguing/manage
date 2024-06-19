"use client";

import { DataTable } from "@/components/ReactTable";
import { columns } from "./columns";
import { PageContainer } from "@/app/page-container";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Title } from "@/components/Title";
import api from "@/lib/api";
import { useEffect, useState } from "react";

const Page = () => {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    (async () => {
      const { data, total } = await api.getProducts({});
      setData(data);
    })();
  }, []);

  return (
    <PageContainer current="/products">
      <div className="flex gap-4 flex-col">
        <Title
          title="商品列表"
          extra={
            <Link href="/products/publish">
              <Button size="sm">发布商品</Button>
            </Link>
          }
        />
        <DataTable columns={columns} data={data} />
      </div>
    </PageContainer>
  );
};

export default Page;
