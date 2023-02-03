import StockTracker from "./StockTracker";
import { useState } from "react";
import Button from "./components/Button";

const Question3: React.FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl">Stock Price Tracker</h1>

      <div>
        <div>Description</div>
        <p className="text-gray-600">
          When user provide a stock name and click start monitor button,
          subscribe the corresponding stock price changes by subscribing the
          emitted data from StockMonitor class.
        </p>
        <p className="text-gray-600">
          The data will looks like {'{name: "Stock Name", price: "12.30"}'}
        </p>
      </div>
      <div>
        <div>Requirements:</div>
        <ol className="list-decimal list-inside text-gray-600">
          <li>Create a list of cards to display the monitored stock details</li>
          <li>
            Show the stock name and current price with the delta changes from
            the previous price
          </li>
          <li>Display last 5 history prices</li>
          <li>
            Add a button to unsubscribe a monitored stock and remove from the
            list
          </li>
          <li>(Tips) Be aware of memory leak</li>
        </ol>
      </div>

      <hr />

      <StockTrackerPanel />
    </div>
  );
};

const StockTrackerPanel: React.FC = () => {
  const [stockName, setStocknameText] = useState("");
  const startTracking = () => {
    const stockTracker = new StockTracker(stockName);
    stockTracker.on("", () => {});
  };
  const setStockname = (e: any) => {
    setStocknameText(e.target.value);
  };
  return (
    <div className="gap-2">
      <input
        className="inline-block bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 mr-2 w-32 p-2.5"
        placeholder="Stock name"
        onChange={setStockname}
      />
      <Button onClick={startTracking}>Start Tracking</Button>
      <div>
        <div>
          <div>Stock name: {}</div>
          <div>Current Price: {}</div>
          <div>Changes: {}</div>
          <div>History prices: {}</div>
        </div>

        <button className="unsub">Unsubscribe </button>
      </div>
    </div>
  );
};

export default Question3;
