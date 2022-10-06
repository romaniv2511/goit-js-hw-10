const BASE_URL = "https://restcountries.com"
const searchParams = new URLSearchParams({
  fields: "name,capital,population,flags,languages",
});

export function fetchCountryByName(name) {
    return fetch(`${BASE_URL}/v3.1/name/${name}?${searchParams}`)
        .then((response) => {
            if (!response.ok) {
            throw new Error(response.status);
            }

            return response.json();
        })
}