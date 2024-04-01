import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const resId = useParams();
  console.log(resId);
  //Episode 7 api url changed so fetching data from url for resid is not possible right now..!!

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);

  };

  if (resInfo === null) return <Shimmer/>; 

  const {name, cuisines, costForTwo, cloudinaryImageId} = resInfo?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[2]?.info;

  return (
    <div className="menu">
        <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h1>{name}</h1>
      <p>{cuisines.join(", ")} - {costForTwo}</p>
      <ul>
        <li>Biryani</li>
        <li>Burgurs</li>
        <li>Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
