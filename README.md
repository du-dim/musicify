# musicify
Instructions for launching the application:
1. Install microservices (https://github.com/rolling-scopes-school/node-graphql-service)
2. Start the database MongoDB
3. Make sure the MONGO_URL is correct in microservices
4. Start microservices
5. Start appollo server (musicify)
6. Open https://http://localhost:3000/ in the browser
7. Register and get a token
8. When making a request, enter a token in the header
9. Insert the Bearer prefix before the token

Project file system:
src
   |
   |__ index.ts (create apollo server)
   |
   |__ graphql (schemas, types, resolvers)
   |
   |__ services (requests for microservices)
   |
   |__ interfaceTS (typescript interfaces)
   |
   |__ .env (the path of microservices)
