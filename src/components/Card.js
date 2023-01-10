

const Card = props => {

    return <div className=" rounded-md flex flex-col items-center gap-2 text-center shadow-lg p-8 hover:bg-violet-600" key={props.data.codePoint} >
      <span className='text-6xl'>{props.data.character}</span>
      <span className='text-2xl'>{props.data.unicodeName}</span>
     
    </div>
  }


  export default Card;