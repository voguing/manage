import { Status } from "@/app/types";
import { Badge, BadgeProps } from "@/components/ui/badge";

export type ProductStatusProps = BadgeProps & {
  value?: Status;
};

const mapper = {
  DRAFT: {
    variant: "outline",
    children: "草稿",
  },
  ARCHIVED: {
    variant: "secondary",
    children: "已下架",
  },
  PUBLISHED: {
    variant: "default",
    children: "售卖中",
  },
} as Record<Status, BadgeProps>;

export const ProductStatus = (props: ProductStatusProps) => {
  const { value, ...rest } = props;
  const badgeProps = mapper[value as "DRAFT"];

  return value && <Badge {...badgeProps} {...rest} />;
};
