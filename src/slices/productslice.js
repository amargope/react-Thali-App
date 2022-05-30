import { createSlice } from "@reduxjs/toolkit";



const initialState={
cart:[],
totalPrice:0,
products:[
    {
        id: 1,
        name: "chapati",
        imgdata: "https://images.pexels.com/photos/7129400/pexels-photo-7129400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 15,
       
    },
    {
        id: 2,
        name: "pickle",
        imgdata: "https://i.ytimg.com/vi/SsDTvbBniJs/maxresdefault.jpg",
       
        price: 20,
       
    },
    {
        id: 3,
        name: "Curd",
        imgdata: "https://th.bing.com/th/id/OIP.912gbIhzxVEfwK0n_NOoIgHaEw?pid=ImgDet&rs=1",
       
        price: 30,
       
    },
    {
        id: 4,
        name: "sweet",
        imgdata: "https://th.bing.com/th/id/R.5985f8fe59d5f372b9a52a56c64ba0a5?rik=muYdi34g4OhhzA&riu=http%3a%2f%2fwww.cakeindustry.in%2fwp-content%2fuploads%2f2015%2f06%2fgulab_jamun.jpg&ehk=u%2bATwePmCumFC7ji%2bUoA82SsSyIVS5yCe8tzb0SCtlg%3d&risl=&pid=ImgRaw&r=0",
       
        price: 50,
       
    },
    {
        id: 5,
        name: "Daal",
        imgdata: "https://www.zeelskitchen.com/wp-content/uploads/2015/09/Dal-Tadka-Recipe.jpg",
       
        price: 80,
       
    },
    {
        id: 6,
        name: "Panner Sabji",
        imgdata: "https://th.bing.com/th/id/R.62cdae20a56d21f54701e916c853232c?rik=KFdIKwuUoWxHZQ&riu=http%3a%2f%2fwww.ezpzcooking.com%2fwp-content%2fuploads%2f2015%2f12%2fpaneer-do-pyaza-featured.jpg&ehk=ihGjSW%2fuYPaPSHyoDCslxZh0y8qP2uCOwOPkqcUUUXM%3d&risl=&pid=ImgRaw&r=0",
       
        price: 280,
       
    },
    {
        id: 7,
        name: "Daal khichdi",
        imgdata: "https://barefeetinthekitchen.com/wp-content/uploads/2012/08/turmeric-rice-1.jpg",
       
        price: 120,
       
    },
    {
        id: 8,
        name: "PuriBhaji",
        imgdata: "https://i.ytimg.com/vi/Vp71w3hSa70/maxresdefault.jpg",
       
        price: 140,
       
    },
    {
        id: 9,
        name: "Thali",
        imgdata: "https://curlytales.com/wp-content/uploads/2017/07/gujarati-thali.jpg",
       
        price: 320,
       
    },
    {
        id: 10,
        name: "aamras",
        imgdata: "https://th.bing.com/th/id/OIP.6SbwpFupVV5bKRwKTLWzEgHaLL?pid=ImgDet&w=612&h=924&rs=1",
       
        price: 140,
       
    },
    {
        id: 11,
        name: "icecream",
        imgdata: "https://th.bing.com/th/id/OIP.qYL4i9uvgmwsvT5-ThS7oAHaLT?pid=ImgDet&rs=1",
       
        price: 70,
       
    },
    {
        id: 12,
        name: "Paav Bhaji",
        imgdata: "https://th.bing.com/th/id/R.eaa90f524d230d4abae15d57043ff937?rik=ugqsTtYHC6gf3A&riu=http%3a%2f%2fblog.raynatours.com%2fwp-content%2fuploads%2f2015%2f03%2fPav-bhaji.jpg&ehk=yuRo55jjZdkRcAA5rEEQ4crhjTe4TrvE5O4F0WOiC9s%3d&risl=&pid=ImgRaw&r=0",
       
        price: 140,
       
    },




]


}

export const productslice=createSlice({

    name:'products',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
           state.cart.push(action.payload)
           state.totalPrice=state.totalPrice+action.payload.price
           console.log(state.totalPrice)
        }
    }

})

export const {addToCart} =productslice.actions;
export default productslice.reducer;