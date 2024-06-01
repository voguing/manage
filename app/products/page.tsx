import { PageContainer } from "@/components/PageContainer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
  return (
    <PageContainer current="/products">
      <Link href="/products/publish">
        <Button size="sm">发布商品</Button>
      </Link>
    </PageContainer>
  );
};

export default Page;
