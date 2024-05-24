import React, {useState} from 'react'
import axios from 'axios'
import * as YUP from 'yup'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'


let loginSchema = YUP.object({
  email : YUP.string().required("Insert Email Id"),
  password : YUP.string().required("Insert Password ")
})

const Login = () => {
  let navigate = useNavigate();
  let [errmsg, setErrmsg] = useState("");
  let [spinner, setSpinner] = useState(false);
  let loginform = useFormik({
    initialValues :{
      email :"",
      password :""
    },
    onSubmit : async(formdata)=>{
      setSpinner(true);
      try{

        let response = await axios.post("https://api.escuelajs.co/api/v1/auth/login", formdata);
        localStorage.setItem("access-token", response.data.access_token);
        navigate("/");
      }catch{
        setSpinner(false);
        setErrmsg("This Email And Password is Incorrect");
      }
      

    }
  })






  return (
    <>
    <div className='container '>
      <div className='row'>
        <form onSubmit={loginform.handleSubmit}> 
        <div className='col-md-6 offset-md-3'> 
        <br/>
        <br/>
        <div className='card border border-dark '>
          <div className='card-header bg-dark'> 
        <h3 className='text-center text-light'> Login </h3>

          </div>
          <div className='card-body '>

        <div className='my-3'>
          <label> Username/Email</label> 
          <input type='text' name='email' onChange={loginform.handleChange} className={'form-control ' + (loginform.errors.email && loginform.touched.email ? 'is-invalid' : '')}/>
        </div>

        <div className='my-3'>
          <label>Password</label> 
          <input type='password' name='password' onChange={loginform.handleChange} className={'form-control ' + (loginform.errors.password && loginform.touched.password ? 'is-invalid' : '')}/>
        </div>

          </div>
          <div className='card-footer'>
            <div className='d-grid gape-2'>
        <button type='submit' className='btn btn-warning '> Login {spinner  ? <span className='spinner-border spinner-border-sm'> </span> : ''} </button>

        <br/> 
        <p className='text-danger text-center'>{errmsg} </p>
        
            </div>

             </div>
           </div>


        
        </div> 
        
        </form>
        </div> 

    </div>

    
    </>
  )
}

export default Login