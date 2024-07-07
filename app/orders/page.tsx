import { PageContainer } from "@/app/page-container";
import { DataTable } from "@/components/ReactTable";
import { Title } from "@/components/Title";
import { server } from "../lib/server";
import { columns } from "./columns";

export const dynamic = "force-dynamic";

const Page = async () => {
  const { data } = await server.orders();

  return (
    <PageContainer current="/orders">
      <Title title="订单管理" />
      <DataTable data={data} columns={columns} />
    </PageContainer>
  );
};

export default Page;
