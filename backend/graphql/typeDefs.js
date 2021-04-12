const gql = require("graphql-tag");

module.exports = gql`
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
  }
  input RegisterInput {
    username: String!
    email: String!
    password: String!
    confirmPassword: String!
  }
  input LoginInput {
    email: String!
    password: String!
  }
  type Query {
    getUsers: [User]
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(loginInput: LoginInput): User!
  }
  type UploadedFileResponse{
    filename: String!
    mimetype: String!
    encoding: String!
    url: String!
  }

  type Mutation{
    singleUpload(file: Upload!): UploadedFileResponse!
  }
  
`;
