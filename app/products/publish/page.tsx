"use client";

import { ProductStatus } from "@/app/components/ProductStatus";
import { PageContainer } from "@/app/page-container";
import { Status } from "@/app/types";
import { Card } from "@/components/Card";
import { Title } from "@/components/Title";
import { Button } from "@/components/ui/button";
import api from "@/lib/api";
import {
  EditableProTable,
  ProForm,
  ProFormSelect,
  ProFormText,
  ProFormTextArea,
} from "@ant-design/pro-components";
import { Form, Space, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

// const formSchema = z.object({
//   title: z.string().min(2, {
//     message: "名称至少包含两个汉字",
//   }),
//   description: z.string().optional(),
//   image: z.string().optional(),
//   status: z.nativeEnum(Status),
//   category: z.nativeEnum({ BALL: "BALL" }),
//   skus: z.array(
//     z.object({
//       price: z.string(),
//       stock: z.number(),
//       hc: z.number(),
//       name: z.string(),
//     })
//   ),
// });

export default function Dashboard() {
  const title = undefined;
  const router = useRouter();
  const cancelButton = (
    <Link href="/products">
      <Button variant="outline" size="sm">
        取消
      </Button>
    </Link>
  );
  const saveButton = (
    <Button size="sm" type="submit" onClick={onSubmit}>
      保存商品
    </Button>
  );
  const currentStatus = undefined && Status.DRAFT;
  const [dataSource, setDataSource] = useState<any[]>([]);

  // 2. Define a submit handler.
  async function onSubmit() {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const result = await form.validateFields();
    console.log(result);

    api
      .createProduct(result)
      .then(() => router.push("/products"))
      .then(() => message.success("商品已保存"));
  }
  const [form] = Form.useForm();
  const initiated = useRef(false);
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);

  useEffect(() => {
    if (!initiated.current) {
      initiated.current = true;
      return;
    }

    form.setFieldsValue({
      title: "测试商品名称",
      description: "测试商品描述",
      category: "BALL",
      skus: [
        {
          id: Math.random().toString(36).slice(2),
          stock: 100,
          price: 200,
          hc: 1,
          name: "单人票",
        },
        {
          id: Math.random().toString(36).slice(2),
          stock: 40,
          price: 380,
          hc: 2,
          name: "双人票",
        },
      ],
    });
    setEditableRowKeys(form.getFieldValue("skus").map((item: any) => item.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageContainer current="/products/publish" type="publish">
      <div className="grid flex-1 gap-4 auto-rows-max">
        <Title
          title="发布商品"
          backUrl="/products"
          titleAfter={<ProductStatus value={currentStatus} />}
          extra={
            <>
              {cancelButton}
              {saveButton}
            </>
          }
        />
        <ProForm form={form} submitter={false}>
          <Space direction="vertical" className="w-full" size="middle">
            <Card>
              <ProFormText required label="商品名称" name="title" width="lg" />
              <ProFormTextArea
                required
                label="商品描述"
                name="description"
                width="lg"
                fieldProps={{
                  rows: 4,
                }}
              />
              <ProFormSelect
                required
                width="lg"
                options={[{ label: "BALL", value: "BALL" }]}
                label="商品分类"
                name="category"
              />
            </Card>
            <Card>
              <EditableProTable
                scroll={{ x: true }}
                name="skus"
                rowKey="id"
                recordCreatorProps={{
                  record(index, dataSource) {
                    return {
                      id: Math.random().toString(36).slice(2),
                      stock: 1,
                      price: 1,
                      hc: 1,
                    };
                  },
                }}
                editable={{
                  type: "multiple",
                  editableKeys,
                  onChange(editableKeys) {
                    setEditableRowKeys(editableKeys);
                  },
                  // editableKeys: form
                  //   .getFieldValue("skus")
                  //   ?.map((item: any) => item.id),
                }}
                columns={[
                  {
                    title: "SKU 名称",
                    dataIndex: "name",
                    width: "40%",
                    formItemProps: { required: true },
                  },
                  {
                    title: "库存",
                    dataIndex: "stock",
                    formItemProps: { required: true },
                    valueType: "digit",
                    width: "20%",
                    fieldProps: {
                      style: {
                        width: "100%",
                      },
                    },
                  },
                  {
                    title: "价格",
                    dataIndex: "price",
                    formItemProps: { required: true },
                    valueType: "digit",
                    width: "20%",
                    fieldProps: {
                      style: {
                        width: "100%",
                      },
                    },
                  },
                  {
                    title: "人数",
                    dataIndex: "hc",
                    formItemProps: { required: true },
                    valueType: "digit",
                    width: "20%",
                    fieldProps: {
                      style: {
                        width: "100%",
                      },
                    },
                  },
                ]}
              />
              {/* <ProFormList
                name="skus"
                itemRender={({ action, listDom }) => {
                  return listDom;
                }}
              >
                <Space size="middle">
                  <ProFormText label="SKU 名称" name="name" />
                  <ProFormDigit name="stock" />
                  <ProFormDigit name="price" />
                </Space>
              </ProFormList> */}
            </Card>
          </Space>
        </ProForm>
      </div>
    </PageContainer>
  );
}
