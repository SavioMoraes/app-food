import { useCartContext } from "../../contexts/useCartContext";
import styles from "./page.module.css";
import { LuMinusCircle } from "react-icons/lu";
import { useState } from "react";
import ConfirmOrderPopup from "../../components/confirmOrderPopup/confirmOrderPopup.jsx";
import orderServices from "../../services/order.jsx";

export default function Cart() {
  
  const { cartItems, updateCartItems, removeFromCart, clearCart } = useCartContext();
  const [confirmPopupOpen, setConfirmPopupOpen] = useState(false);
  const { sendOrder } = orderServices();

  const handleChangeItemQty = (mode, itemId) => {    
    const updatedCartItem = cartItems.map((item) => {
      if (item._id === itemId) {
        if (mode === 'less' && item.quantity > 1) {
          item.quantity -= 1;
        } else if (mode === 'more') {
          item.quantity += 1;
        }
      }
      return item;
    });

    updateCartItems(updatedCartItem);
  }

  const handleOpenPopup = (e) => {
    e.preventDefault();
    setConfirmPopupOpen(!confirmPopupOpen);
  }

  const handleConfirmOrder = (orderData) => {
    orderData.items = cartItems.map((item) => {
      return {
        plateId: item._id,
        quantity: item.quantity
      }
    });
    sendOrder(orderData);
    setConfirmPopupOpen(!confirmPopupOpen);
    clearCart();
  }

  if (!cartItems.length) {
    return (
      <div>
        <h1>Cart is empty... :/</h1>
        <button>See our specialites!</button>
      </div>
    );
  }
  
  return (
    <>
    
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
                      <button onClick={() => {handleChangeItemQty('less', item._id)}}>-</button>
                      <button onClick={() => {handleChangeItemQty('more', item._id)}}>+</button>
                    </div>
                  </div>
                  <button onClick={() => { removeFromCart(item._id) }}><LuMinusCircle /> Remove item</button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <button className={styles.confirmBtn} onClick={handleOpenPopup}>Confirm your order!</button>
      </div>

      <ConfirmOrderPopup open={confirmPopupOpen} onClose={handleOpenPopup} onConfirm={handleConfirmOrder} />
    </>
  );
}