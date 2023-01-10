import Cards from "./components/Cards";
import Header from "./components/Header";
import { Puff } from "react-loader-spinner";
import Navigation from "./components/Navigation";
import useFetch from "./hooks/useFetch";

import { useEffect, useState } from "react";

function App() {
  const apiKey = process.env.API_KEY;
  console.log(apiKey);

  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState("light");
  const [data] = useFetch(
    `https://emoji-api.com/emojis?access_key= 551124ba2ad223649511fb392bc63afa46544eee`
  );

  const [emoji, setEmoji] = useState(data);

  useEffect(() => {
    if (data) {
      setLoading(false);
      setEmoji(data);
    }
    const checkTheme = localStorage.getItem("theme");
    if (checkTheme) {
      setTheme(checkTheme);
    }
  }, [loading, data]);

  const handleCategory = (category) => {
    console.log("Category : " + category);
    if (category === "all") setEmoji(data);
    else setEmoji(data.filter((d) => category === d.group));
    console.log(emoji);
  };

  const handleClick = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
  };

  const handleSearch = (keyword) => {
    console.log(keyword.toLowerCase());
    if (keyword !== null) {
      const term = keyword.toLowerCase().trim();
      setEmoji(data.filter((d) => d.slug.includes(term)));
    }
  };

  return (
    <div className={`container ${theme} mx-auto bg-white  dark:bg-black `}>
      <div
        className={`App max-w-screen-lg ${theme} mx-auto bg-white dark:bg-black`}
      >
        {loading && (
          <Puff
            height="80"
            width="80"
            radisu={1}
            color="#0ab1a8"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass="container flex center"
            visible={true}
            className=""
          />
        )}
        {!loading && (
          <Header toggleTheme={handleClick} searchEmoji={handleSearch} />
        )}
        {!loading && (
          <Navigation emoji={data} changeCategory={handleCategory} />
        )}
        {!loading && <Cards emoji={emoji} />}
      </div>
    </div>
  );
}

export default App;
