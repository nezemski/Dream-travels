import * as React from "react";
import { IPlace } from "./places.interfase";

interface IPlaceItem {
  place: IPlace;
}

const PlaceItem: React.FC<IPlaceItem> = ({ place }) => {
  return (
    <div className="">
      <img
        src={place.image}
        alt={place.name}
        className="w-full block rounded-xl mb-3"
      />
      <div className="font-bold text-xl mb-1 text=[#111]">{place.name}</div>
      <div className="text-orange-500 font-semibold text-lg">
        {place.country}
      </div>
    </div>
  );
};

export default PlaceItem;
