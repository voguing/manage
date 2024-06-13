import {
  Card as ShadCard,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import clsx from "clsx";

export type CardProps = {
  title?: React.ReactNode;
  extra?: React.ReactNode;
  children?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  footerClassName?: string;
};

export const Card = (props: CardProps) => {
  const {
    title,
    description,
    extra,
    children,
    footer,
    className,
    footerClassName,
  } = props;

  return (
    <ShadCard className={className}>
      {(title || description) && (
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="grid gap-2">
            {title && <CardTitle>{title}</CardTitle>}
            {description && <CardDescription>{description}</CardDescription>}
          </div>
          <div>{extra}</div>
        </CardHeader>
      )}
      {children && <CardContent>{children}</CardContent>}
      {footer && (
        <CardFooter className={clsx("p-0", footerClassName)}>
          {footer}
        </CardFooter>
      )}
    </ShadCard>
  );
};
