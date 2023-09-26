import { NewCard } from "../features/cards/newCard"
import Navigation from "../components/navigation"

export const AddCard =()=>{
    return(
        <div className="addCard">
            <h2>Add card</h2>
            <NewCard/>
            <Navigation/>
        </div>
    )
}