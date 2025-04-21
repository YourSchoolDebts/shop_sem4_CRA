function BasketItem(props) {
    const {
        id, 
        name, 
        price, 
        quantity,
        removefromBasket = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;
    return (
        <ul className="collection">
            <li className="collection-item">
                {name}{" "} 
                <i 
                    className="material-icons basket-quantity"
                    onClick={() => decQuantity(id)}
                >
                    remove
                </i>
                x {quantity}
                <i
                    className="material-icons basket-quantity"
                    onClick={() => decQuantity(id)}
                >
                    add
                </i>{" "} 
                = {price * quantity} rubs.
                <span className="secondary-content" onClick={() => removefromBasket(id)}>
                    <i className="material-icons basket-delete">clear</i>
                </span>
            </li>
        </ul>
    );
}

export { BasketItem };