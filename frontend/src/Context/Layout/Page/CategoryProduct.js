import React,{useState,useEffect} from 'react';
import Layout from '../Layout';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';


const CategoryProduct = () => {
    const params = useParams();
    const navigate = useNavigate();
        const [products,setProducts] = useState([]);
        const [categorys,setCategorys] = useState([]);

        useEffect(()=>{
            if(params?.slug) getProductsByCat()
        },[params?.slug]);
        const getProductsByCat = async() =>{
            try {
                const {data} = await axios.get(`/api/v1/product/product-category/${params.slug}`);
                setProducts(data?.products)
                setCategorys(data?.categorys)
            } catch (error) {
                console.log(error)
            }
        };
  return (
    <Layout>
      <div className="container mt-3">
       
        <h4 className='text-center'>{categorys?.name}</h4>
        <h6 className='text-center'>{products?.length}result found</h6>
        <div className="row">
        <div className="d-flex flex-wrap">
          {products?.map((p)=>(
             <div className="card m-2" style={{width: '15rem'}} >
  <img src={`/api/v1/product/product-photo/${p._id}`} className="card-img-top" alt={p.name} />
  <div className="card-body">
    <h5 className="card-title">{p.name}</h5>
    <p className="card-text">{p.description.substring(0,20)}</p>
    <p className="card-text"> $ {p.price}</p>
    <button className='btn btn-primary ms-0.5' onClick={() => navigate(`/product/${p.slug}`) }>See More</button>
    <button className='btn btn-secondary ms-0.5 '>Add To Cart</button>
  </div>
 </div>        
 ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CategoryProduct;
