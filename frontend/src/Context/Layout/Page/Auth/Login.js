import React,{useState} from 'react';
import Layout from '../../Layout';
import { toast } from 'react-toastify';
import axios from 'axios';
import {useNavigate,useLocation} from 'react-router-dom';
import '../../../../Styles/AuthStyle.css';
import { useAuth } from '../../../auth';

const Login = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [auth,setAuth] = useAuth();
   
    const navigate = useNavigate();
    const location = useLocation();

    // form function

    const handleSubmit = async (e) =>{
        e.preventDefault();
       try {
        const res = await axios.post(`/api/v1/auth/login`,
        {email,password});
        if(res.data.success){
            alert(res.data.message);

            setAuth({
                ...auth,
                user:res.data.user,
                token:res.data.token,
            });
            localStorage.setItem('auth',JSON.stringify(res.data))
            navigate( location.state||'/');
        }else{
            toast.error(res.data.message);
        }

       } catch (error) {
        console.log(error)
        toast.error("Something went wrong:(")
       }
    };

  return (
    <Layout title="Register">
    <div className="form-container">
<form onSubmit={handleSubmit}>
    <div className="title">LOGIN</div>
<div className="mb-3">


</div>
<div className="mb-3">
<input type="emial" 
value={email} onChange={(e) => setEmail(e.target.value)} required
className="form-control" id="exampleInputPassword1" placeholder='Email'/>
</div>

<div className="mb-3">
<input type="password" 
value={password} onChange={(e) => setPassword(e.target.value)} required
className="form-control" id="exampleInputPassword1" placeholder='Password'/>
</div>


<div className="mb-3">
<button type="button" className="btn btn-primary" 
onClick={()=>{
    navigate('/forgot-password');
            }}>
    Frogot Password
</button>
</div>

<button type="submit" className="btn btn-primary">
    Login
</button>

</form>

    </div>
  
</Layout>
  )
}

export default Login
