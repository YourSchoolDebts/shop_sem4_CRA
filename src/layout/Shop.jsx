import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import { Preloader } from "../components/preloader";
import { GoodsList } from "../components/goodsList";
import { Cart } from "../components/cart";
import { BasketList } from "../components/basketList";
import { Alert } from "../components/alert";

function Shop() {
   const [goods, setGoods] = useState([]);
   const [loading, setLoading] = useState(true);
   const [order,  setOrder] = useState([]);
   const [isBasketShow, setBasketShow] = useState(false);
   const [alertName, setAlertName] = useState("");
   console.log(API_KEY, API_URL)

   const closeAlert = () => {
      setAlertName("");
   };

   const addToBasket = (item) => {
      const itemIndex = order.findIndex((orderItem) => orderItem.mainId === item.mainId);

      if (itemIndex < 0) {
         const newItem = {
            ...item,
            quantity: 1,
         };
         setOrder([...order, newItem]);
      } else {
         const newOrder = order.map((orderItem, index) =>{
            if (index === itemIndex){
               return{
                  ...orderItem,
                  quantity: orderItem.quantity + 1,
           
               };
            } else {
               return orderItem;
            }

         });

         setOrder(newOrder);
      }
      setAlertName(item.displayName)
   };


   const removeFromBasket = (mainId) => {
      const newOrder = order.filter((item) => item.mainId !== mainId);
      setOrder(newOrder);
   };


   const incQuantity = (mainId) => {
      const newOrder = order.map((item) => {
         if (item.mainId === mainId) {
            const newQuantity = item.quantity + 1;
            return{
               ...item,
               quantity: newQuantity,
            };
         } else {
            return item;
         }
      });
      setOrder(newOrder);
   };


   const decQuantity = (mainId) => {
      const newOrder = order.map((item) => {
         if (item.mainId === mainId) {
            const newQuantity = item.quantity - 1;
            return{
               ...item,
               quantity: newQuantity >= 0 ? newQuantity : null,
            };
         } else {
            return item;
         }
      });
      // .filter(Boolean)
      setOrder(newOrder);
   };


   const handleBasketShow = () => {
      setBasketShow((prev) => !prev);
   };

   const closeModal = (e) => {
      if (e.target.classList.contains("modal-overlay")){
         setBasketShow(false);
      }
   };

   useEffect(() => {
      const fetchData = async () => {
         const response = await fetch(API_URL,{
            headers: {Authorization: API_KEY},
         });
         const data = await response.json();
         console.log(data)
         setGoods(data.shop);
         setLoading(false);
      };
      fetchData();
   }, []);

   
   return(
      <main className="container content">
         <div className="cart-container">
            <div className="cart" onClick={handleBasketShow}>
               <i className="material-icons">shopping_basket</i>
               {order.length >0 && (
                  <span className="cart-quantity">{order.length}</span>
               )}
            </div>
         </div>
         {isBasketShow && (
            <div className="modal-overlay" onClick={closeModal}>
               <div classNamemodal-content>
                  <button
                     className="modal-close"
                     onClick={() => isBasketShow(false)}
                  >
                    
                  </button>
                  <BasketList
                     order={order}
                     removeFromBasket={removeFromBasket}
                     incQuantity={incQuantity}
                     decQuantity={decQuantity}
                  />
               </div>
            </div>
         )}
         {loading ? (
            <Preloader/>
         ) : (
            <GoodsList goods={goods} addToBasket={addToBasket}/>
         )}
         {alertName && <Alert name = {alertName} closeAlert={closeAlert}/>}
      </main>
   ); 
}
export { Shop };