export const queryAllCharacers = (page: number, pageSize: number) => `query AllCharacters {
    characters(page: ${page}, pageSize: ${pageSize}) {
      items {
        _id
        url
        name
        sourceUrl
        films
      }
    }
  }`

export const example = `query`
