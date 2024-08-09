import { useEffect, useState } from "react";
import { initialPlaces } from "./places.data";
import PlaceItem from "./plaseItem";
import { IPlace } from "./places.interfase";

function App() {
  const [places, setPlaces] = useState<IPlace[]>(initialPlaces);
  useEffect(() => {
    console.log("new places");
  }, [places]);
  const addNewPlace = () => {
    setPlaces([
      {
        country: "Tanzania",
        name: "Manta Resort",
        image:
          "https://africanspicesafaris.com/wp-content/uploads/2020/11/manta-resort-tanzania-1-1200x675.gif",
      },
      ...places,
    ]);
  };
  return (
    <div className="bg-[#EFF*F9] p-10 text-center">
      <button
        onClick={addNewPlace}
        className="py px-5 bg-orange-400 hover:bg-orange-500 transition-colors duration-300 ease-in-out rounded-lg mb-2 text-white"
      >
        Add places
      </button>
      <div className="grid grid-cols-2 gap-10">
        {places.map((place) => (
          <PlaceItem key={place.name} place={place} />
        ))}
      </div>
    </div>
  );
}

export default App;
