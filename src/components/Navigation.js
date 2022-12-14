
import './Navigation.css'

const Navigation = (props) => {
    let groups = new Set(props.emoji.map(d => d.group));
    groups=Array.from(groups);




    return <ul className="categories">

        <li className='category' onClick={()=>props.changeCategory('all')}>All</li>
       
        {
           groups.map(g=><li className='category' onClick={()=>props.changeCategory(g)}>{g}</li>)
        }
       
            
        
    </ul>

}

export default Navigation;