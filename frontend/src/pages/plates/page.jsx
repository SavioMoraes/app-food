import { useEffect } from "react";
import plateServices from "../../services/plates";
import Loading from "../loading/page.jsx";
import PlateCard from "../../components/plateCard/plateCard.jsx";

export default function Plate() {
  const { getAvailablePlates, plateLoading, refetchPlates, platesList } = plateServices();

  useEffect(() => {
    if (refetchPlates) {
      getAvailablePlates();
    }
  }, [refetchPlates]);

  if (plateLoading) {
    return(<Loading />);
  }

  console.log(platesList);

  return (
    <>
      <div>
        {platesList.map((plate) => (
          <PlateCard plateData={plate} key={plate._id}/>
        ))}
      </div>
    </>
  );
}