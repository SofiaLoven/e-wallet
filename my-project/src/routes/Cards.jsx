import { CardList } from "../features/cards/CardList"
import Navigation from "../components/navigation"

export const Cards =()=>{

    return(
        <div className="cards">
            <h2>Cards</h2>
            <CardList/>
            <Navigation/>
        </div>
    )
}