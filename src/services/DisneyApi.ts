const url = "https://api.disneyapi.dev/graphql";

export const fetchAllCharacters = (query: string) => fetch(url, {
  method: "POST",
  headers: {
    "Content-type": "application/json"
  },
  body: JSON.stringify({ query })
}).then((res) => res.json()).then((res) => res.data.characters.items);


export const fetchCharacter = (query: string) => fetch(url, {
  method: "POST",
  headers: {
    "Content-type": "application/json"
  },
  body: JSON.stringify({ query })
}).then((res) => res.json()).then((res) => res.data.characters.items);
