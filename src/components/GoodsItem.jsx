import { Link } from "react-router";


function GoodsItem(props) {
    const {
        mainId, 
        displayName, 
        displayDescription, 
        price, 
        displayAssets, 
        addToBasket,
    } = props;

    const backgroundImage = displayAssets.length
        ? displayAssets[0].full_background
        : displayName;

    return (
        <div className="card">
            <Link to={`/products/${mainId}`} className="card-link">
            <div className="card-image">
                <img src={backgroundImage} alt={displayName}/>
            </div>
            <div className="card-content">
                <span className="card-title">{displayName}</span>
                <p>{displayDescription}</p>
            </div>
            </Link>
            <div className="card-action">
                <button className="btn"
                onClick={() =>  
                    addToBasket({
                        mainId,
                        displayName,
                        price,
                    })
                }>
                    Buy
                </button>
                <span className="right">{price.finalPrice}V</span>
            </div>
        </div>
    );
}
export { GoodsItem };