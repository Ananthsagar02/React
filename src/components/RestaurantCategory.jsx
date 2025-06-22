import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItem, setShowIndex, dummy }) => {
  // const [showItem, setShowItem] = useState(false);

  const handleClick = () => {
    //console.log("clicked");
    setShowIndex();
  };
  // console.log(data);
  return (
    <div className="">
      <div className="w-6/12 p-4 mx-auto my-4 shadow-lg bg-gray-50">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="text-lg font-bold">
            {data.title} ({data?.itemCards?.length})
          </span>
          <span>⬇️</span>
        </div>

        {showItem && <ItemList items={data.itemCards} dummy={dummy} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
