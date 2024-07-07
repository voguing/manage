import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

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
  query orders {
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

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
  ssrMode: true,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache", // 对于watchQuery，不使用缓存
    },
    query: {
      fetchPolicy: "no-cache", // 对于query，不使用缓存
    },
    mutate: {
      fetchPolicy: "no-cache", // 对于mutate，不使用缓存
    },
  },
});

const generateQuery = (name: string, query: any) => {
  return () =>
    client
      .query({
        query,
      })
      .then(({ data }) => {
        const result = data?.[name];
        console.log(result.data);
        return result;
      })
      .catch(() => ({ [name]: { data: [], total: 0 } }));
};

export const server = {
  products: generateQuery("products", GET_PRODUCTS),
  orders: generateQuery("orders", GET_ORDERS),
  users: generateQuery("users", GET_USERS),
};
