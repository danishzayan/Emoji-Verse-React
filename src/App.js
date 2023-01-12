import Cards from "./components/Cards";
import Header from "./components/Header";
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
    window.scrollTo({
      top: 200,
      behavior: 'smooth'
    });


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

      </div>
    </div>
  );
}

export default App;
