const Card = (props) => {
  return (
    <div
      className=" rounded-md flex flex-col items-center gap-2 text-center shadow-md p-8 hover:shadow-lg dark:hover:transiton dark:bg-slate-900 dark:text-white dark:hover:bg-slate-600 dark:hover:transition "
      key={props.data.codePoint}
    >
      <span className="text-6xl ">{props.data.character}</span>
      <span className="text-xl capitalize">{props.data.unicodeName}</span>
    </div>
  );
};

export default Card;
