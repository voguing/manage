import { PageContainer } from "@/app/page-container";
import { DataTable } from "@/components/ReactTable";
import { Title } from "@/components/Title";
import { server } from "../lib/server";
import { columns } from "./columns";

export const dynamic = "force-dynamic";

const Page = async () => {
  const { data } = await server.users();

  return (
    <PageContainer current="/users">
      <Title title="用户列表" />
      <DataTable data={data} columns={columns} />
    </PageContainer>
  );
};

export default Page;
