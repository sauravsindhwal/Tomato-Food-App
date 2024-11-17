import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/food del assets/frontend_assets/assets';
import { StoreContext } from '../../Context/Storecontext';

const FoodItem = ({ id, name, image, price, description }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    return (
        <div className="food-item">
            <div className="food-item-img-conatiner">
                <img className='food-item-image' src={image} alt={name} />

                {/* Check if item is in cart */}
                {
                    !cartItems[id] ? (
                        <img src={assets.add_icon_white} className='add'
                            onClick={() => addToCart(id)} />
                    ) : (
                        <div className="food-item-counter">
                            <img src={assets.remove_icon_red} onClick={() => removeFromCart(id)} />
                            <p>{cartItems[id]}</p> {/* Display item count */}
                            <img src={assets.add_icon_green} onClick={() => addToCart(id)} />
                        </div>
                    )
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    );
}

export default FoodItem;
