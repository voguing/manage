import { gql, GraphQLClient } from "graphql-request";

export const dynamic = "force-dynamic";

const GET_PRODUCTS = gql`
  query products($pageSize: Int, $current: Int) {
    products(pageSize: $pageSize, current: $current) {
      data {
        id
        title
        description
        image
        stock
        minPrice
        maxPrice
        soldHc
        status
        category
        createdAt
        updatedAt
      }
      total
    }
  }
`;

const GET_ORDERS = gql`
  query Orders {
    orders {
      data {
        id
        orderNo
        paymentNo
        amount
        userId
        createdAt
        skuId
        status
        sku {
          name
          price
          stock
          hc
        }
        product {
          id
          title
          description
          image
          stock
          minPrice
          maxPrice
          soldHc
          status
          category
          createdAt
          updatedAt
        }
        user {
          id
          name
          username
          phone
          avatar
          openid
          createdAt
        }
      }
      total
    }
  }
`;

const GET_USERS = gql`
  query users {
    users {
      data {
        id
        name
        username
        phone
        avatar
        createdAt
        openid
      }
      total
    }
  }
`;

const client = new GraphQLClient(
  "http://localhost:4000/graphql",
  {
    cache: "no-store",
  }
  // {
  // uri: "http://localhost:4000/graphql",
  // cache: new InMemoryCache(),
  // ssrMode: true,
  // defaultOptions: {
  //   watchQuery: {
  //     fetchPolicy: "no-cache", // 对于watchQuery，不使用缓存
  //   },
  //   query: {
  //     fetchPolicy: "no-cache", // 对于query，不使用缓存
  //     errorPolicy: "all",
  //   },
  //   mutate: {
  //     fetchPolicy: "no-cache", // 对于mutate，不使用缓存
  //   },
  // },
  // }
);

const generateQuery = (name: string, query: any) => {
  return () =>
    client
      .request(query)
      .then((data: any) => {
        const result = data?.[name];
        return result;
      })
      .catch((e) => {
        return Promise.reject(e);
      });
  // .catch(() => ({ [name]: { data: [], total: 0 } }));
};

export const server = {
  products: generateQuery("products", GET_PRODUCTS),
  orders: generateQuery("orders", GET_ORDERS),
  users: generateQuery("users", GET_USERS),
};
