import React from 'react';
import Layout from '../Layout';
// import { useSearch } from '../../Context/Search';
import { useSearch } from '../../Search';

const Searches = () => {
    const [values,setValues] = useSearch();
  return (
    <Layout title={'Search results'}>
      <div className="container">
        <div className="text-center">
            <h1>Search Results</h1>
            <h6>{values?.results.length < 1 ? 'No Product is Found...' 
            : `Found ${values?.results.length}`}</h6>
             <div className="d-flex flex-wrap mt-4">
          {values?.results.map((p)=>(
             <div className="card m-2" style={{width: '15rem'}} >
  <img src={`/api/v1/product/product-photo/${p._id}`} className="card-img-top" alt={p.name} />
  <div className="card-body">
    <h5 className="card-title">{p.name}</h5>
    <p className="card-text">{p.description.substring(0,20)}</p>
    <p className="card-text"> $ {p.price}</p>
    <button className='btn btn-primary ms-0.5'>SEE More</button>
    <button className='btn btn-secondary ms-0.5 '>ADD To Cart</button>
  </div>
 </div>        
 ))}
 </div>
        </div>
      </div>
    </Layout>
  )
}

export default Searches;
