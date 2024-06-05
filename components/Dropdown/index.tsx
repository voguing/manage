import { ListFilter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuProps } from "@radix-ui/react-dropdown-menu";
import React from "react";
import clsx from "clsx";

export const Dropdown: React.FC<
  DropdownMenuProps & {
    label?: string;
    filters?: {
      label: React.ReactNode;
      options: { label: string; value: string }[];
    }[];
    className?: string;
  }
> = (props) => {
  const { filters, label, className, ...rest } = props;
  return (
    <DropdownMenu {...rest}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={clsx("h-7 gap-1 text-sm", className)}
        >
          <ListFilter className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only">{label}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {filters?.map((option) => {
          const { label, options } = option;
          return (
            <>
              <DropdownMenuLabel>{label}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {options.map(({ label, value }) => {
                return (
                  <DropdownMenuCheckboxItem key={value} checked>
                    {label}
                  </DropdownMenuCheckboxItem>
                );
              })}
              {/* <DropdownMenuCheckboxItem checked>
                已完成
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>已取消</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>已退款</DropdownMenuCheckboxItem> */}
            </>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
