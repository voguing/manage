import {
  MessageCircle,
  Package,
  Package2,
  PanelLeft,
  Settings,
  ShoppingCart,
  Users2,
} from "lucide-react";
import Link from "next/link";

import { Title } from "@/components/Title";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import clsx from "clsx";

const menu = [
  // {
  //   title: "首页",
  //   href: "/",
  //   secendaryLinks: [],
  //   icon: Home,
  // },
  {
    title: "商品列表",
    href: "/products",
    secendaryLinks: [
      {
        title: "发布商品",
        href: "/products/publish",
      },
    ],
    icon: Package,
  },
  {
    title: "订单管理",
    href: "/orders",
    secendaryLinks: [],
    icon: ShoppingCart,
  },
  {
    title: "触达中心",
    href: "/notice",
    secendaryLinks: [],
    icon: MessageCircle,
  },
  {
    title: "用户",
    href: "/users",
    secendaryLinks: [],
    icon: Users2,
  },
  // {
  //   title: "数据",
  //   href: "/analytics",
  //   secendaryLinks: [],
  //   icon: LineChart,
  // },
];

const routeMapper: Record<
  string,
  (typeof menu)[number] & {
    parent?: (typeof menu)[number];
  }
> = menu.reduce((previous, current) => {
  const currentItem: Record<string, any> = {};
  currentItem[current.href] = current;
  current?.secendaryLinks?.forEach((secondaryItem: any) => {
    currentItem[secondaryItem.href] = {
      ...secondaryItem,
      parent: {
        ...current,
      },
    };
  });
  return {
    ...previous,
    ...currentItem,
  };
}, {});

export const PageContainer = ({
  children,
  current,
  title,
  extra,
}: {
  children?: React.ReactNode;
  current: string;
  title?: React.ReactNode;
  extra?: React.ReactNode;
}) => {
  const currentRoute = routeMapper[current];
  const breadcrumbs = currentRoute?.parent ? (
    <Breadcrumb className="mb-2 hidden md:flex">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={currentRoute.parent.href}>
              {currentRoute?.parent?.title}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{currentRoute.title}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ) : null;

  return (
    <TooltipProvider>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
          <nav className="flex flex-col items-center gap-4 px-2 py-4">
            <Link
              href="#"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
            >
              <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
              <span className="sr-only">Acme Inc</span>
            </Link>
            {menu.map(({ href, title, icon: Icon, secendaryLinks }, index) => {
              return (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <Link
                      href={href}
                      className={clsx(
                        "flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8",
                        current === href ||
                          secendaryLinks
                            .map((item) => item.href)
                            .includes(current)
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground"
                      )}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="sr-only">{title}</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">{title}</TooltipContent>
                </Tooltip>
              );
            })}
          </nav>
          <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">设置</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">设置</TooltipContent>
            </Tooltip>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="overflow-hidden rounded-full"
                >
                  {/* <Image
                    src="/placeholder-user.jpg"
                    width={36}
                    height={36}
                    alt="Avatar"
                    className="overflow-hidden rounded-full"
                  /> */}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>我的账号</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>设置</DropdownMenuItem>
                <DropdownMenuItem>关于</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>登出</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </aside>
        <div className="flex flex-col gap-2 sm:gap-0 sm:py-4 sm:pl-14">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="sm:hidden">
                  <PanelLeft className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="sm:max-w-xs">
                <nav className="grid gap-4 text-base font-medium">
                  <Link
                    href="#"
                    className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                  >
                    <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                    <span className="sr-only">Acme Inc</span>
                  </Link>
                  {menu.map(
                    ({ href, title, icon: Icon, secendaryLinks }, index) => {
                      return (
                        <Link
                          key={index}
                          href={href}
                          className={clsx(
                            "flex items-center gap-4 px-2.5",
                            current === href ||
                              secendaryLinks
                                .map((item) => item.href)
                                .includes(current)
                              ? "text-foreground"
                              : "text-muted-foreground hover:text-foreground"
                          )}
                        >
                          <Icon className="h-4 w-4" />
                          {title}
                        </Link>
                      );
                    }
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </header>
          <main
            className={clsx(
              "p-2 sm:px-6 sm:py-0 w-full mx-auto max-w-[59rem] xl:min-w-[59rem]"
            )}
          >
            {breadcrumbs}
            <div>
              <div className="flex gap-4 flex-col">
                {(title || extra) && <Title title={title} extra={extra} />}
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
};
