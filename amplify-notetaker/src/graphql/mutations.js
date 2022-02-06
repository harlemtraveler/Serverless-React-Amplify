/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMarket = /* GraphQL */ `
  mutation CreateMarket(
    $input: CreateMarketInput!
    $condition: ModelMarketConditionInput
  ) {
    createMarket(input: $input, condition: $condition) {
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
export const updateMarket = /* GraphQL */ `
  mutation UpdateMarket(
    $input: UpdateMarketInput!
    $condition: ModelMarketConditionInput
  ) {
    updateMarket(input: $input, condition: $condition) {
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
export const deleteMarket = /* GraphQL */ `
  mutation DeleteMarket(
    $input: DeleteMarketInput!
    $condition: ModelMarketConditionInput
  ) {
    deleteMarket(input: $input, condition: $condition) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const registerUser = /* GraphQL */ `
  mutation RegisterUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    registerUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      userID
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
      user {
        id
        username
        email
        register
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      shippingAddress {
        city
        country
        address_line1
        address_line2
        address_state
        address_zip
      }
      createdOn
      updatedOn
      userOrdersId
    }
  }
`;
