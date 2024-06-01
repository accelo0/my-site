import greetings from "../assets/greetings.json";
import { useState, useEffect } from "react";

function getRandomGreeting() {
  const greetingsList = Object.keys(greetings);
  let randomIndex = Math.floor(Math.random() * greetingsList.length);
  return greetings[greetingsList[randomIndex]];
}

function Welcome() {
  const [greeting, setGreeting] = useState(getRandomGreeting());

  useEffect(() => {
    const interval = setInterval(() => {
      setGreeting(getRandomGreeting());
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* bg-welcomer-bg opacity-30 */}
      <div className=" my-5 py-1 px-2.5 rounded-2xl">
        <p className="font-lato text-3xl">
          {greeting.Hello} {greeting.Flag}
        </p>
      </div>
    </>
  );
}

export default Welcome;
