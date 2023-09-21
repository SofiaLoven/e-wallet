import { useSelector } from "react-redux";

const DeleteCard =()=>{

    const cardArr = useSelector((store)=>store.cards.cardArr);   
    console.log(cardArr);
    return(
        <div>
            <strong>Choose the card you want to delete</strong>
            <select>
                {cardArr.map((card, i)=>{
                    if(!card.active){ return(
                        <option value={i}>{card.cardNumber}</option>)
                    }
                })}
            </select>
            <button>Delete</button>         
        </div>
    )
}

export default DeleteCard;