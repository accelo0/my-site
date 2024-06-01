import { useState, useEffect } from "react";

function Body() {
  const [years, setYears] = useState();

  useEffect(() => {
    const calcYears =
      new Date().getFullYear() - new Date("2008-01-27").getFullYear();
    setYears(calcYears);
  }, []);
  return (
    <>
      <div className="relative flex mt-10 justify-center w-fit h-fit">
        {/* Div con opacità 30% */}
        <div className="absolute flex items-end inset-0 rounded-t-xl border-2 border-gray-400 bg-black opacity-30"></div>

        {/* Testo con opacità 100% */}
        <div className="relative content-center max-w-[530px] z-10 text-white text-base font-montserrat font-semibold mx-6 my-8">
          <p>
            Hello! I’m <span className="font-extrabold">Angelo</span>, a {years}
            -year-old guy from <span>Italy</span>, who has a lot of passions,
            especially coding.
          </p>
          <p className="mt-8">
            I have many interests and I’m trying to cultivate all of them. When
            I was younger, I thought coding was my only passion, but not long
            ago, I took a year-long break from coding to focus on my life.
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
            to music. Below, I’ll show you the most recent song I listened to.
          </p>
          <p className="mt-8">
            I don’t have extensive experience in coding, but I know{" "}
            <mark>HTML</mark>, <mark>CSS</mark>, and <mark>JavaScript</mark>{" "}
            well for vanilla web development. I also like working with{" "}
            <mark>Node.js</mark> for both frontend and backend, and I’m
            currently learning some frameworks like <mark>React</mark>. If
            you’re interested in my projects, feel free to check them out here
            (projects link).
          </p>
        </div>
      </div>
    </>
  );
}

export default Body;
