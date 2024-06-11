import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode } from "react";

export type TitleProps = {
  title?: ReactNode;
  titleAfter?: ReactNode;
  extra?: ReactNode;
  backUrl?: string;
};

export const Title = (props: TitleProps) => {
  const { title, extra, titleAfter, backUrl } = props;
  return (
    <div className="flex items-center gap-4">
      {backUrl && (
        <Link href={backUrl}>
          <Button variant="outline" size="icon" className="h-7 w-7">
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </Link>
      )}
      <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
        {title}
      </h1>
      {titleAfter}
      {extra && (
        <div className="hidden items-center gap-2 md:ml-auto md:flex">
          {extra}
        </div>
      )}
    </div>
  );
};
