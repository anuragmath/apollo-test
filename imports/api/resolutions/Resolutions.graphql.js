import gql from 'graphql-tag';

export default `
type Resolution {
  _id: String!
  name: String!
  goals: [Goal]
  completed: Boolean
}

type Query {
  resolutions: [Resolution]
}

type Mutation {
  createResolution(name: String!): Resolution
}
`;
