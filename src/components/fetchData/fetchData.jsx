import axios from "axios";

const getExchangeRate = (fromCurrency, toCurrency) => {
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
    .then((response) => response.data)
    .catch((error) => error.message);
};

export default getExchangeRate;
