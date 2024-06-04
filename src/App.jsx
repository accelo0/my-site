import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import img from "./assets/imgs/pfpImg.jpg";

function App() {
  const [years, setYears] = useState();

  useEffect(() => {
    const calcYears =
      new Date().getFullYear() - new Date("2008-01-27").getFullYear();
    setYears(calcYears);
  }, []);

  return (
    <>
      <div className="grid place-items-center">
        <Header src={img} name="Angelo Pruscino" />

        <div className="relative flex mt-10 mx-8 justify-center w-fit h-fit">
          <div className="absolute flex items-end inset-0 rounded-t-xl bg-teal-950 blur-3xl opacity-45"></div>

          <div className="relative content-center max-w-[630px] z-10 text-white text-base font-montserrat font-semibold mx-6 my-8">
            <p>
              Hello! I’m <span className="font-extrabold">Angelo</span>, a{" "}
              {years}
              -year-old guy from <span>Italy</span>, who has a lot of passions,
              especially coding.
            </p>
            <p className="mt-8">
              I have many interests and I’m trying to cultivate all of them.
              When I was younger, I thought coding was my only passion, but not
              long ago, I took a year-long break from coding to focus on my
              life.
            </p>
            <p className="mt-8">
              During this break, I found out that I’m also interested in{" "}
              <span>design</span>, particularly web design, which I am currently
              engaged in. I really love the design process; I love{" "}
              <span>things that look good and work well</span>, and I appreciate
              the hard work behind the final product we see.
            </p>
            <p className="mt-8">
              In my everyday use, I have my <span>MacBook</span>, my{" "}
              <span>iPhone</span>, and my <span>AirPods</span>, especially my
              AirPods that I can’t live without. I spend a lot of time listening
              to music.
            </p>
            <p className="mt-8">
              I don’t have extensive experience in coding, but I know{" "}
              <mark>HTML</mark>, <mark>CSS</mark>, and <mark>JavaScript</mark>{" "}
              well for vanilla web development. I also like working with{" "}
              <mark>Node.js</mark> for both frontend and backend, and I’m
              currently learning some frameworks like <mark>React</mark>. If
              you’re interested in my projects, feel free to check them out{" "}
              <a
                href="https://github.com/accelo0?tab=repositories"
                className="underline text-green-300 hover:text-green-200"
              >
                <i className="fa-solid fa-share-from-square"></i> here
              </a>
            </p>
          </div>
        </div>

        <footer className=" mb-6 font-lato font-bold opacity-40">
          <p>made with ❤️ and 🎶</p>
        </footer>
      </div>
    </>
  );
}

export default App;
