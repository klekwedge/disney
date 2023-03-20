const basicUrl = "https://api.disneyapi.dev";

const DisneyService = () => {
  const getAllCharacers = async () => {
    const data = await fetch(`${basicUrl}/characters`);
    const res = await data.json();
    return res;
  };

  return { getAllCharacers };
};

export default DisneyService;
