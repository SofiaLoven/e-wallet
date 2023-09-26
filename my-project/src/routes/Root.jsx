import { Outlet } from "react-router-dom"
import {getCardHolder} from "../features/cards/cardSlice"
import { useDispatch } from "react-redux"

export const Root =()=>{
    let dispatch = useDispatch();
    dispatch(getCardHolder());
    
    return(
        <div className="website"> 
            <Outlet/>
        </div>
    )
}
