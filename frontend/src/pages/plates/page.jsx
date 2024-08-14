import { useEffect } from "react";
import plateServices from "../../services/plates";
import Loading from "../loading/page.jsx";

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
    <div>
      <h1>Plate</h1>
      <p>This is the Plate page.</p>
    </div>
  );
}