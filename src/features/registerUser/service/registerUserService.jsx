import { Constants } from "../../../utils/Constant"



let setFormDataService = (setFormDataState,data) =>{
     setFormDataState(prevState=>{
         return {...prevState,firstName:data}
     })
}

let validateForm = async (formData) =>{

   
    if(!formData.firstName){
      return 'firstName is required.'
    }

    if(!formData.lastName){
      return 'lastName is required.'
    }

    if(!formData.phoneNumber){
      return 'phoneNumber is required.'
    }

    if(!formData.email){
      return 'email is required.'
    }

    if(!formData.email){
      return 'profilePicture is required.'
    }

    if(!formData.password){
      return 'password is required.'
    }

    if(!formData.confirmPassword){
      return 'confirmPassword is required.'
    }


    if(!formData.country){
      return 'country is required.'
    }

    if(!formData.currency){
      return 'currency is required.'
    }
    
  
  }

  const getBase64String = async (file)=>{
    const myFile =file
    const fileReader = new FileReader()
      return new Promise((resolve,reject)=>{
           if(!myFile){
            reject('file cannot be null')
            return
           }
           fileReader.onloadend = () => {
            resolve(fileReader.result)
           }

           fileReader.readAsDataURL(myFile)

      })
  }

  let registerUser = async (data) =>{

    return fetch(`${Constants.BASE_URL}/register`,{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
  }

  const verifyEmail = async (data) => {
    return fetch(`${Constants.BASE_URL}/verify-email`,{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    }) 
  }
export  {setFormDataService,validateForm,getBase64String,registerUser,verifyEmail}