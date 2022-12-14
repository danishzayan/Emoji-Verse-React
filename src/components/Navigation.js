import { NavLink } from 'react-router-dom';
import './Navigation.css'

const Navigation = (props) => {



    let groups = new Set(props.emoji.map(d => d.group));
    groups = Array.from(groups);




    return <ul className="categories">

        <li  className='category' onClick={() => props.changeCategory('all')}>       <NavLink  to="/all" activeClassName="active" key={"All"}>All</NavLink></li>

        {
            groups.map(g => {

                return <li className='category' onClick={() => props.changeCategory(g)
                }><NavLink to={`/${g}`} key={g}>{g}</NavLink></li>
            })

        }



    </ul>

}

export default Navigation;