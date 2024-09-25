import { useEffect, useState } from "react";
import plateServices from "../../services/plates.jsx";
import Loading from "../loading/page.jsx";
import PlateCard from "../../components/plateCard/plateCard.jsx";
import styles from "./page.module.css";
import PlatePopup from "../../components/platePopup/platePopup.jsx";
import { useCartContext } from "../../contexts/useCartContext.jsx";

export default function Plate() {
  const { getAvailablePlates, plateLoading, refetchPlates, platesList } = plateServices();
  const [plateSelected, setPlateSelected] = useState(null);
  const { addToCart } = useCartContext();

  useEffect(() => {
    if (refetchPlates) {
      getAvailablePlates();
    }
  }, [refetchPlates]);

  const handlePlateSelected = (plate) => {
    setPlateSelected(plate);
  }
  
  const handleClosePopup = () => {
    setPlateSelected(null);
  }
  
  const handleAddToCart = (itemToAdd) => {
    addToCart(itemToAdd);
    handleClosePopup();
  }
  
  if (plateLoading) {
    return(<Loading />);
  }

  return (
    <>
      <div>
        {platesList.map((plate) => (
          <div key={plate._id} className={styles.cardContainer} onClick={() => { handlePlateSelected(plate) }}>
            <PlateCard plateData={plate} />
          </div>
        ))}
      </div>

      {plateSelected && ( 
        <PlatePopup
          plateData={plateSelected}
          onClose={handleClosePopup}
          onAddToCart={handleAddToCart}
        />
      )}
    </>
  );
}