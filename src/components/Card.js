import './Card.css'

const Card = props => {

    return <div className="card" key={props.data.codePoint} >
      <span className='emoji'>{props.data.character}</span>
      <span className='title'>{props.data.unicodeName}</span>
     
    </div>
  }


  export default Card;