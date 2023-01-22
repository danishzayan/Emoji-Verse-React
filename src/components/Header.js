import ToggleButton from "./ToggleButton";
const Header = (props) => {
  return (
    <div className="flex flex-col items-center dark:bg-black">
      <h1 className="font-medium  text-5xl  py-2  text-sky-600  flex-1   backdrop-blur-sm bg-white/30 dark:backdrop-blur-sm dark:bg-black/30   ">
        Emoji-Verse👾
      </h1>

      {/* <input
        type="text"
        className="border-solid border-2 max-w-md rounded-md  px-3 py-2 mt-5"
        placeholder="search emoji.."
        onChange={(e) => {
          props.searchEmoji(e.target.value);
        }}
      ></input> */}
      <div class="relative rounded-md shadow-md mt-5">
        <div class="absolute inset-y-0 left-2 pr-3 flex items-center">
          <svg
            class="h-5 w-5 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <input
          type="search"
          class="form-input py-2 pl-8 pr-2 block w-full leading-5 rounded-md transition duration-150 ease-in-out bg-white border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:shadow-outline-blue"
          placeholder="Search"
          onChange={(e) => {
            props.searchEmoji(e.target.value);
          }}
        />
      </div>
      <ToggleButton toggleTheme={props.toggleTheme} />
    </div>
  );
};

export default Header;
