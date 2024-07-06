import db from '../db'

const resolvers = {
  Query: {
    games: () => db.games,
    game: (_, args) => db.games.find((game) => game.id === args.id),
    authors: () => db.authors,
    author: (_, args) => db.authors.find((author) => author.id === args.id),
    reviews: () => db.reviews,
    review: (_, args) => db.reviews.find((review) => review.id === args.id),
  },
  Game: {
    reviews: (parent) => db.reviews.filter((r) => r.game_id === parent.id),
  },
  Review: {
    author: (parent) => db.authors.find((a) => a.id === parent.author_id),
    game: (parent) => db.games.find((g) => g.id === parent.game_id),
  },
  Author: {
    reviews: (parent) => db.reviews.filter((r) => r.author_id === parent.id),
  },
  Mutation: {
    addGame: (_, args) => {
      let game = {
        ...args.game,
        id: Math.floor(Math.random() * 10000).toString(),
      }
      db.games.push(game)
      return game
    },
    deleteGame: (_, args) => {
      db.games = db.games.filter((g) => g.id !== args.id)
      return db.games
    },
    updateGame: (_, args) => {
      db.games = db.games.map((g) => {
        if (g.id === args.id) {
          return { ...g, ...args.edits }
        }

        return g
      })
      return db.games.find((g) => g.id === args.id)
    },
  },
}

export default resolvers
