import React from 'react'

 function Home() {
  return (
    <div className="main">
    <div className="main-header">
        <div className="mobile-toggle" id="mobile-toggle">
            <i className='bx bx-menu-alt-right'></i>
        </div>
        <div className="main-title">
            dashboard
        </div>
    </div>
    <div className="main-content">
        <div className="row">
            <div className="col-3 col-md-6 col-sm-12">
                <div className="box box-hover">
             
                    <div className="counter">
                        <div className="counter-title">
                            Tổng hàng đã bán
                        </div>
                        <div className="counter-info">
                            <div className="counter-count">
                                6578
                            </div>
                            <i className='bx bx-shopping-bag'></i>
                        </div>
                    </div>
              
                </div>
            </div>
            <div className="col-3 col-md-6 col-sm-12">
                <div className="box box-hover">
                 
                    <div className="counter">
                        <div className="counter-title">
                            Feedback
                        </div>
                        <div className="counter-info">
                            <div className="counter-count">
                                30.5%
                            </div>
                            <i className='bx bx-chat'></i>
                        </div>
                    </div>
          
                </div>
            </div>
            <div className="col-3 col-md-6 col-sm-12">
                <div className="box box-hover">
            
                    <div className="counter">
                        <div className="counter-title">
                            Tổng tiền
                        </div>
                        <div className="counter-info">
                            <div className="counter-count">
                                $9,780
                            </div>
                            <i className='bx bx-line-chart'></i>
                        </div>
                    </div>
               
                </div>
            </div>
            <div className="col-3 col-md-6 col-sm-12">
                <div className="box box-hover">
                
                    <div className="counter">
                        <div className="counter-title">
                            Khách hàng đã ghé thăm
                        </div>
                        <div className="counter-info">
                            <div className="counter-count">
                                690
                            </div>
                            <i className='bx bx-user'></i>
                        </div>
                    </div>
         
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-3 col-md-6 col-sm-12">
           
                <div className="box f-height">
                    <div className="box-header">
                        Danh sách bán chạy
                    </div>
                    <div className="box-body">
                        <ul className="product-list">
                            <li className="product-list-item">
                                <div className="item-info">
                                    <img src="./images/thumb-7.jpg" alt="product image"/>
                                    <div className="item-name">
                                        <div className="product-name">Jacket</div>
                                        <div className="text-second">Cloths</div>
                                    </div>
                                </div>
                                <div className="item-sale-info">
                                    <div className="text-second">Giá</div>
                                    <div className="product-sales">$5,930</div>
                                </div>
                            </li>
                            <li className="product-list-item">
                                <div className="item-info">
                                    <img src="./images/sneaker.jpg" alt="product image"/>
                                    <div className="item-name">
                                        <div className="product-name">sneaker</div>
                                        <div className="text-second">Cloths</div>
                                    </div>
                                </div>
                                <div className="item-sale-info">
                                    <div className="text-second">Giá</div>
                                    <div className="product-sales">$5,930</div>
                                </div>
                            </li>
                            <li className="product-list-item">
                                <div className="item-info">
                                    <img src="./images/headphone.jpg" alt="product image"/>
                                    <div className="item-name">
                                        <div className="product-name">headphone</div>
                                        <div className="text-second">Devices</div>
                                    </div>
                                </div>
                                <div className="item-sale-info">
                                    <div className="text-second">Giá</div>
                                    <div className="product-sales">$5,930</div>
                                </div>
                            </li>
                            <li className="product-list-item">
                                <div className="item-info">
                                    <img src="./images/backpack.jpg" alt="product image"/>
                                    <div className="item-name">
                                        <div className="product-name">Backpack</div>
                                        <div className="text-second">Bags</div>
                                    </div>
                                </div>
                                <div className="item-sale-info">
                                    <div className="text-second">Giá</div>
                                    <div className="product-sales">$5,930</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
       
            </div>
            <div className="col-4 col-md-6 col-sm-12">
             
                <div className="box f-height">
                    <div className="box-body">
                        <div id="category-chart"></div>
                    </div>
                </div>
            
            </div>
            <div className="col-5 col-md-12 col-sm-12">
          
                <div className="box f-height">
                    <div className="box-header">
                        khách hàng
                    </div>
                    <div className="box-body">
                        <div id="customer-chart"></div>
                    </div>
                </div>
             
            </div>
            <div className="col-12">
             
                <div className="box">
                    <div className="box-header">
                        Recent orders
                    </div>
                    <div className="box-body overflow-scroll">
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Khách hàng</th>
                                    <th>Ngày</th>
                                    <th>Trạng Thái Vận Chuyển</th>
                                    <th>Thanh Toán</th>
                                    <th>Tổng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>#2345</td>
                                    <td>
                                        <div className="order-owner">
                                            <img src="./images/user-image.jpg" alt="user image"/>
                                            <span>tuat tran anh</span>
                                        </div>
                                    </td>
                                    <td>2021-05-09</td>
                                    <td>
                                        <span className="order-status order-ready">
                                            Sẵn sàng giao hàng
                                        </span>
                                    </td>
                                    <td>
                                        <div className="payment-status payment-pending">
                                            <div className="dot"></div>
                                            <span>Chưa thanh toán</span>
                                        </div>
                                    </td>
                                    <td>$123.45</td>
                                </tr>
                                <tr>
                                    <td>#2345</td>
                                    <td>
                                        <div className="order-owner">
                                            <img src="./images/user-image-2.png" alt="user image"/>
                                            <span>John doe</span>
                                        </div>
                                    </td>
                                    <td>2021-05-09</td>
                                    <td>
                                        <span className="order-status order-shipped">
                                            Đã giao hàng
                                        </span>
                                    </td>
                                    <td>
                                        <div className="payment-status payment-paid">
                                            <div className="dot"></div>
                                            <span>Đã thanh toán</span>
                                        </div>
                                    </td>
                                    <td>$123.45</td>
                                </tr>
                                <tr>
                                    <td>#2345</td>
                                    <td>
                                        <div className="order-owner">
                                            <img src="./images/user-image-3.png" alt="user image"/>
                                            <span>evelyn</span>
                                        </div>
                                    </td>
                                    <td>2021-05-09</td>
                                    <td>
                                        <span className="order-status order-shipped">
                                            Đã giao hàng
                                        </span>
                                    </td>
                                    <td>
                                        <div className="payment-status payment-paid">
                                            <div className="dot"></div>
                                            <span>Đã thanh toán</span>
                                        </div>
                                    </td>
                                    <td>$123.45</td>
                                </tr>
                                <tr>
                                    <td>#2345</td>
                                    <td>
                                        <div className="order-owner">
                                            <img src="./images/user-image-2.png" alt="user image"/>
                                            <span>John doe</span>
                                        </div>
                                    </td>
                                    <td>2021-05-09</td>
                                    <td>
                                        <span className="order-status order-shipped">
                                            Đã giao hàng
                                        </span>
                                    </td>
                                    <td>
                                        <div className="payment-status payment-paid">
                                            <div className="dot"></div>
                                            <span>Đã thanh toán</span>
                                        </div>
                                    </td>
                                    <td>$123.45</td>
                                </tr>
                                <tr>
                                    <td>#2345</td>
                                    <td>
                                        <div className="order-owner">
                                            <img src="./images/user-image-3.png" alt="user image"/>
                                            <span>evelyn</span>
                                        </div>
                                    </td>
                                    <td>2021-05-09</td>
                                    <td>
                                        <span className="order-status order-shipped">
                                            Đã giao hàng
                                        </span>
                                    </td>
                                    <td>
                                        <div className="payment-status payment-paid">
                                            <div className="dot"></div>
                                            <span>Đã thanh toán</span>
                                        </div>
                                    </td>
                                    <td>$123.45</td>
                                </tr>
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
export default Home