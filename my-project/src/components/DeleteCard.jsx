import { useSelector, useDispatch } from "react-redux";
import { removeCard } from "../features/cards/cardSlice";
import style from "./DeleteCard.module.css";


const DeleteCard =()=>{
    const dispatch = useDispatch();
    const cardArr = useSelector((store)=>store.cards.cardArr);   

    return(
        <div className={style.deleteCard}>
            <p>Choose the card number on the card you want to delete</p>
            <select id="deletedCard">
                <option value="empty" selected></option>
                {cardArr.map((card, i)=>{
                    if(!card.active){ return(
                        <option value={i}>{card.cardNumber}</option>)
                    }
                })}
            </select>
            <button onClick={()=>{
                let deletedCard = document.querySelector("#deletedCard");
                if(deletedCard.value !== "empty"){
                    dispatch(removeCard(deletedCard.value))
                    deletedCard.value = "empty";
                }}
                }
                >Delete</button>         
        </div>
    )
}

export default DeleteCard;