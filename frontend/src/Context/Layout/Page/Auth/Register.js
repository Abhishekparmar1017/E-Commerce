import React,{useState} from 'react';
import Layout from '../../Layout';
import { toast } from 'react-toastify';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import '../../../../Styles/AuthStyle.css';

const Register = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState("");
    const [answer,setanswer] = useState("");
    const navigate = useNavigate();

    // form function

    const handleSubmit = async (e) =>{
        e.preventDefault();
       try {
        const res = await axios.post(`/api/v1/auth/register`,
        {name,email,password,phone,address,answer});
        if(res.data.success){
            alert(res.data.message);
            navigate('/login');
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
        <div className="title">REGISTER</div>
  <div className="mb-3">
    <input type="text" value={name}  onChange={(e) => setName(e.target.value)}  required
    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Full Name'/>
    
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
    <input type="phone" 
    value={phone} onChange={(e) => setPhone(e.target.value)} required
    className="form-control" id="exampleInputPassword1" placeholder='Phone'/>
  </div>

  <div className="mb-3">
    <input type="address"
    value={address}  onChange={(e) => setAddress(e.target.value)} required
    className="form-control" id="exampleInputPassword1" placeholder='Address'/>
  </div>

  <div className="mb-3">
    <input type="answer"
    value={answer}  onChange={(e) => setanswer(e.target.value)} required
    className="form-control" id="exampleInputPassword1" placeholder='Your Favorite Book Name'/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

        </div>
      
    </Layout>
  )
}

export default Register
