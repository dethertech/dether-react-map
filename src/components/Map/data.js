import { v4 as uuid } from 'uuid'

const fakeShops = [
  {
    latitude: 49.49566912821755,
    longitude: 0.10971330611162357,
    id: uuid()
  },
  {
    latitude: 49.51418412622594,
    longitude: 0.11297539641217405,
    id: uuid()
  },

  {
    latitude: 48.866574540556975,
    longitude: 2.3523459637031747,
    id: uuid()
  },
  {
    latitude: 48.86928458043297,
    longitude: 2.284539039787792,
    id: uuid()
  },
  {
    latitude: 48.88599324983083,
    longitude: 2.362474086515303,
    id: uuid()
  }
]

const fakeComments = [
  {
    rating: 4,
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sint doloribus cumque iusto. Dolore, fugit!Eveniet sint doloribus cumque iusto. Dolore, fugit!',
    id: uuid()
  },
  {
    rating: 3,
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sint doloribus cumque iusto. Dolore, fugit!',
    id: uuid()
  },
  {
    rating: 5,
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sint doloribus cumque iusto. Dolore, fugit!',
    id: uuid()
  }
]

export { fakeComments, fakeShops }
