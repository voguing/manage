import {
  Pagination as PaginationComponent,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export type PaginationProps = {
  total?: number;
};

export const Pagination = ({ total }: PaginationProps) => (
  <PaginationComponent>
    <PaginationContent>
      {total !== undefined && (
        <PaginationItem className="mr-2">总共 {total} 条</PaginationItem>
      )}
      <PaginationItem>
        <PaginationPrevious />
      </PaginationItem>
      <PaginationItem>
        {/* className="w-auto px-2" */}
        <PaginationLink>1</PaginationLink>
      </PaginationItem>
      {/* <PaginationItem>
        <PaginationEllipsis />
      </PaginationItem> */}
      <PaginationItem>
        <PaginationNext />
      </PaginationItem>
    </PaginationContent>
  </PaginationComponent>
);
