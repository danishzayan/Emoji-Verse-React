import './Cards.css'


import Card from './Card'


const Cards = (props) => {

console.log(props)
  const filteredData = props.emoji;

  if(filteredData.length===0){
  return <><p>No emojis found! ❌</p>
  <p>Please enter valid keywords</p>
  </>

  }


 
 return  <div className='cards'> {filteredData.map(data => <Card data={data} />)}</div>
 

}

export default Cards;