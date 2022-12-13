
import './App.css';
import Cards from './components/Cards';
import Header from './components/Header';
import { Puff } from 'react-loader-spinner'
import Navigation from './components/Navigation';

import { useEffect, useState } from 'react';

function App() {

  const [emoji, setEmoji] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('all')
  const [theme,setTheme] = useState('light')
  const [keyword,setKeyword] = useState(null)
 

  
  const apiKey = process.env.API_KEY;
  console.log(apiKey)

  const loadEmoji = async () => {
    setLoading(true);
const response = await fetch(`https://emoji-api.com/emojis?access_key= 551124ba2ad223649511fb392bc63afa46544eee`);
    const data = await response.json()
    setEmoji(data);
    // console.log(data.map(d=>console.log(d.character)))
    setLoading(false);

  }

  useEffect(() => {
    loadEmoji();

    const checkTheme =  localStorage.getItem('theme');
    if(checkTheme){
      setTheme(checkTheme);
    }
  }, [])


  const handleCategory = (category) => {

    setCategory(category);
    console.log(category)
  }

  const handleClick  = (theme)=>{
    setTheme(theme);
    localStorage.setItem("theme", theme);

  }

  const handleSearch = (keyword)=>{
 
    setKeyword(keyword);
  }


  return (
    
      <div className={`App ${theme}`}>
        {loading && <Puff
          height="80"
          width="80"
          radisu={1}
          color="#4fa94d"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass="loader"
          visible={true}
        />}
        {!loading && <Header toggleTheme = {handleClick} searchEmoji = {handleSearch} />}
        {!loading && <Navigation emoji={emoji} changeCategory={handleCategory} />}
        {!loading && <Cards keyword={keyword} category={category} emoji={emoji} />}
      </div>
  );
}

export default App;
