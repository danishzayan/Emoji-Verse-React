import Card from "./Card";

const Cards = (props) => {
  console.log(props);
  const filteredData = props.emoji;

  if (filteredData.length === 0) {
    return (
      <div className="container flex justify-center my-10 text-black bg-white dark:text-white dark:bg-black">
        <p>No emojis found! ❌</p>
        <p>Please enter valid keywords</p>
      </div>
    );
  }

  // grid sm:grid-cols-2 justify-items-center

  return (
    <div className=" grid grid-cols-2 gap-1  sm:gap-3 px-1 sm:px-3 md:grid-cols-4 sm:grid-cols-3  dark:bg-black dark:text-white">
      {filteredData.map((data) => (
        <Card data={data} />
      ))}
    </div>
  );
};

export default Cards;
