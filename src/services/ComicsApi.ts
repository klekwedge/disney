const basicUrl = 'https://comicvine.gamespot.com/api'
const API_KEY = import.meta.env.VITE_API_KEY

const ComicsAPIService = () => {
  const getAllCharacers = async () => {
    const data = await fetch('https://api.disneyapi.dev/characters')
    const res = await data.json()
    return res;
  }

  return { getAllCharacers }
}

export default ComicsAPIService
