import { GraphQLClient, gql } from "graphql-request";
const useSwr = require("swr");
import { SWRResponse } from "swr";
import { message } from "antd";

const request =
  <T = any, P extends any = any>(api: string) =>
  async (variables?: P) => {
    const client = new GraphQLClient(`${location.origin}/graphql`);
    const query = gql`
      ${api}
    `;
    try {
      const data = await client.request(query, variables as any);
      return data as T;
    } catch (error: any) {
      error?.response?.errors?.[0]?.message &&
        message.error(error?.response?.errors?.[0]?.message);
      throw new Error(error?.response?.errors?.[0]?.message);
    }
  };

const query =
  <T = any>(name: string, sql: string) =>
  async (variables?: any): Promise<T> => {
    return (await request<any>(sql)(variables))[name];
  };

const api = {
  request,
  useSwr: (apiKey: string): SWRResponse<any, any, any> => {
    return useSwr(apiKey, (api as any)[apiKey]);
  },
  createProduct: request<any>(`
    mutation CreateProduct($data: ProductCreateInput!) {
      createProduct(data: $data) {
        id
        title
        description
        image
        status
        category
        createdAt
        updatedAt
      }
    }`),
  users: query<any>(
    "users",
    `
    query {
      users {
        data {
          id
          name
          username
          createdAt
          phone
          avatar
        }
        total
      }
    }`
  ),
  createUser: request<any>(`
    mutation Mutation($data: UserCreateInput!) {
      signupUser(data: $data) {
        id
        name
        username
        phone
        avatar
        createdAt
      }
    }`),
  getProducts: query<any>(
    "getProducts",
    `query Query($pageSize: Int, $current: Int) {
  getProducts(pageSize: $pageSize, current: $current) {
    data {
      id
      title
      description
      image
      status
      category
      createdAt
      updatedAt
    }
    total
  }
}`
  ),
};

export default api;
