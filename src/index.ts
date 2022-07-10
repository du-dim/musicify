import { ApolloServer } from 'apollo-server';
import { typeDefs } from './graphql/typeDefs.js';
import { resolvers } from './graphql/resolvers.js';
import 'dotenv/config';

interface IReq {
  req: {
    headers: {
      authorization: string;
    };
  };
}

const PORT = process.env.PORT || 3000;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  context: ({ req }: IReq) => {
    const token = req.headers.authorization || '';
    return { token };
  }
});

server.listen({ port: +PORT }).then(() => console.log(`🚀  Server ready on the port ${PORT}`));
