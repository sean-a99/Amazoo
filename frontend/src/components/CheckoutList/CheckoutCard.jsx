import { formatPrice } from "../../utils/utils";
import { deleteCartItem } from "../../store/cartItemReducer";
import { useDispatch } from 'react-redux';
import { updateCartItem } from "../../store/cartItemReducer";

const CheckoutCard = ({cartItem}) => {
    const dispatch = useDispatch();

    function handleUpdate(e) {
        let newCartItem = {
            id: cartItem.id,
            quantity: e.target.value,
            userId: cartItem.userId,
            itemId: cartItem.itemId
        }
        dispatch(updateCartItem(newCartItem))
    }

    return (
        <>
            <div id="checkoutCardContainer">
                <div className="checkoutPicContainer">
                    <img className="checkoutPic" src={cartItem.photoUrl} alt="cart item photo" />
                </div>
                <div className="checkoutCardDescription">
                    <div className="cardDescName">{cartItem.name}</div>
                    <div className="cardDescInStock">In Stock</div>
                    <div className="cardDescFreeShipping">eligible for FREE Shipping & <span>FREE Returns</span></div>
                    <div><span className="cardDescBold">Class: </span>{cartItem.type}</div>
                    <div className="cardDescToolbox">
                        <div>
                            <span className="cardDescBold">Qty: </span>
                            <form id="addToCartForm">
                                <div id="cartFormSelectContainer">

                                    <label htmlFor="quantity" className="quantityLabel">Qty: &nbsp;</label>
                                    <select defaultValue={cartItem.quantity} onChange={handleUpdate} name="qty" id="qty" className="cartFormSelect">
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                        <option value={6}>6</option>
                                        <option value={7}>7</option>
                                        <option value={8}>8</option>
                                        <option value={9}>9</option>
                                        <option value={10}>10</option>
                                        <option value={11}>11</option>
                                        <option value={12}>12</option>
                                        <option value={13}>13</option>
                                        <option value={14}>14</option>
                                        <option value={15}>15</option>
                                        <option value={16}>16</option>
                                        <option value={17}>17</option>
                                        <option value={18}>18</option>
                                        <option value={19}>19</option>
                                        <option value={20}>20</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <button onClick={() => dispatch(deleteCartItem(cartItem.id))}>Delete</button>
                    </div>
                </div>
                <div className="checkoutCardPrice">${formatPrice(cartItem.price)}.00</div>
            </div>
        </>
    )
}

export default CheckoutCard;