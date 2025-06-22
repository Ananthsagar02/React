import { useContext } from "react";
import { RESTAURANT_MENU_API, ITEM_IMG_CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const ItemList = ({ items, dummy }) => {
  // console.log(items, "item");
  //console.log(dummy, "dummy");

  const { loggedInUser } = useContext(UserContext);
  return (
    <div>
      <div>
        {items.map((item) => (
          <div
            className="flex justify-between p-2 m-2 text-left border-b-2 border-gray-200"
            key={item.card.info.id}
          >
            <div className="w-9/12">
              <div className="py-2">
                <span className="">{item.card.info.name} </span>
                <span>
                  -₹{" "}
                  {item.card.info.price / 100
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description} </p>
            </div>
            <div className="">
              <div className="absolute ">
                <button className="p-2 m-auto text-lg text-green-800 bg-white shadow-lg font-font-semibold hover:bg-gray-200 w-[120px] rounded-lg">
                  Add +
                </button>
              </div>
              <img
                className="w-[156px] rounded-xl"
                src={ITEM_IMG_CDN_URL + item?.card?.info?.imageId}
                alt={item?.name}
              />
            </div>
          </div>
        ))}
        <p>{loggedInUser}</p>
      </div>
    </div>
  );
};

export default ItemList;
