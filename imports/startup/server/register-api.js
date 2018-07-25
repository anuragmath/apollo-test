import { createApolloServer} from 'meteor/apollo';
import { makeExecutableSchema} from 'graphql-tools';
import merge from 'lodash/merge';
import ResolutionsSchema from "../../api/resolutions/Resolutions.graphql.js";
import ResolutionResolvers from "../../api/resolutions/resolvers.js";
import UsersSchema from "../../api/users/User.graphql.js";
import UsersResolvers from "../../api/users/resolvers.js";
import GoalsSchema from "../../api/goals/Goal.graphql.js";
import GoalsResolvers from "../../api/goals/resolvers.js";

//hello

const typeDefs = [
    GoalsSchema, ResolutionsSchema, UsersSchema
];


const resolvers = merge(GoalsResolvers, ResolutionResolvers, UsersResolvers);


const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({schema});
