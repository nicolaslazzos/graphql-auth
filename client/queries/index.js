import { gql } from "@apollo/client";

export const currentUser = gql`
  {
    user {
      id
      email
    }
  }
`;
