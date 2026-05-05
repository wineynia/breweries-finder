const BASE_URL = "https://api.openbrewerydb.org/v1/breweries"

export const getAllBreweries = async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Failed to fetch Breweries");
  return res.json();
};

export const getBreweryById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`)
  if (!res.ok) throw new Error("Failed to fetch Brewery details")
    return res.json()
}