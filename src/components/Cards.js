import { useEffect, useState } from "react";
import Card from "./Card";

const Cards = (props) => {

 
  const [page,setPage] = useState(40);
  const [emoji,setEmoji] = useState(props.emoji.slice(0,page))



  useEffect(()=>{
    setPage(40);
    setEmoji(props.emoji.slice(0,page))
 
    // if(emoji.length===0) return;
   

  },[props.emoji])


  
  function handleScroll() { 
    
    var isAtBottom = document.documentElement.scrollHeight - document.documentElement.scrollTop <= document.documentElement.clientHeight+5; 
  

    
    if (isAtBottom) { 
      
      // Load next posts 
      setPage(page+40);
      setEmoji(props.emoji.slice(0,page));
   
      
    } 
    
  } 
  
   document.addEventListener("scroll", handleScroll);


  //handle search result 
  if (props.emoji.length === 0) {
    return (
  <div className=" min-h-screen flex flex-row justify-center my-10 mx-auto text-black bg-white dark:text-white dark:bg-black">
    <p>No emojis found! ❌</p>
    <p>Please enter valid keywords</p>
  </div>
    );
  }


 
  return (
    <div className=" grid grid-cols-2 mt-6 gap-1  sm:gap-3 px-1 sm:px-3 md:grid-cols-4 sm:grid-cols-3  dark:bg-black dark:text-white">
      {emoji.map((data) => {
        return <Card data={data} />;
      })}
    </div>
  );
};

export default Cards;
