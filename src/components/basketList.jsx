import { BasketItem } from "./basketItem";

function BasketList(props) {
    const {
        order, 
        handleBasketShow = Function.prototype,
        removeFromBasket, 
        incQuantity, 
        decQuantity, 
    } = props;
    const calculateTotalPrice = () => {
        return order.reduce( 
            (sum, item) => sum + item.price.finalPrice * item.quantity,
            0
        );
    };

    const totalPrice = calculateTotalPrice();

    return (
        <ul className="collection">
            <li className="collection-item active">Cart</li>
            {order.length ? (
                order.map((item) => (
                <BasketItem 
                key={item.mainId}
                item = {item}
                removeFromBasket={removeFromBasket} 
                incQuantity={incQuantity}
                decQuantity={decQuantity}
                />
            ))
            ):(
                <li className="collection-item">Cart is empty</li>
            )}
            <li className="collection-item active">Sum: {totalPrice} rub</li>
            
        </ul>
    );
}
export { BasketList };