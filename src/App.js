import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Stopwatch from "./components/Stopwatch";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      {/* <Stopwatch/> */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
