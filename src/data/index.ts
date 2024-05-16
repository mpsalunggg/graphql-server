let games = [
  { id: '1', title: 'Zelda: Tears of the Kingdom', platform: ['Switch'] },
  { id: '2', title: 'Final Fantasy VII Remake', platform: ['PS5', 'Xbox'] },
  { id: '3', title: 'Elden Ring', platform: ['PS5', 'Xbox', 'PC'] },
  { id: '4', title: 'Mario Kart Deluxe', platform: ['Switch'] },
  { id: '5', title: 'Pokemon Scarlet', platform: ['PS5', 'Xbox', 'PC'] },
]

let authors = [
  { id: '1', name: 'Mario', verified: true },
  { id: '2', name: 'Yoshi', verified: false },
  { id: '3', name: 'Peach', verified: true },
]

let reviews = [
  {
    id: '1',
    rating: 9,
    content:
      'An epic journey reimagined, Final Fantasy VII Remake brings new life to a beloved classic.',
    author_id: '1',
    game_id: '2',
  },
  {
    id: '2',
    rating: 10,
    content:
      'A masterpiece! Zelda: Tears of the Kingdom is an unforgettable adventure.',
    author_id: '2',
    game_id: '1',
  },
  {
    id: '3',
    rating: 7,
    content:
      'Elden Ring offers a challenging and darkly beautiful world, but may not be for everyone.',
    author_id: '3',
    game_id: '3',
  },
  {
    id: '4',
    rating: 5,
    content:
      'Mario Kart Deluxe feels a bit repetitive, but still offers fun for casual gamers.',
    author_id: '2',
    game_id: '4',
  },
  {
    id: '5',
    rating: 8,
    content:
      'Pokemon Scarlet introduces some fresh ideas, though it struggles with execution on some platforms.',
    author_id: '2',
    game_id: '5',
  },
  {
    id: '6',
    rating: 7,
    content:
      'Final Fantasy VII Remake has great visuals and gameplay, but the story pacing feels off at times.',
    author_id: '1',
    game_id: '2',
  },
  {
    id: '7',
    rating: 10,
    content:
      'Absolutely stunning! Zelda: Tears of the Kingdom is a must-play for all Switch owners.',
    author_id: '3',
    game_id: '1',
  },
]

export default { games, authors, reviews }
