export const mutation = `type Mutation {
createGenre(body: GenreInput): Genre!
}
input GenreInput {
  name: String!
  description: String
  country: String
  year: Int
}`;
