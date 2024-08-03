


let setFormDataService = (setFormDataState,data) =>{
     setFormDataState(prevState=>{
         return {...prevState,firstName:data}
     })
}

let validateForm = async (formData) =>{
  if(!formData.firstName){
     return "firstName field Required"
  }
}


export  {setFormDataService,validateForm}