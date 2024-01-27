import React,{useState} from 'react';
import Layout from '../../Layout';
import { toast } from 'react-toastify';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import '../../../../Styles/AuthStyle.css';


const ForgotPassword = () => {
    const [email,setEmail] = useState("");
    const [newPassword,setNewPassword] = useState("");
    const [answer,setAnswer] = useState("");
   
    const navigate = useNavigate();


    // form function

    const handleSubmit = async (e) =>{
        e.preventDefault();
       try {
        const res = await axios.post(`/api/v1/auth/forgot-password`,
        {email,newPassword,answer});
        if( res.data.success){
            alert(res.data.message);
            navigate('/login');
        }else{
            toast.error( res.data.message);
        }

       } catch (error) {
        console.log(error)
        toast.error("Something went wrong :(")
       }
    };
  return (
    <Layout title={'Forgot-password'}>
      <div className="form-container">
<form onSubmit={handleSubmit}>
    <div className="title">RESET PASSWOED</div>
<div className="mb-3">


</div>
<div className="mb-3">
<input type="emial" 
value={email} onChange={(e) => setEmail(e.target.value)} required
className="form-control" id="exampleInputPassword1" placeholder='Email'/>
</div>

<div className="mb-3">
<input type="text" 
value={answer} onChange={(e) => setAnswer(e.target.value)} required
className="form-control" id="exampleInputPassword1" placeholder='Enter your favorite Book Name'/>
</div>

<div className="mb-3">
<input type="password" 
value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required
className="form-control" id="exampleInputPassword1" placeholder='Password'/>
</div>


<div className="mb-3">
<button type="submit" className="btn btn-primary">
    RESET
</button>
</div>

</form>

    </div>
    </Layout>
  )
}

export default ForgotPassword
