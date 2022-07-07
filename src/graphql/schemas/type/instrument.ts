import { gql } from 'apollo-server';

export const typeInstrument = gql`
  type Instrument {
    instrument: String
  }
  input InstrumentInput {
    instrument: String
  }
`;
