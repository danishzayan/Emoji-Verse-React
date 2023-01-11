import ToggleButton from "./ToggleButton";
const Header = (props) => {
  return (
    <div className="flex flex-col items-center dark:bg-black">
      <h1 className="font-medium  text-5xl  py-2  text-sky-600  flex-1   backdrop-blur-sm bg-white/30 dark:backdrop-blur-sm dark:bg-black/30   ">
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
      <ToggleButton toggleTheme={props.toggleTheme} />
    </div>
  );
};

export default Header;
