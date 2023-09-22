import style from "./Card.module.css";
import { activateCard } from "./cardSlice";
import { useDispatch } from "react-redux";

const Card= ({vendor, cardNumber, cardHolder, expireMonth, expireYear, cvv, i})=>{
    const dispatch = useDispatch();

    return(
        <li>
            <div className={style.card} onClick={()=>{dispatch(activateCard(i))}}>
                <p>Vendor: {vendor}</p>
                <p>{cardNumber}</p>
                <div className={style.styleDiv}>
                <p>Exp: {expireMonth}/{expireYear}</p>
                <p>cvv: {cvv}</p>
                </div>
                <p>{cardHolder}</p>
            </div>
        </li>
    )
}

export default Card;