const {
  GraphQLInputObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

inputTaskType = new GraphQLInputObjectType({
  name: 'TaskInput',
  fields: {
    content: { type: GraphQLString },
    date: { type: GraphQLString },
    year: { type: GraphQLInt },
    userId: { type: GraphQLID },
  },
});

exports.inputMovieType = inputTaskType;
