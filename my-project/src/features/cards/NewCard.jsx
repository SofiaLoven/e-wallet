import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "./cardSlice";
import { Link } from "react-router-dom";
import { useState } from "react";


export const NewCard =()=>{
    const dispatch = useDispatch();
    const {getCardHolder} = useSelector((store)=>store.cards)
    const [vendor, setVendor] = useState(null);
    const [cardNumber, setCardNumber] = useState(null);
    const [expireMonth, setExpireMonth] = useState(null);
    const [expireYear, setExpireYear] = useState(null);
    const [cvv, setCvv] = useState(null);
    //const errorTxt = document.querySelector("#error");
    
    let card = {
        vendor, 
        cardNumber, 
        cardHolder: getCardHolder, 
        expireMonth, 
        expireYear, 
        cvv, 
        active:false
    };

    const checkInputs =()=>{
        if(vendor === null || cardNumber === null || expireMonth === null || expireYear=== null || cvv === null ){
            alert("Please fill in all youre info");
        }else{
            dispatch(addCard(card));
        }
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
                    <input onChange={(e)=>{
                        let cardNumber = e.target.value;
                        let errorTxt = document.querySelector("#cardNumb");
                        if(!/^\d+$/.test(cardNumber)){
                            errorTxt.innerText = "You can only use numbers"
                        }else if(cardNumber.length < 16){
                            errorTxt.innerText = "You need to have 16 digits in youre cardnumber";
                        }else{
                            errorTxt.innerHTML="";
                            setCardNumber(cardNumber);
                        }
                     }} type="text" maxLength={"16"} />
                    </label><p id="cardNumb"></p>
                    <label >Name
                    <input  type="text" value ={getCardHolder} readOnly />
                    </label>
                    <div>
                        <label >Valid thru
                        <input onChange={(e)=>{
                            setExpireMonth(e.target.value);
                          
                        }} type="number" />
                        <input onChange={(e)=>{
                            setExpireYear(e.target.value)
                            }} type="number"/>
                        </label>
                        <label >CVV
                        <input onChange={(e)=>{
                            setCvv(e.target.value);
                            }} type="number"/>
                        </label>
                    </div>
                    <label>Vendor
                        <select onChange={(e)=>{
                            setVendor(e.target.value)
                            }}>
                            <option selected value={""}></option>
                            <option value={"Bank of Magic"}>Bank of Magic</option>
                            <option value={"Visa"}>Visa</option>
                            <option value={"Mastercard"}>Mastercard</option>
                        </select>
                    </label>
                    <span id="error"></span>
                    <Link to={"/"}><button onClick={checkInputs}>Add Card</button></Link>
                </div>
            </div>
        </div>
    )
}

//Skicka Form med klick?? preventDefault