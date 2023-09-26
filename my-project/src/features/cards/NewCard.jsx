import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "./cardSlice";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import style from "./NewCard.module.css"



export const NewCard =()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {getCardHolder} = useSelector((store)=>store.cards)
    const [vendor, setVendor] = useState(null);
    const [vendorPic, setVendorPic] = useState(null);
    const [cardNumber, setCardNumber] = useState(null);
    const [expireMonth, setExpireMonth] = useState(null);
    const [expireYear, setExpireYear] = useState(null);
    const [cvv, setCvv] = useState(null);
    const errorExp = document.querySelector("#expDate");
    
    let card = {
        vendor,
        vendorPic, 
        cardNumber, 
        cardHolder: getCardHolder, 
        expireMonth, 
        expireYear, 
        cvv, 
        active:false
    };

    const checkInputs =()=>{
        if(vendor === null || cardNumber === null || expireMonth === null || expireYear=== null || cvv === null ){
            document.querySelector("#error").innerText ="Please fill in all youre info";

        }else{
            dispatch(addCard(card));
            navigate("/");
        }
    }

    return(
        <div className={style.newCardPage}>
            <div className={style.preview}>
                <p>Preview of new Card</p>
                <Card {...card}/>
            </div>
            <div className={style.addNew}>
                <input onChange={(e)=>{
                    let cardNumber = e.target.value;
                    let errorTxt = document.querySelector("#cardNumb");
                    if(!/^\d+$/.test(cardNumber)){
                        errorTxt.innerText = "You can only use numbers"
                    }else if(cardNumber.length < 16){
                        errorTxt.innerText = "You need to have 16 digits in youre cardnumber";
                    }else{
                        errorTxt.innerHTML="";
                        let spacedCardNumber = cardNumber.replace(/.{4}/g, '$& ')
                        setCardNumber(spacedCardNumber);
                    }
                    }} type="text" maxLength={"16"} placeholder="Card number"/>
                <p id="cardNumb" className={style.error}></p>
                <input  type="text" value ={getCardHolder} readOnly />
                <div>
                    <div className={style.expDate}>
                        <input onChange={(e)=>{
                            let expMonth = e.target.value;
                            if(expMonth > 12 || expMonth <= 0){
                                errorExp.innerText= "On what planet are you? This planet has only 12 months"
                            }else{
                                errorExp.innerText="";
                                if(expMonth<10){
                                    let newExpMonth = `0${expMonth}`;
                                    setExpireMonth(newExpMonth);
                                }else{
                                    errorExp.innerText="";
                                    setExpireMonth(expMonth);
                                }
                            }   
                        }} type="number" placeholder="Date" max={12} min={0}/>
                        <input onChange={(e)=>{
                            let expYear = e.target.value;
                            if(expYear<23){
                                errorExp.innerText= "Please choose a yeare in the future.."
                            }else if(expYear>99){
                                errorExp.innerText = "This is not at year."
                            }else{
                                errorExp.innerText="";
                                setExpireYear(expYear);
                            }
                            }} type="number" placeholder="Year" min={23}/>
                        <input onChange={(e)=>{
                            let cvv = e.target.value;
                            let errorCvv = document.querySelector("#cvv");
                            if(cvv > 999){
                                errorCvv.innerText= "You can only have three digits";
                            }else if(cvv < 100 ){
                                errorCvv.innerText="You need three digits";
                            }else{
                                errorCvv.innerText=""
                                setCvv(cvv);
                            }
                            }} type="number" placeholder="cvv" max={999} min={0}/>
                    </div>
                    <p id="expDate" className={style.error}></p>
                    <p id="cvv" className={style.error}></p>
                </div>
                    <select onChange={(e)=>{
                        let vendor = e.target.value;
                        setVendor(vendor)
                        if(vendor === "Michael"){
                            setVendorPic("../../../public/pictures/michael.png");
                        }else if(vendor === "Dwight"){
                            setVendorPic("../../../public/pictures/dwight.png");
                        }else if(vendor === "Jim"){
                            setVendorPic("../../../public/pictures/jim.png")
                        }else if(vendor=== "Kevin"){
                            setVendorPic("../../../public/pictures/kevin.png")
                        }else{
                            setVendorPic("");
                        }
                        }}>
                        <option selected disabled>Choose youre bankman</option>
                        <option value={"Michael"}>Michael</option>
                        <option value={"Dwight"}>Dwight</option>
                        <option value={"Jim"}>Jim</option>
                        <option value={"Kevin"}>Kevin</option>
                    </select>
                <span id="error" className={style.error}></span>
                <button onClick={checkInputs}>Add Card</button>
            </div>
        </div>
    )
}

