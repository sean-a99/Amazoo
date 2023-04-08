import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchItem } from "../../store/itemReducer";
import Price from "../Price";
import './itemShow.css';

const ItemShow = () => {
    const dispatch = useDispatch();
    let { itemId } = useParams();
    // itemId = parseInt(itemId)
    const item = useSelector(state => state?.items[itemId] ? state.items[itemId] : null)
    console.log(item)

    useEffect(() => {
        dispatch(fetchItem(itemId))
    }, [itemId])

    function parseDescription(desc) {
        let output = desc.split('.')
        return output.slice(0, output.length - 1)
    }

    const descArr = item?.description ? parseDescription(item?.description) : []

    return (
        <>
            <div id="showMaster">
                <div id="showImageBox" class="cardItemImageBox">
                    <img id="showPageImage" src={item?.photoUrl} alt="image" />
                </div>
                <div id="showContent">
                    <div id="showName">{item?.name}</div>
                    <Link to={`/category/${item?.animalType}`}>
                        <div id="showType" className="showLink">{item?.animalType}</div>
                    </Link>
                    
                    <p>Reviews placeholder</p>

                    <div id="showDivider"></div>
                    
                    <Price price={item?.price}/>
                    <div id="freeReturns">FREE Returns</div>
                    
                    <div id="showDivider"></div>
                    
                    <div id="showDescBox">
                        <h3>About this animal</h3>
                        <ul id="descList">
                            {descArr.map(fact => {
                                return <li className="bullet">{fact}</li>
                            })}
                        </ul>
                    </div>

                </div>
                <div id="showCheckout">
                    <p>{item?.price}</p>
                </div>
            </div>






        </>
    )
}

export default ItemShow;