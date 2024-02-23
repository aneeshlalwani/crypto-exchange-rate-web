import { Typography, Card } from "antd";

const ExchangeRateUI = (props) => {
  // eslint-disable-next-line react/prop-types
  const { price, dataObj, currencySymbol } = props;
  // eslint-disable-next-line react/prop-types
  const toCurrency = dataObj.toCurrency;
  let value = Number(price);
  let currencyCode = toCurrency;

  let currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
  });

  let formattedCurrency = currency.format(value);

  return (
    <>
      <div className="exchange-rate-ui">
        <Card
          extra={3}
          bordered={false}
          style={{ width: "350px", backgroundColor: "#4d4add", color: "#FFF" }}
        >
          <Typography.Paragraph style={{ color: "#FFF" }}>
            {formattedCurrency}
          </Typography.Paragraph>
        </Card>
      </div>
    </>
  );
};

export default ExchangeRateUI;
