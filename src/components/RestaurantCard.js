import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { loggedInUser } = useContext(UserContext);

  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = resData.info;

  //console.log(props);
  return (
    <div className="bg-gray-200 p-1 m-2 w-[210px] rounded-lg">
      <img
        className="rounded-lg res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>⭐ {resData.info.avgRating} stars</h4>
      <h4>{resData.info.sla.deliveryTime} mins</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4 className="font-semibold">{loggedInUser} from context</h4>
    </div>
  );
};

// Higher Order Component. ==> is a function takes  as component and return a component

// input - RestaurantCard ==> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
