import { gql } from 'apollo-server';

export const typeYears = gql`
  type YearsActive {
    years: String
  }
`;
