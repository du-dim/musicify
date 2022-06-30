import { gql } from 'apollo-server';
import * as schema from '../schemas/_redirectionSchemas.js';

export const typeDefs = gql`
  ${schema.genre}
  ${schema.query}
  ${schema.mutation}
`;
