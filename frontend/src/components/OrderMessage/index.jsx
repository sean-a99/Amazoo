import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAllCartItems } from "../../store/cartItemReducer";
import { useParams } from "react-router-dom";

const OrderMessage = () => {
    const user = useSelector(state => state?.session?.user)
    const { count } = useParams();

    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec'
    ]

    return(
        <div id="orderMessageContainer">
            <div id="orderMessageIcon">

            </div>
            <div id="orderMessageContent">
                <div id="orderMessageContentHeader">
                    Thank you, your order has been placed
                </div>
                <div>
                    An email confirmation has <span>not</span> been sent to you.
                </div>
                <div className="bold">
                    Order Number: {10000 + Math.floor(90000 * Math.random())}
                </div>
                <div>
                {count} items will be shipped to {user?.name} by Amazoo.com.
                </div>
                <div className="bold">
                    Guaranteed delivery: <span className="green">{months[Math.floor(Math.random() * months.length)]}. {1 + Math.floor(Math.random() * 28)}, {2050 + (Math.floor(Math.random() * 50))}</span>
                </div>
            </div>

        </div>
    )

}

export default OrderMessage;