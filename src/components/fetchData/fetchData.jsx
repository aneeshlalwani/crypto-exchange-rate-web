import axios from "axios";

const getExchangeRate = async (fromCurrency, toCurrency) => {
  const options = {
    method: "GET",
    url: "https://alpha-vantage.p.rapidapi.com/query",
    params: {
      from_currency: fromCurrency,
      function: "CURRENCY_EXCHANGE_RATE",
      to_currency: toCurrency,
    },
    headers: {
      "X-RapidAPI-Key": "e4ac2d05cdmsh5498a953d6f1af9p188b0ejsn02bd86f6da5a",
      "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
    },
  };

  return axios
    .request(options)
    .then((response) => {
      // Check if the response contains data
      if (response.data && response.data["Realtime Currency Exchange Rate"]) {
        return response.data;
      } else {
        // If data is missing or not structured as expected, throw an error
        throw new Error("Invalid response from server");
      }
    })
    .catch((error) => {
      // Handle errors
      console.error("Error fetching exchange rate:", error);
      throw error; // Rethrow the error for further handling by the caller
    });
};

export default getExchangeRate;
