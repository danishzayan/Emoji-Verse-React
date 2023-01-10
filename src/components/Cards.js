
import Card from './Card'


const Cards = (props) => {

console.log(props)
  const filteredData = props.emoji;

  if(filteredData.length===0){
  return <><p>No emojis found! ❌</p>
  <p>Please enter valid keywords</p>
  </>

  }

// grid sm:grid-cols-2 justify-items-center
 
 return  <div className='flex flex-wrap gap-2  '> {filteredData.map(data => <Card data={data} />)}</div>
 

}

export default Cards;