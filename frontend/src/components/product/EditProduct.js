import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import {  useParams} from 'react-router-dom';
export default function () {

    const[name,setName] = useState("");
    const[price,setPrice]= useState("");
    const[breed,setBreed]= useState("");
    const[image,setImage]= useState("");
    const[description,setDescription]= useState("");


    

    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://62811baf1020d8520585969c.mockapi.io/api/v1/products/${id}`).then((res)=>{

        setName(res.data.name);
        setPrice(res.data.price);
        setBreed(res.data.breed);
        setImage(res.data.image);
        setDescription(res.data.description);

        })
    },[]);


  return (
    <div className="main">
    <div className="main-header">
        <div className="mobile-toggle" id="mobile-toggle">
            <i className='bx bx-menu-alt-right'></i>
        </div>
        <div className="main-title">
            -Quản lí thú cưng- Cập nhật
        </div>
    </div>
    <div className="main-content">
        <div className="row">

        </div>
        <div className="box">
            <div className="box-header">
                <div className="control">

                    <div className="row">

                        <div className="col-md-6">
                            <form  >
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Tên thú cưng</label>
                                    <input value={name} onChange={(e) => setName(e.target.value)} 
                                        type="text" className="form-control" />
                                </div>

                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Loại</label>
                                    <input value={price} onChange={(e) => setPrice(e.target.value)} 
                                        type="text" className="form-control" />
                                </div>

                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Giá tiền</label>
                                    <input value={breed} onChange={(e) => setBreed(e.target.value)} 
                                        type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1">mô tả</label>
                                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} 
                                        className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div className="custom-file">

                                    <label className="custom-file-label" for="customFile">Them anh</label>
                                    <input value={image} onChange={(e) => setImage(e.target.value)} 
                                        type="text" className="custom-file-input" id="customFile" />

                                </div>


                                <input  type='submit' />
                            </form>
                        </div>
                    </div>

                    <br />


                </div>
            </div>
        </div>
    </div>

</div>

  )
}
