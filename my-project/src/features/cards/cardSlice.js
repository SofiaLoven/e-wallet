import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getCardHolder = createAsyncThunk("cardSlice/getCardHolder", async()=>{
        let response = await axios.get(`https://randomuser.me/api/`);
        return response.data;
})

const cardSlice = createSlice({
    name: "cardSlice",
    initialState:{
        getCardHolder:"",
        cardArr: [{
            vendor: "Dwight",
            vendorPic: "../../../public/pictures/dwight.png",
            cardNumber: "1234 5678 9087 6544",
            cardHolder:"",
            expireMonth: 12,
            expireYear: 24,
            cvv:666,
            active: true,
        }],
        status: null,
    },
    reducers:{
        addCard: (state, action)=>{

            if(state.cardArr.length < 4){
                state.cardArr.push(action.payload);
            }else{
                console.log("Du behöver ta bort ett kort först");
            }
        },
        removeCard: (state, action)=>{
            state.cardArr.splice(action.payload, 1);
            console.log(state.cardArr);
        },
        activateCard: (state, action)=>{
            let i = action.payload; 
            let clicked = state.cardArr[i]
            console.log(clicked);

            if(clicked.active){
                alert("You need to have a active card");
            }else{
                clicked.active = true;

                state.cardArr.forEach((card)=>{
                    console.log(clicked.vendor, card.vendor)
                    if(card !== clicked){
                        card.active = false;
                    }
                })
            }
            
        },
        getCardHolder: async ()=>{},

    },
    extraReducers:{
        [getCardHolder.pending]: (state, action)=>{
            state.status = "Loading...";
        },
        [getCardHolder.fulfilled]: (state, action)=>{
    
            let user = action.payload;
            let {first, last} = user.results[0].name;
            //console.log("Hämtar data");
            //console.log(first, last);
            state.getCardHolder = `${first} ${last}`.toUpperCase();    
            state.cardArr[0].cardHolder =  `${first} ${last}`.toUpperCase();         
        },
        [getCardHolder.rejected]: (state, action)=>{
            state.status = "Failed..";
        },
    }
})


export const { addCard, activateCard, removeCard } = cardSlice.actions;
export default cardSlice.reducer;

