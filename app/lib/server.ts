import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const GET_PRODUCTS = gql`
  query Query($pageSize: Int, $current: Int) {
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

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export const server = {
  products: () =>
    client
      .query({
        query: GET_PRODUCTS,
      })
      .then(({ data }) => data),
};
