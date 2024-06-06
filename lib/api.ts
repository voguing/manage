import { GraphQLClient, gql } from "graphql-request";
import useSwr, { SWRResponse } from "swr";
import { message } from "antd";

const client = new GraphQLClient("http://localhost:4000/graphql");

const request =
  <T = any>(api: string) =>
  async () => {
    const query = gql`
      ${api}
    `;
    try {
      const data = await client.request(query);
      return data as T;
    } catch (error: any) {
      error?.response?.errors?.[0]?.message &&
        message.error(error?.response?.errors?.[0]?.message);
      return null;
    }
  };

const api = {
  request,
  useSwr: (apiKey: string): SWRResponse<any, any, any> => {
    return useSwr(apiKey, (api as any)[apiKey]);
  },
  users: request<any>(`
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
    }`),
};

export default api;
