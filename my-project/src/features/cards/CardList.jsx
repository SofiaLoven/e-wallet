import { useSelector } from "react-redux";
import Card from "./Card";
import style from "./CardList.module.css"
import DeleteCard from "../../components/DeleteCard";


export const CardList =()=>{
    const cardArr = useSelector((store)=>store.cards.cardArr);   

    return(
        <div className={style.list}>
            <p>Active</p>
            <ul className="active">
               {cardArr.map((card, i)=>{
                if(card.active){ return <Card {...card} i={i}/>}
                })}
            </ul>
            <p>Not Active</p>
            <ul className="nonActive">
                {cardArr.map((card, i)=>{
                if(!card.active){ return <Card {...card} i={i}/>}
                })}
            </ul>
            <button>Delete a card</button>
            <div className={style.hidden}><DeleteCard/></div>
        </div>
    )
}
