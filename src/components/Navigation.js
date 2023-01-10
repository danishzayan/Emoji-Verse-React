import { NavLink } from 'react-router-dom';

const Navigation = (props) => {



    let groups = new Set(props.emoji.map(d => d.group));
    groups = Array.from(groups);




    return <nav className=" bg-white dark:bg-black flex flex-wrap justify-center space-x-4">

        <li  className='dark:text-white font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 list-none' onClick={() => props.changeCategory('all')}>       <NavLink  to="/all" activeClassName="active" key={"All"}>All</NavLink></li>

        {
            groups.map(g => {

                return <li className='category dark:text-white font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 list-none' onClick={() => props.changeCategory(g)
                }><NavLink to={`/${g}`} activeClassName="active" key={g}>{g}</NavLink></li>
            })

        }



    </nav>

}

export default Navigation;