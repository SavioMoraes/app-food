import { useCartContext } from "../../contexts/useCartContext";
import styles from "./page.module.css";
import { LuMinusCircle } from "react-icons/lu";

export default function Cart() {
  
  const { cartItems } = useCartContext();

  console.log(cartItems);

  if (!cartItems.length) {
    return (
      <div>
        <h1>Cart is empty... :/</h1>
        <button>See our specialites!</button>
      </div>
    );
  }
  
  return (
    <div className={styles.pageContainer}>
      <h1>Your items:</h1>
      <section>
        <div className={styles.itemsListContainer}>
          {cartItems.map((item) => (
            <div key={item._id} className={styles.itemContainer}>
              <img src={item.imgUrl} alt="" />
              <div className={styles.itemContent}>
                <h2>{item.name}</h2>
                <p>{item.price}</p>
                <p>{String(item.ingrdients)}</p>
                <p>{item.description}</p>
                <div className={styles.portionContainer}>
                  <p>Portions:</p>
                  <p>{item.quantity}</p>
                  <div className={styles.portionBtns}>
                    <button>-</button>
                    <button>+</button>
                  </div>
                </div>
                <button><LuMinusCircle /> Remove item</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <button className={styles.confirmBtb}>Confirm your order!</button>
    </div>
  );
}