import { authors, games, reviews } from '../db/index.js'

const resolvers = {
  Query: {
    games: () => games,
    game: (_, args) => games.find((game) => game.id === args.id),
    authors: () => authors,
    author: (_, args) => authors.find((author) => author.id === args.id),
    reviews: () => reviews,
    review: (_, args) => reviews.find((review) => review.id === args.id),
  },
  Game: {
    reviews: (parent) => reviews.filter((r) => r.game_id === parent.id),
  },
  Review: {
    author: (parent) => authors.find((a) => a.id === parent.author_id),
    game: (parent) => games.find((g) => g.id === parent.game_id),
  },
  Author: {
    reviews: (parent) => reviews.filter((r) => r.author_id === parent.id),
  },
}

export default resolvers
