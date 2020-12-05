const paths = "https://coronavirus-19-api.herokuapp.com/countries";

const headers = {
  method: "get",
  mode: "cors",
  cache: "default",
};

function getCountry(country) {
  return fetch(`${paths}/${country}`, headers)
    .then((response) => response.json())
    .catch(function (err) {
      console.error("Failed retrieving information", err);
    });
}

export default { getCountry };
