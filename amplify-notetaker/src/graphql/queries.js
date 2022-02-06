/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const searchMarkets = /* GraphQL */ `
  query SearchMarkets(
    $filter: SearchableMarketFilterInput
    $sort: [SearchableMarketSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableMarketAggregationInput]
  ) {
    searchMarkets(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        name
        products {
          nextToken
        }
        tags
        owner
        createdOn
        updatedOn
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getMarket = /* GraphQL */ `
  query GetMarket($id: ID!) {
    getMarket(id: $id) {
      id
      name
      products {
        items {
          id
          marketID
          description
          price
          shipped
          owner
          createdOn
          updatedOn
          marketProductsId
          orderProductsId
        }
        nextToken
      }
      tags
      owner
      createdOn
      updatedOn
    }
  }
`;
export const listMarkets = /* GraphQL */ `
  query ListMarkets(
    $filter: ModelMarketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMarkets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        products {
          nextToken
        }
        tags
        owner
        createdOn
        updatedOn
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      marketID
      description
      market {
        id
        name
        products {
          nextToken
        }
        tags
        owner
        createdOn
        updatedOn
      }
      file {
        bucket
        region
        key
      }
      price
      shipped
      owner
      createdOn
      updatedOn
      marketProductsId
      orderProductsId
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        marketID
        description
        market {
          id
          name
          tags
          owner
          createdOn
          updatedOn
        }
        file {
          bucket
          region
          key
        }
        price
        shipped
        owner
        createdOn
        updatedOn
        marketProductsId
        orderProductsId
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      register
      orders {
        items {
          id
          userID
          createdOn
          updatedOn
          userOrdersId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
