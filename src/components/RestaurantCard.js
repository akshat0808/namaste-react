import { CDN_URL } from "../utils/constants";

const ReastaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData?.info;
  const { deliveryTime } = sla;

  return (
    <div className="res-card" style={{ backgroundColor: "#D3D3D3" }}>
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h2>{name}</h2>
      <h4>Cuisine : {cuisines.join(", ")}</h4>
      <h4>Rating : {avgRating} ★</h4>
      <h4>Delivery Time : {deliveryTime} minutes</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default ReastaurantCard;
