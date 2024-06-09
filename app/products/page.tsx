// "use client";

// import DataTable from "@/components/DataTable";
// import { PageContainer } from "@/components/PageContainer";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// const Page = () => {
//   return (
//     <PageContainer current="/products">
//       <div className="flex gap-4 flex-col">
//         <div className="flex justify-end">
//           <Link href="/products/publish">
//             <Button size="sm">发布商品</Button>
//           </Link>
//         </div>
//         <DataTable
//           dataSource={[{}, {}]}
//           columns={[
//             { title: "商品名称", dataIndex: "name", render: () => "春游" },
//             { title: "价格", dataIndex: "price", render: () => "100" },
//             { title: "库存", dataIndex: "stock", render: () => "100" },
//             { title: "状态", dataIndex: "status", render: () => "上架" },
//             { title: "操作" },
//           ]}
//         />
//       </div>
//     </PageContainer>
//   );
// };

// export default Page;

import { DataTable } from "@/components/ReactTable";
import { columns } from "./columns";
import { PageContainer } from "@/components/PageContainer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Product, Status } from "../types";

async function getData(): Promise<Product[]> {
  // Fetch data from your API here.
  return [
    {
      id: 1,
      status: Status.DRAFT,
      category: "Ball",
      createdAt: "2024-06-08 11:08",
      skus: [],
      title: "春日华尔兹",
      updatedAt: "2024-06-08 11:10",
      price: "¥ 168.00 ~ 348.00",
      headCount: 200,
      soldCount: 10,
    },
    {
      id: 1,
      status: Status.PUBLISHED,
      category: "Ball",
      createdAt: "2024-06-08 11:08",
      skus: [],
      title: "鱼水之欢",
      updatedAt: "2024-06-08 11:10",
      price: "¥ 168.00 ~ 348.00",
      headCount: 200,
      soldCount: 10,
    },
    {
      id: 1,
      status: Status.ARCHIVED,
      category: "Ball",
      createdAt: "2024-06-08 11:08",
      skus: [],
      title: "Breath on Me",
      updatedAt: "2024-06-08 11:10",
      price: "¥ 168.00 ~ 348.00",
      headCount: 200,
      soldCount: 10,
    },
  ];
}

const Page = async () => {
  const data = await getData();

  return (
    <PageContainer current="/products">
      <div className="flex gap-4 flex-col">
        <div className="flex justify-end">
          <Link href="/products/publish">
            <Button size="sm">发布商品</Button>
          </Link>
        </div>
        {/* <DataTable
          dataSource={[{}, {}]}
          columns={[
          ]}
        /> */}
        <DataTable columns={columns} data={data} rowSelection />
      </div>
    </PageContainer>
  );
};

export default Page;
