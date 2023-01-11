import Cards from "./components/Cards";
import Header from "./components/Header";
import { Puff } from "react-loader-spinner";
import Navigation from "./components/Navigation";
import * as data from "emoji-api";
import { useEffect, useState } from "react";

// const emoji = data.all();
const categories = Object.keys(data.arrange());

function App() {
  const [theme, setTheme] = useState("light");
  const [emoji, setEmoji] = useState(data.all());

  useEffect(() => {
    const checkTheme = localStorage.getItem("theme");
    if (checkTheme) {
      setTheme(checkTheme);
    }
  }, [emoji, theme]);

  const handleCategory = (category) => {
    if (category === "all") {
      setEmoji(data.all());
      return;
    }
    setEmoji(data.arrange()[category]);
  };

  const handleClick = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  };

  const handleSearch = (keyword) => {
    if (keyword !== null) {
      const term = keyword.toUpperCase().trim();

      const filteredData = data
        .all()
        .filter((d) => d.name.toUpperCase().includes(term));

      setEmoji(filteredData);
    }
  };

  return (
    <div
      className={` min-w-full min-h-screen	 ${theme} m-auto dark:bg-black  ${
        theme === "dark" ? "bg-black" : "bg-white"
      }`}
    >
      <div className={`App max-w-screen-lg  m-auto  `}>
        <Header toggleTheme={handleClick} searchEmoji={handleSearch} />

        <Navigation categories={categories} changeCategory={handleCategory} />

        <Cards emoji={emoji} />

        {emoji.length === 0 && (
          <div className="  min-h-screen flex flex-row justify-center my-10 mx-auto text-black bg-white dark:text-white dark:bg-black">
            <p>No emojis found! ❌ </p>
            <p> Please enter valid keywords</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
