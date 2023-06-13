import sneaker from '../assets/sneacker.png'
import model_man from '../assets/model_man.png'

export const image_arr = [
    {
    id: crypto.randomUUID(),
    bgGradeint:"bg-custom-gradient-1", 
    image:{
        url: sneaker,
        width:"unset",
        height:"unset",
    },
    quote: {
        text:"Walk in style, rock good sneakers.",
        color:"",
    } ,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque atque voluptatum ut nobis magnam? Debitis aliquid tempore accusantium id perferendis vero deleniti alias dignissimos, similique voluptate repudiandae beatae placeat sint asperiores animi dolore earum in, assumenda ipsa nostrum, ratione eaque enim veritatis non! Repudiandae quos modi quidem ipsum animi excepturi saepe totam, ratione quia maxime! Unde error odit provident. "
    },
    {
    id: crypto.randomUUID(),
    bgGradeint:"bg-custom-gradient-2", 
    image:{
        url: model_man,
        width:"450px",
        height:"100%",
    },
    quote: {
        text:"Elevate your look, elevate your mood.",
        color:"",
    } ,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque atque voluptatum ut nobis magnam? Debitis aliquid tempore accusantium id perferendis vero deleniti alias dignissimos, similique voluptate repudiandae beatae placeat sint asperiores animi dolore earum in, assumenda ipsa nostrum, ratione eaque enim veritatis non! Repudiandae quos modi quidem ipsum animi excepturi saepe totam, ratione quia maxime! Unde error odit provident. "
    },
]