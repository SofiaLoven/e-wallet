import { useState } from "react";
import style from "./Card.module.css";
import { activateCard } from "./cardSlice";
import { useDispatch } from "react-redux";
import empty from "../../../public/pictures/empty.png"
import chip from "../../../public/pictures/chip.png"


const Card= ({vendor, vendorPic, cardNumber, cardHolder, expireMonth, expireYear, cvv, i})=>{
    const dispatch = useDispatch();
    
    return(
        <li>
            <div className={`${style.card} ${vendor}`} onClick={()=>{dispatch(activateCard(i))}}>
                {vendorPic === null ? <img src={empty} alt={`Yo haven't choose a vendor yet.`}/> : <img src={vendorPic} alt={`vendor ${vendor}`}/> }
                    <p>{cardNumber}</p>
                    <div className={style.styleDiv}>
                        <p>exp {expireMonth}/{expireYear}</p>
                        <p>cvv {cvv}</p>
                    </div>
                    <p>{cardHolder}</p>  
                    <img src={chip} alt="Chip" style={{borderRadius: "12px"}} className={style.chip}/> 
            </div>
        </li>
    )
}

export default Card;