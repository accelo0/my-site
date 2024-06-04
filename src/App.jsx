import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Links from "./components/Links";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <div className="grid place-items-center">
        <Header />
        <Links />
        <Welcome />
        <Body />
        <footer className=" mb-6 font-lato font-bold opacity-60">
          <p>made with ❤️ and 🎶</p>
        </footer>
      </div>
    </>
  );
}

export default App;
