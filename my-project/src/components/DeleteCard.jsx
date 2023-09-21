import { useSelector, useDispatch } from "react-redux";
import { removeCard } from "../features/cards/cardSlice";


const DeleteCard =()=>{
    const dispatch = useDispatch();
    const cardArr = useSelector((store)=>store.cards.cardArr);   

    return(
        <div>
            <p>Choose card number on the card you want to delete</p>
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
                    dispatch(removeCard(deletedCard.value))}}
                }
                >Delete</button>         
        </div>
    )
}

export default DeleteCard;