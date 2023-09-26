import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom"
import Card from "./Card";
import style from "./CardList.module.css"
import DeleteCard from "../../components/DeleteCard";


export const CardList =()=>{
    const cardArr = useSelector((store)=>store.cards.cardArr);  
    const [showDelete, setShowDelete] = useState(true); 
    

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
            <div className={style.buttons}>      
                { cardArr.length > 1 ? 
                <div>
                    <button className={!showDelete && style.hidden} onClick={()=>{setShowDelete((prevState)=>!prevState)}}>Delete a card</button> 
                    <div className={showDelete && style.hidden}><DeleteCard/></div>
                </div>
                : null }
                <Link to={"/addCard"}><button>Add new card</button></Link>
            </div>
        </div>
    )
}
