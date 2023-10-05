const wrapper =document.querySelector(".sliderWrapper")
const menuItem = document.querySelectorAll(".menuItem")

const products=[
{
    id:1,
    title:"Pendant",
    price: 150,
    colors:[
        {
            code: "black",
            img:"./img/webimg/pendant3.png",
         },
         {
            code: "blue",
            img: "./img/webimg/pendant4.png",
         },
    ],
},

{
    id:2,
    title:"Braclet",
    price: 250,
    colors:[
        {
            code: "black",
            img:"./img/webimg/8244ebf66da0c61a1f775a603d1581ad.jpg",
         },
         {
            code: "blue",
            img: "./img/webimg/braclet4.png",
         },
    ],
},


{
    id:3,
    title:"chain",
    price: 350,
    colors:[
        {
            code: "black",
            img:"./img/webimg/chain3.pmg.png",
         },
         {
            code: "blue",
            img: "./img/webimg/chain4.png",
         },
    ],
},

{
    id:4,
    title:"ring",
    price: 350,
    colors:[
        {
            code: "black",
            img:"./img/webimg/ring3.png",
         },
         {
            code: "blue",
            img: "./img/webimg/ring2.png",
         },
    ],
},

{
    id:5,
    title:"earring",
    price: 150,
    colors:[
        {
            code: "black",
            img:"./img/webimg/earring3.png",
         },
         {
            code: "blue",
            img: "./img/webimg/earring4.png",
         },
    ],
},
];

let choosenProduct=products[0]

const currentProductImg=document.querySelector(".productImg");
const currentProductTitle=document.querySelector(".productTitle");
const currentProductPrice=document.querySelector(".productPrice");
const currentProductColor=document.querySelectorAll(".color");

menuItem.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        // change the current slide
        wrapper.style.transform=`translateX(Rs{-100 * index}vw)`;
        //change the choosen prdt
        choosenProduct=products[index]
      
        //chnge texts of crrntProduct
        currentProductTitle.textContent=choosenProduct.title;
        currentProductPrice.textContent="Rs"+choosenProduct.price;
        currentProductImg.src=choosenProduct.colors[0].img

        currentProductColor.forEach((color,index)=>{
            color.style.backgroundColor=choosenProduct.colors[index].code;
        })
    });
});