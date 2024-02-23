import { Typography, Card } from "antd";

const ExchangeRateUI = () => {
  return (
    <>
      <div className="exchange-rate-ui">
        <Card
          extra={3}
          bordered={false}
          style={{ width: "350px", backgroundColor: "#4d4add", color: "#FFF" }}
        >
          <Typography.Paragraph style={{ color: "#FFF" }}>
            Bitcoin
          </Typography.Paragraph>
        </Card>
      </div>
    </>
  );
};

export default ExchangeRateUI;
