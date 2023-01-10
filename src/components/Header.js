

const Header = (props) => {

    return <div className="flex flex-col items-center">
        <h1 className="font-medium  text-5xl  py-2  ">Emoji-Verse👾
        </h1>
     
    



       <div className='buttons'>
        <button type='click' className='px-2 py-1 text-lg bg-black' onClick={()=>props.toggleTheme('dark')}>Dark</button>
        <button type='click' className='px-2 py-1 text-lg bg-black' onClick={()=>props.toggleTheme('light')}>Light</button>
        

       </div>
       <input type='text' className='input' placeholder='search emoji..' onChange={(e)=>{props.searchEmoji(e.target.value)}} ></input>
    </div>
}

export default Header;