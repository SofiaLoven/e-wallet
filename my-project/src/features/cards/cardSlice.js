import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { useState } from "react";

export const getCardHolder = createAsyncThunk("cardSlice/getCardHolder", async()=>{
    let response = await fetch (`https://randomuser.me/api/`);
    let data = response.json();
    return data;
})

const cardSlice = createSlice({
    name: "cardSlice",
    initialState:{
        card: { //Bryt ut och gör till local state med useState
            vendor: null,
            cardNumber: 0,
            cardHolder: "",
            expireMonth: 0,
            expireYear: 0,
            cvv:0,
            active: false,
        },
        cardArr: [{
            vendor: "Visa",
            cardNumber: 123456789087654,
            cardHolder:"",
            expireMonth: 12,
            expireYear: 24,
            cvv:666,
            active: true,
        }],
        status: null,
    },
    reducers:{
        changeVariable: (state, action)=>{
            const obj = action.payload;
            let { name, value }= obj;
            state.card[name]= value;

        },
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
            let i = action.payload; // Använd key istället??
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
            state.status = "Success!";
            let user = action.payload;
            let {first, last} = user.results[0].name;
            console.log("Hämtar data");
            console.log(first, last);
            state.card.cardHolder = `${first} ${last}`.toUpperCase();         
            state.cardArr[0].cardHolder = `${first} ${last}`.toUpperCase();         
        },
        [getCardHolder.rejected]: (state, action)=>{
            state.status = "Failed..";
        },
    }
})


export const { changeVariable, addCard, activateCard, removeCard } = cardSlice.actions;
export default cardSlice.reducer;

