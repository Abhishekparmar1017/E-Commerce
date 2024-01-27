import React from 'react';
import Layout from '../../Layout';
import UserMenu from '../../UserMenu';
import { useAuth } from '../../../auth';

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={'Dashboard'}>

      <div className="container-flui m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu/>
            </div>
            <div className="col-md-9">
              <div className="card w-75 p-3">
                <h3>User Name:{auth?.user?.name}</h3>
                <h3>User Email:{auth?.user?.email}</h3>
                <h3>User Addres: {auth?.user?.address}</h3>
              </div>
            </div>
        </div>
      </div>
      
    </Layout>
  )
}

export default Dashboard
