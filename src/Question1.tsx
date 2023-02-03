import { useState } from "react";
import Button from "./components/Button";

const sendOrder = () => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};

const Question1: React.FC = () => {
  const [orderCount, setOrderCount] = useState<number>(0);
  const [sendCount, setSendCount] = useState<number>(0);

  const handleSendOrder = async () => {
    setSendCount(sendCount + 1);
    sendOrder().then(() => {
      setOrderCount((prev) => prev + 1);
    });
  };

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl">
        Question: Please make order count synced with send count
      </h1>
      <hr />
      <div>Send Count: {sendCount}</div>
      <div>Order Count: {orderCount}</div>
      <Button onClick={handleSendOrder} className="w-32">
        Send Order
      </Button>
    </div>
  );
};

export default Question1;
