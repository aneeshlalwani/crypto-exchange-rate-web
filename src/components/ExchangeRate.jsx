import { Typography, Select } from "antd";
import { cryptoCurrencies, fiatCurrencies } from "./currencies/currencies";
import ExchangeRateUI from "./UI/ExchangeRateUI";
const ExchangeRate = () => {
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
          ></Select>
          <Select
            defaultValue={fiatCurrencies[0].value}
            options={fiatCurrencies}
          ></Select>
        </section>
        <section
          style={{
            marginTop: "1rem",
          }}
        >
          <ExchangeRateUI />
        </section>
      </section>
    </>
  );
};

export default ExchangeRate;
