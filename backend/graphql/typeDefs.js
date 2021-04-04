const gql = require("graphql-tag");

module.exports = gql`
type User {
  id: ID!
  email: String!
  token: String!
  username: String!
}
input RegisterInput{
    username: String!
    email: String!
    password: String!
    confirmPassword: String!
}
type Query {
  getUsers: [User]
}
type Mutation{
    register(registerInput: RegisterInput): User!
}
`;
