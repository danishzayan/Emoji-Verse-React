import Card from "./Card";

const Cards = (props) => {
  // console.log("CARDSSSS", props.emoji[0]._data);
  // const filteredData = props.emoji;
  // console.log("FILTERED DATA" + filteredData);

  // filteredData.forEach((data) => console.log(data._data));

  // if (filteredData.length === 0) {
  //   return (
  // <div className="container flex justify-center my-10 text-black bg-white dark:text-white dark:bg-black">
  //   <p>No emojis found! ❌</p>
  //   <p>Please enter valid keywords</p>
  // </div>
  //   );
  // }

  // console.log(props.emoji);

  return (
    <div className=" grid grid-cols-2 mt-6 gap-1  sm:gap-3 px-1 sm:px-3 md:grid-cols-4 sm:grid-cols-3  dark:bg-black dark:text-white">
      {props.emoji.map((data) => {
        return <Card data={data} />;
      })}
    </div>
  );
};

export default Cards;
