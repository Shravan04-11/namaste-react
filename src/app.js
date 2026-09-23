import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <div className="app">
    <Header />
    <Body />
  </div>
);