import './Cards.css'


import Card from './Card'
import { useState } from 'react';

const Cards = (props) => {


  let filteredData = props.emoji;

  if(props.keyword !== null){
    filteredData = props.emoji.filter(data=>data.slug.includes(props.keyword))
    if(filteredData.length===0)
    return <><p>No emojis found! ❌</p>
    <p>Please enter valid keywords</p>
    </>

  }


  if(props.category!=='all'){
    filteredData = props.emoji.filter((data)=>props.category=== data.group);
  }

  if(props.keyword===null || props.keyword==='' ){
    console.log('null')
  }


 return  <div className='cards'> {filteredData.map(data => <Card data={data} category={props.category} />)}</div>
 

}

export default Cards;