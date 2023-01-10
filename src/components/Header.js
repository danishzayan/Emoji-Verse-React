const Header = (props) => {
  return (
    <div className="flex flex-col items-center dark:bg-black">
      <h1 className="font-medium  text-5xl  py-2  text-sky-600 sticky flex-1  top-0 backdrop-blur-sm bg-white/30 dark:backdrop-blur-sm dark:bg-black/30   ">
        Emoji-Verse👾
      </h1>

      <input
        type="text"
        className="border-solid border-2 max-w-md rounded-md  px-3 py-2 mt-5"
        placeholder="search emoji.."
        onChange={(e) => {
          props.searchEmoji(e.target.value);
        }}
      ></input>
      <div className=" border-solid bg-slate-100 m-4 px-3 py-1 rounded-md ">
        <button
          type="click"
          className="px-2 py-1 text-lg"
          onClick={() => props.toggleTheme("dark")}
        >
          Dark
        </button>
        <button
          type="click"
          className="px-2 py-1 text-lg "
          onClick={() => props.toggleTheme("light")}
        >
          Light
        </button>
      </div>
    </div>
  );
};

export default Header;
