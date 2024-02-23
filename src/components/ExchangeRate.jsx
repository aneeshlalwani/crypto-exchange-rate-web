import { Typography, Select } from "antd";
import { cryptoCurrencies, fiatCurrencies } from "./currencies/currencies";
import ExchangeRateUI from "./UI/ExchangeRateUI";
import { useState } from "react";

const ExchangeRate = () => {
  const [fromCurrency, setFromCurrency] = useState(cryptoCurrencies[0].value);
  const [toCurrency, setToCurrency] = useState(fiatCurrencies[0].value);

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
