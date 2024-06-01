import Image from "next/image";
import { ChevronLeft, PlusCircle, Upload } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { PageContainer } from "@/components/PageContainer";

export default function Dashboard() {
  return (
    <PageContainer current="/products/publish">
      <div className="grid flex-1 gap-4 auto-rows-max">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" className="h-7 w-7">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Button>
          <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
            春日华尔兹
          </h1>
          <Badge variant="outline" className="ml-auto sm:ml-0">
            售卖中
          </Badge>
          <div className="hidden items-center gap-2 md:ml-auto md:flex">
            <Button variant="outline" size="sm">
              取消
            </Button>
            <Button size="sm">保存商品</Button>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
          <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
            <Card x-chunk="dashboard-07-chunk-0">
              <CardHeader>
                <CardTitle>商品详情</CardTitle>
                <CardDescription>
                  请填写商品的基础信息，所填写的内容会展示在商品的首页。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="name">商品名称</Label>
                    <Input
                      id="name"
                      type="text"
                      className="w-full"
                      placeholder="请输入"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="description">商品描述</Label>
                    <Textarea
                      id="description"
                      className="min-h-32"
                      placeholder="请输入"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-07-chunk-2">
              <CardHeader>
                <CardTitle>商品分类</CardTitle>
                <CardDescription>
                  商品分类会影响商品在前台的展示，请确保填写正确。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 sm:grid-cols-3">
                  <div className="grid gap-3">
                    <Label htmlFor="category">分类</Label>
                    <Select>
                      <SelectTrigger id="category" aria-label="Select category">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="clothing">活动</SelectItem>
                        <SelectItem value="electronics">酒水</SelectItem>
                        <SelectItem value="course">课程</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="subcategory">子分类（可选）</Label>
                    <Select>
                      <SelectTrigger id="subcategory">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="t-shirtsa">Major Ball</SelectItem>
                        <SelectItem value="t-shirts">Kiki Ball</SelectItem>
                        <SelectItem value="sweatshirts">Kiki</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-07-chunk-1">
              <CardHeader>
                <CardTitle>库存</CardTitle>
                <CardDescription>
                  编辑商品的 SKU 信息，请在填写前确保商品类型已正确填写。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">SKU 名称</TableHead>
                      <TableHead>库存</TableHead>
                      <TableHead>价格</TableHead>
                      <TableHead className="w-[100px]">包含人数</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-semibold">早鸟票</TableCell>
                      <TableCell>
                        <Label htmlFor="stock-1" className="sr-only">
                          Stock
                        </Label>
                        <Input id="stock-1" type="number" defaultValue="100" />
                      </TableCell>
                      <TableCell>
                        <Label htmlFor="price-1" className="sr-only">
                          Price
                        </Label>
                        <Input
                          id="price-1"
                          type="number"
                          defaultValue="99.99"
                        />
                      </TableCell>
                      <TableCell>
                        <ToggleGroup
                          type="single"
                          defaultValue="s"
                          variant="outline"
                        >
                          <ToggleGroupItem value="1">1</ToggleGroupItem>
                          <ToggleGroupItem value="2">2</ToggleGroupItem>
                          <ToggleGroupItem value="3">3</ToggleGroupItem>
                        </ToggleGroup>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">单人预约</TableCell>
                      <TableCell>
                        <Label htmlFor="stock-2" className="sr-only">
                          Stock
                        </Label>
                        <Input id="stock-2" type="number" defaultValue="143" />
                      </TableCell>
                      <TableCell>
                        <Label htmlFor="price-2" className="sr-only">
                          Price
                        </Label>
                        <Input
                          id="price-2"
                          type="number"
                          defaultValue="99.99"
                        />
                      </TableCell>
                      <TableCell>
                        <ToggleGroup
                          type="single"
                          defaultValue="m"
                          variant="outline"
                        >
                          <ToggleGroupItem value="1">1</ToggleGroupItem>
                          <ToggleGroupItem value="2">2</ToggleGroupItem>
                          <ToggleGroupItem value="3">3</ToggleGroupItem>
                        </ToggleGroup>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-semibold">双人预约</TableCell>
                      <TableCell>
                        <Label htmlFor="stock-3" className="sr-only">
                          Stock
                        </Label>
                        <Input id="stock-3" type="number" defaultValue="32" />
                      </TableCell>
                      <TableCell>
                        <Label htmlFor="price-3" className="sr-only">
                          Stock
                        </Label>
                        <Input
                          id="price-3"
                          type="number"
                          defaultValue="99.99"
                        />
                      </TableCell>
                      <TableCell>
                        <ToggleGroup
                          type="single"
                          defaultValue="s"
                          variant="outline"
                        >
                          <ToggleGroupItem value="1">1</ToggleGroupItem>
                          <ToggleGroupItem value="2">2</ToggleGroupItem>
                          <ToggleGroupItem value="3">3</ToggleGroupItem>
                        </ToggleGroup>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="justify-center border-t p-4">
                <Button size="sm" variant="ghost" className="gap-1">
                  <PlusCircle className="h-3.5 w-3.5" />
                  添加子商品
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
            <Card x-chunk="dashboard-07-chunk-5">
              <CardHeader>
                <CardTitle>商品状态</CardTitle>
                <CardDescription>
                  展示商品状态，可点击按钮对状态进行修改
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="status">当前状态</Label>
                    <Select disabled>
                      <SelectTrigger id="status">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">草稿态</SelectItem>
                        <SelectItem value="published">在售中</SelectItem>
                        <SelectItem value="archived">已下架</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button size="sm" variant="secondary">
                    下架商品
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
              <CardHeader>
                <CardTitle>商品图片</CardTitle>
                <CardDescription>
                  第一张图会被作为商品主图，剩下的会作为营销图展示
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <Image
                    alt="Product image"
                    className="aspect-square w-full rounded-md object-cover"
                    height="300"
                    src="/placeholder.svg"
                    width="300"
                  />
                  <div className="grid grid-cols-3 gap-2">
                    <button>
                      <Image
                        alt="Product image"
                        className="aspect-square w-full rounded-md object-cover"
                        height="84"
                        src="/placeholder.svg"
                        width="84"
                      />
                    </button>
                    <button>
                      <Image
                        alt="Product image"
                        className="aspect-square w-full rounded-md object-cover"
                        height="84"
                        src="/placeholder.svg"
                        width="84"
                      />
                    </button>
                    <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                      <Upload className="h-4 w-4 text-muted-foreground" />
                      <span className="sr-only">Upload</span>
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 md:hidden">
          <Button variant="outline" size="sm">
            Discard
          </Button>
          <Button size="sm">Save Product</Button>
        </div>
      </div>
    </PageContainer>
  );
}
