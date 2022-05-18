
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AddProduct() {
    let navigate = useNavigate();
    const [data, setData] = useState({

        name: "",
        breed: "",
        price: 0,
        description: "",
        imageUrl: ""
    });



    function Submit(e) {
        e.preventDefault();
        axios.post("https://62811baf1020d8520585969c.mockapi.io/api/v1/products", data).then(

            navigate("/product")

        )
        
    }

    return (
        <div className="main">
            <div className="main-header">
                <div className="mobile-toggle" id="mobile-toggle">
                    <i className='bx bx-menu-alt-right'></i>
                </div>
                <div className="main-title">
                    -Quản lí thú cưng -Thêm mặt hàng
                </div>
            </div>
            <div className="main">
        <div className="main-header">
            <div className="mobile-toggle" id="mobile-toggle">
                <i className='bx bx-menu-alt-right'></i>
            </div>
            <div className="main-title">
                -Quản lí thú cưng -Thêm mặt hàng
            </div>
        </div>
        <div className="page-body">
            <div className="row">
                <div className="col-sm-12">
                    
                    <div className="card">
                            <div className="card-block">
                                <form>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Tên thú cưng</label>
                                        <div className="col-sm-10">
                                            <input value={data.name}
                                                onChange={(e) => setData({ ...data, name: e.target.value })} type="text" className="form-control"
                                            placeholder="Nhập tên thú cưng"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Loại</label>
                                        <div className="col-sm-10">
                                            <input value={data.breed}
                                                onChange={(e) => setData({ ...data, breed: e.target.value })} type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-2 col-form-label">Giá tiền</label>
                                        <div className="col-sm-10">
                                            <input value={data.price}
                                                onChange={(e) => setData({ ...data, price: e.target.value })} type="text" className="form-control"/>
                                        </div>
                                    </div>
                                                <div className="form-group row">
                                                    <label className="col-sm-2 col-form-label">Them anh</label>
                                                    <div className="col-sm-10">
                                                        <input value={data.imageUrl}
                                                    onChange={(e) => setData({ ...data, imageUrl: e.target.value })} type="text" className="form-control"/>
                                                    </div>
                                                </div>
                                            <div className="form-group row">
                                                <label className="col-sm-2 col-form-label">Mô Tả</label>
                                                 <div className="col-sm-10">
                                                     <textarea value={data.description}
                                                onChange={(e) => setData({ ...data, description: e.target.value })} rows="5" cols="5" className="form-control"
                                                    placeholder="Ghi chú mô tả thú cưng" ></textarea>
                                          </div>
                                         </div>
                                         <div className="form-group row" id="nut">
                                            <input onClick={Submit} type='submit' value="Thêm mặt hàng"/>
                                         </div>
                                    </form>
                                </div>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>

        </div>


    )
}
export default AddProduct