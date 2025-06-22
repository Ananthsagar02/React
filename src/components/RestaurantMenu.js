import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_API, ITEM_IMG_CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams(); // Ensure this matches the route parameter
  // console.log(resId, "params");

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null); //Accordion index

  const dummy = "Dummy data";

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(RESTAURANT_MENU_API + resId);
  //   const json = await data.json();
  //   console.log(json.data);
  //   setResInfo(json.data);
  // };

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines = [], // Provide a fallback value as an empty array
    costForTwoMessage,
    locality,
    avgRating,
    totalRatingsString,
  } = resInfo?.cards?.[2]?.card?.card?.info || {};

  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards || [];
  //console.log(resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return (
    <div className="text-center menu">
      <h1 className="my-6 font-bold">{name}</h1>
      <p className="text-lg font-bold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {/* <h1>{itemCards[0].card.info.name}</h1>
      <h1>{itemCards[1].card.info.name}</h1>
      <h1>{itemCards[2].card.info.name}</h1>
      <h1>{itemCards[3].card.info.name}</h1> */}
      {/* <ul>
        {itemCards.map((item) => (
          // <h1>{itemCards[0].card.info.name}</h1> easy way to map
          <li key={item.card.info.id}>
            <div className="name-des">
              <div className="item-name">
                {" "}
                {item.card.info.name} - {item.card.info.price / 100}{" "}
              </div>
              <div className="des">{item?.card?.info?.description}</div>
            </div>

            <img
              className="menu-item-img"
              src={ITEM_IMG_CDN_URL + item?.card?.info?.imageId}
              alt={item?.name}
            />
          </li>
        ))}
      </ul> */}

      {categories.map((category, index) => (
        //Controlled component
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItem={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
