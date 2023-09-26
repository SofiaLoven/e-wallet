import { useState } from "react";
import style from "./Navigation.module.css"
import { Link } from "react-router-dom"

const Navigation =()=>{

    return(
        <div className={style.navigation}>
            <div className={style.links}>
                <Link to={"/"} style={{textDecoration: "none"}}><p>Cards</p></Link>
                <Link to={"/addCard"} style={{textDecoration: "none"}}><p>Add Card</p></Link>    
            </div>
        </div>
    )
}

export default Navigation;