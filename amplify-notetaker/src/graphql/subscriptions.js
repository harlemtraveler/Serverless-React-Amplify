/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMarket = /* GraphQL */ `
  subscription OnCreateMarket {
    onCreateMarket {
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
export const onUpdateMarket = /* GraphQL */ `
  subscription OnUpdateMarket {
    onUpdateMarket {
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
export const onDeleteMarket = /* GraphQL */ `
  subscription OnDeleteMarket {
    onDeleteMarket {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($owner: String) {
    onCreateProduct(owner: $owner) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($owner: String) {
    onUpdateProduct(owner: $owner) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($owner: String) {
    onDeleteProduct(owner: $owner) {
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
