import { gql } from 'apollo-server';

export const typeMember = gql`
  union Member = Instrument | Artist | YearsActive
  input MemberInput {
    instrument: String
    years: String
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [ID]
    instruments: String
  }
  input MemberInputID {
    id: ID!
    instrument: String
    years: String
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [ID]
    instruments: String
  }
`;
