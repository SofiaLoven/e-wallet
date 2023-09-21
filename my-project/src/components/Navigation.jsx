import { useState } from "react";
import style from "./Navigation.module.css"
import { Link, useLocation } from "react-router-dom"

const Navigation =()=>{

    return(
        <div>
            <Link to={"/addCard"}><button>Add new card</button></Link>
        </div>
    )
}

export default Navigation;