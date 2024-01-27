import React, { useEffect, useState } from 'react';
import Layout from '../../Layout';
import UserMenu from '../../UserMenu';
import axios from 'axios';
import { useAuth } from '../../../auth';
import moment from 'moment';

const Orders = () => {
  const [orders,setOrder] = useState([]);
  const [auth,setAuth] = useAuth();
  const getOrders = async() =>{
    try {
      const {data} = await axios.get('/api/v1/auth/orders');
      setOrder(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() =>{
    if(auth?.token) getOrders();
  },[auth?.token]);

  return (
    <Layout title={"User Order"}>
        <div className="container-flui p-3 m-3">

        <div className="row">
            <div className="col-md-3">
                <UserMenu/>
            </div>
            <div className="col-md-9">
                <h1 className='text-center'>All Orders</h1>
                {
                  orders?.map((o,i) =>{
                    return (
                      <div className="border shadow">
                        <table className='table'>
                          <thead>
                            <tr>
                              <th scope='col'>#</th>
                              <th scope='col'>Status</th>
                              <th scope='col'>Buyer</th>
                              <th scope='col'>Order Date</th>
                              <th scope='col'>Payment</th>
                              <th scope='col'>Quantity</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{i + 1}</td>
                              <td>{o?.status}</td>
                              <td>{o?.buyer?.name}</td>
                              <td>{moment(o?.createAt).fromNow()}</td>
                              <td>{o?.payment.success ? "Success" : "Falied"}</td>
                              <td>{o?.products?.length}</td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="container">
                        {o?.products?.map((p,i) =>(
                            <div className="row mb-2 p-3 card flex-row">
                                <div className="col-md-4">
                                <img src={`/api/v1/product/product-photo/${p._id}`} className="card-img-top" 
                                alt={p.name} width="100px" height="100px" />
                               <p>
                                {p.name}
                               </p>
                               <p>{p.description.substring(0,30)}</p>
                               <hp>Price:{p.price}</hp>
                            </div>
                            </div>
                        ))}
                        </div>
                      </div>
                    );
                  })}
            </div>
</div>
        </div>
      
    </Layout>
  )
}

export default Orders;
