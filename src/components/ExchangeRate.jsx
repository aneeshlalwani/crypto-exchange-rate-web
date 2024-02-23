import { Typography, Select } from "antd";
import { cryptoCurrencies, fiatCurrencies } from "./currencies/currencies";
import ExchangeRateUI from "./UI/ExchangeRateUI";
import { useState } from "react";
import { useQuery } from "react-query";
import { fetchData } from "./fetchData/fetchData.jsx";
import getExchangeRate from "./fetchData/fetchData";

const ExchangeRate = () => {
  const [fromCurrency, setFromCurrency] = useState(cryptoCurrencies[0].value);
  const [toCurrency, setToCurrency] = useState(fiatCurrencies[0].value);

  const dependencies = {
    fromCurrency: fromCurrency,
    toCurrency: toCurrency,
  };
  /* Using useQuery hook to fetch the exchange rate data with specified parameters
     The useQuery hook returns an object with many properties, but I have used those properties
    that are of interest:
        data: holds the fetched data.
        isLoading: indicates if the data is still being fetched.
        isError: indicates if an error occurred during fetching.
        error: contains the error details if there's an issue. 
*/
  // destructuring object returned by hook
  const { data, isLoading, isError, error } = useQuery({
    // defining a unique identifier for the query
    queryKey: ["exchangeRate", dependencies],
    /* fetchData function to retrieve the exchange rate between fromCurrency and toCurrency. */
    queryFn: () => fetchData(fromCurrency, toCurrency),
    //    This tells react-query to consider the data fresh for 1 minute after it's initially fetched.
    staleTime: 1000 * 60,
    retry: 1,
    retryDelay: 6000,
  });
  function handleFromCurrencyChange(e) {
    setFromCurrency(e);
    console.log(e);
  }
  function handleToCurrencyChange(e) {
    setToCurrency(e);
    console.log(e);
  }
  return (
    <>
      <section className="exchange-rate">
        <Typography.Title style={{ color: "#4d4add" }} level={2}>
          Exchange Rate
        </Typography.Title>
        <Typography.Text>
          Get the latest exchange rate of cryptocurrencies in your favorite
          currency
        </Typography.Text>
        <section
          className="select-group"
          style={{
            display: "flex",
            marginTop: "1rem",
            gap: "1rem",
            justifyContent: "space-around",
          }}
        >
          <Select
            defaultValue={cryptoCurrencies[0].value}
            options={cryptoCurrencies}
            onChange={() => handleFromCurrencyChange()}
          />
          <Select
            defaultValue={fiatCurrencies[0].value}
            options={fiatCurrencies}
            onChange={() => handleToCurrencyChange()}
          />
        </section>
        <section
          style={{
            marginTop: "5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ExchangeRateUI />
        </section>
      </section>
    </>
  );
};

export default ExchangeRate;
