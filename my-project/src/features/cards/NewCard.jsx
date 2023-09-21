import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { changeVariable, addCard } from "./cardSlice";
import { Link } from "react-router-dom";


export const NewCard =()=>{
    //Hämta alla nya värden? går dem att skicka som objekt?
    const dispatch = useDispatch();
    const {card} = useSelector((state)=>state.cards);

    const changeCard = (id)=>{
        let newVariable = document.getElementById(id).value;
        let variableObj = {name: id, value: newVariable};
        dispatch(changeVariable(variableObj));
    }

    return(
        <div>
            <div className="preview">
                <strong>Preview of new Card</strong>
                <Card {...card}/>
            </div>
            <div className="addNew">
                <div> 
                    <label >Cardnumber
                    <input onChange={()=>{changeCard("cardNumber")}} type="text" id="cardNumber" />
                    </label>
                    <label >Name
                    <input  type="text" id="name" value ={card.cardHolder} />
                    </label>
                    <div>
                        <label >Valid thru
                        <input onChange={()=>{changeCard("expireMonth")}} type="number" id="expireMonth" />
                        <input onChange={()=>{changeCard("expireYear")}} type="number" id="expireYear"/>
                        </label>
                        <label >CVV
                        <input onChange={()=>{changeCard("cvv")}} type="number" id="cvv"/>
                        </label>
                    </div>
                    <label>Vendor
                        <select onChange={()=>{changeCard("vendor")}} id="vendor">
                            <option selected defaultValue={""}></option>
                            <option>Bank of Magic</option>
                            <option>Visa</option>
                            <option>Mastercard</option>
                        </select>
                    </label>
                    <Link to={"/"}><button onClick={()=>{dispatch(addCard(card))}}>Add Card</button></Link>
                </div>
            </div>
        </div>
    )
}

//Skicka Form med klick?? preventDefault