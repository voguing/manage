import { PageContainer } from "@/components/PageContainer";
import { redirect } from "next/navigation";

export default function Dashboard() {
  redirect("/products");

  return <PageContainer current="/">主页</PageContainer>;
}
