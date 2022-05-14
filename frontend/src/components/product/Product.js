import axios from 'axios';
import React from 'react'
import { useEffect ,useState} from 'react';

const Product = ()=> {

    const [allPro,getAllPro] = useState([]);

    async function getData(){
        const res = await axios.get("http://localhost/v1/products")
        console.log(res.data)
        return res;
    }

    useEffect(()=>{
          getData()
          getData().then((res)=> getAllPro(res.data));
          getData().catch((err) => console.log(err));
    },[allPro]);
    
    function deletepro(id){  
        axios.delete(`http://localhost/v1/products/${id}`)  
          .then(res => {  
            getData()  
          })  
        
      }  

  return (
    <div className="main">
        <div className="main-header">
            <div className="mobile-toggle" id="mobile-toggle">
                <i className='bx bx-menu-alt-right'></i>
            </div>
            <div className="main-title">
                Quản lí thú cưng
            </div>
        </div>
        <div className="main-content">

            <div className="row">
                <div className="col-12">
                 
                    <div className="box">
                        <div className="box-header">
                        <a href="/addProduct"><i className='bx bx-add-to-queue bx-sm'></i> Thêm thú cưng</a>
                        </div>
                        <div className="box-body overflow-scroll">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Hình ảnh </th>
                                        <th>Tên thú cưng</th>
                                        <th>Ngày thêm</th>
                                        <th>Trạng Thái Vận Chuyển</th>
                                    
                                        <th>Giá</th>
                                        <th>Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   {allPro.map((pro)=>{
                                       return (
                                           
                                       
                                        <tr key={pro.id}>
                                        <td >{pro.id}</td>
                                        <td>
                                            <div className="order-owner">
                                                <img src={pro.imageUrl} alt="user image"/>
                                                <span></span>
                                            </div>
                                        </td>
                                        <td>
                                            <span>{pro.name}</span>
                                        </td>
                                        <td>2021-05-09</td>
                                        <td>
                                            <span className="order-status order-ready">
                                                Sẵn sàng giao hàng
                                            </span>
                                        </td>
                                        
                                        <td>{pro.price}</td>
                                        <td>
                                            <div className="manage">
                                                <a href="#"><i className='bx bx-edit bx-md'></i></a>
                                                <button onClick={()=> deletepro(pro.id)}><i className='bx bx-trash bx-md'></i></button>
                                                </div>

                                        </td>
                                        <td>

                                        </td>
                                    </tr>
                                     
                                           
                                       )
                                
                                   })}
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                 
                </div>
            </div>
        </div>
       
    </div>
  )
}
export default Product