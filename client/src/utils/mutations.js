import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation updateProduct ($_id: String!, $quantity: Int!, $comments: [String]) {
    updateProduct(_id: $_id, quantity: $quantity, comments:$comments) {
      product
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      
      products {
        _id
        name
        description
        price
        quantity
        comments
        category {
          name
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $address: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      address: $address
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;
