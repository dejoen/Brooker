


// eslint-disable-next-line react/prop-types
let PopUpScreen = ({children}) =>{ 

  return (
    <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center z-50">
 <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-95 flex place-items-center justify-center p-4" >
    
 </div>
 <div className="bg-white z-50 h-80 w-full m-8 md:w-1/2 text-black">

        {children}
    </div>
   
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export let closePopUpScreen = () => {

return (
    
    
 document.querySelector('.modal').style.display='none'
           
    
)

}

// eslint-disable-next-line react-refresh/only-export-components
export let openPopUpScreen = () => {

    return (
        
        
     document.querySelector('.modal').style.display='flex'
               
        
    )
    
    }
export default PopUpScreen