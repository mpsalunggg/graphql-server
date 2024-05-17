import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { authors, games, reviews } from './db/index.js'
import { typeDefs } from './schema/index.js'

const resolvers = {
  Query: {
    games: () => games,
    authors: () => authors,
    reviews: () => reviews,
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
})

console.log('Server ready at port, ', url)
