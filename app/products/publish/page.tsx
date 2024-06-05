import Image from "next/image";
import { ChevronLeft, PlusCircle, Upload } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
import Link from "next/link";
import { Card } from "@/components/Card";

export default function Dashboard() {
  const title = undefined;
  const cancelButton = (
    <Link href="/products">
      <Button variant="outline" size="sm">
        取消
      </Button>
    </Link>
  );
  const saveButton = <Button size="sm">保存商品</Button>;

  return (
    <PageContainer current="/products/publish" type="publish">
      <div className="grid flex-1 gap-4 auto-rows-max">
        <div className="flex items-center gap-4">
          <Link href="/products">
            <Button variant="outline" size="icon" className="h-7 w-7">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Button>
          </Link>
          <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
            {title || "发布商品"}
          </h1>
          <Badge variant="outline" className="ml-auto sm:ml-0">
            售卖中
          </Badge>
          <div className="hidden items-center gap-2 md:ml-auto md:flex">
            {cancelButton}
            {saveButton}
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
          <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
            <Card
              title="商品详情"
              description="请填写商品的基础信息，所填写的内容会展示在商品的首页。"
            >
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
            </Card>
            <Card
              title="商品分类"
              description="商品分类会影响商品在前台的展示，请确保填写正确。"
            >
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
            </Card>
            <Card
              title="库存"
              description="编辑商品的 SKU 信息，请在填写前确保商品类型已正确填写。"
              footerClassName="justify-center border-t p-4"
              footer={
                <Button size="sm" variant="ghost" className="gap-1">
                  <PlusCircle className="h-3.5 w-3.5" />
                  添加子商品
                </Button>
              }
            >
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
                      <Input id="price-1" type="number" defaultValue="99.99" />
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
                      <Input id="price-2" type="number" defaultValue="99.99" />
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
                      <Input id="price-3" type="number" defaultValue="99.99" />
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
            </Card>
          </div>
          <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
            <Card
              title="商品状态"
              description="展示商品状态，可点击按钮对状态进行修改"
            >
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
            </Card>
            <Card
              title="商品图片"
              description="第一张图会被作为商品主图，剩下的会作为营销图展示"
              className="overflow-hidden"
              x-chunk="dashboard-07-chunk-4"
            >
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
            </Card>
          </div>
        </div>
        <Card className="md:hidden">
          <div className="flex items-center justify-center gap-2">
            {cancelButton}
            {saveButton}
          </div>
        </Card>
      </div>
    </PageContainer>
  );
}
