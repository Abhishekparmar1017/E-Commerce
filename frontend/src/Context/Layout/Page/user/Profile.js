import React,{useState,useEffect} from 'react';
import UserManu from '../../../../Context/Layout/UserMenu.js'
import Layout from '../../Layout';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useAuth } from '../../../auth';
import {useNavigate} from 'react-router-dom';

const Profile = () => {
  // context
  const [auth,setAuth] = useAuth();
// satte
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [phone,setPhone] = useState("");
  const [address,setAddress] = useState("");
  const navigate = useNavigate();

  // get user data 9:16:48

  useEffect(()=>{
    const {email,name,phone,address} = auth?.user;
    setName(name);
    setPhone(phone);
    setEmail(email);
    setAddress(address);
  },[auth?.user]);
  // form function

  const handleSubmit = async (e) =>{
    e.preventDefault();
   try {
    const {data} = await axios.put(`/api/v1/auth/profile`,
    {name,email,password,phone,address});

    if(data?.error){
      toast.error(data?.error)
    }else{
      setAuth({...auth,user:data?.updateUser})
      let ls  = localStorage.getItem("auth")
      ls = JSON.parse(ls)
      ls.user = data.updateUser
      localStorage.setItem('auth',JSON.stringify(ls))
      toast.success('Profile Update Successfully')
    }

   } catch (error) {
    console.log(error)
    toast.error("Something went wrong:(")
   }
};

  return (
    <Layout title={'Your profile'}>
        <div className="container-flui p-3 m-3">

        <div className="row">
            <div className="col-md-3">
               <UserManu />
            </div>
            <div className="col-md-9">
            <div className="form-container">
    <form onSubmit={handleSubmit}>
        <div className="title">USER PROFILE</div>
  <div className="mb-3">
    <input type="text" value={name}  onChange={(e) => setName(e.target.value)}  
    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Full Name'/>
    
  </div>
  <div className="mb-3">
    <input type="emial" 
    value={email} onChange={(e) => setEmail(e.target.value)}  disabled
    className="form-control" id="exampleInputPassword1" placeholder='Email'/>
  </div>

  <div className="mb-3">
    <input type="password" 
    value={password} onChange={(e) => setPassword(e.target.value)} 
    className="form-control" id="exampleInputPassword1" placeholder='Password'/>
  </div>

  <div className="mb-3">
    <input type="phone" 
    value={phone} onChange={(e) => setPhone(e.target.value)} 
    className="form-control" id="exampleInputPassword1" placeholder='Phone'/>
  </div>

  <div className="mb-3">
    <input type="address"
    value={address}  onChange={(e) => setAddress(e.target.value)} 
    className="form-control" id="exampleInputPassword1" placeholder='Address'/>
  </div>
 
  <button type="submit" className="btn btn-primary">UPDATE</button>
</form>

        </div>
            </div>
</div>
        </div>
      
    </Layout>
  )
}

export default Profile
