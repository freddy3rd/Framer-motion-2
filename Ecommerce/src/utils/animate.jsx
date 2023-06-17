export const animationStart = 1;

export const initialState ={
  fadeIn:{
    opacity: [0,.7],y:["0px","20px"],
    transition:{delay:1}
  },
  fadeOut:{
    y:"-1000px",
    transition:{
      ease:"easeOut",
      type:"spring",
      delay:1
    },
  },
  }

export const fadeInOut = {
  fadeIn:{
    opacity: [0,1,],y:["0px","5px"]
  },
  fadeOut:{
    opacity: [1,0],y:["5px","0px"]
  }
}


export const image_container = {
    hidden:{
            
        width:"10%", 
        transition:{
          type:"spring", 
          damping: 50,
        }
    },
    visible:{
      transition:{
        type: "spring",
        duration: 1
      }
    },

    hover:{
      width:"15%", 
      transition:{
        type:"spring", 
        damping: 50,
      }
    }
  }

  export const overview ={
    overview:{
      flex:1, 
      transition:{
        type:"spring", 
        damping: 50,
      }
  },
 
  }


 