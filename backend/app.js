const { ApolloServer } = require("apollo-server");
const connectDB = require("./config/db");
const fs =  require('fs');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers')

 PORT = process.env.PORT || 5002;


const server = new ApolloServer({
  typeDefs,
  resolvers,
});

connectDB()
  .then(() => {
    return server.listen({ port: PORT });
  })
  .then((res) => {
    console.log(`Listening on ${res.url}`);
  });

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
//   next();
// });
