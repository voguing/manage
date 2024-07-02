import { server } from "../lib/server";

import { PageContainer } from "@/app/page-container";
import { DataTable } from "@/components/ReactTable";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { columns } from "./columns";

const Page = async () => {
  const {
    products: { data },
  } = await server.products();
  return (
    <PageContainer
      current="/products"
      title="商品列表"
      extra={
        <Link href="/products/publish">
          <Button size="sm">发布商品</Button>
        </Link>
      }
    >
      <DataTable columns={columns} data={data} />
    </PageContainer>
  );
  // const [data, setData] = useState<any[]>([]);
  // useEffect(() => {
  //   (async () => {
  //     const { data, total } = await api.products({});
  //     setData(data);
  //     console.log(data, total, data);
  //   })();
  // }, []);

  // return (

  // );
};

export default Page;
