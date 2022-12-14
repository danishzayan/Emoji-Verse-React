
import './Header.css'

import useFetch from '../hooks/useFetch'
const Header = (props) => {
    const [data] = useFetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(data);
    return <div className="header">

      
    
        <h1>Emoji-Verse 👾
        </h1>
        <input type='text' className='input' placeholder='search emoji..' onChange={(e)=>{props.searchEmoji(e.target.value)}} ></input>

       <div className='buttons'>
        <button type='click' className='btn' onClick={()=>props.toggleTheme('dark')}>Dark</button>
        <button type='click' className='btn' onClick={()=>props.toggleTheme('light')}>Light</button>

       </div>
    </div>
}

export default Header;