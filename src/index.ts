import { ApolloServer } from 'apollo-server';
import { typeDefs } from './typeDefs.js';
import { resolvers } from './resolvers.js';
import 'dotenv/config';

const PORT = process.env.PORT || 3000;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded'
});

server.listen({ port: +PORT }).then(() => console.log(`🚀  Server ready on the port ${PORT}`));
