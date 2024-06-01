// import { useState } from "react";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Links from "./components/Links";
import Welcome from "./components/Welcome";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="grid place-items-center">
        <Header />
        <Links />
        <Welcome />
        <Body />
      </div>
    </>
  );
}

export default App;
