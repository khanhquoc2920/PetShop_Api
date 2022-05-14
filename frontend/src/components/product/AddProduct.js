import React from 'react'

function AddProduct() {
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
        <div className="main-content">
            <div className="row">
                
            </div>
            <div className="box">
                <div className="box-header">
                    <div className="control">
                  
                    <div className="row">
                    <div className="col-md-6">
                    <form action="">
                        <label for="fname"><strong>Tên thú cưng: </strong></label>
                        <input type="text" id="fname" name="fname"/>
                    </form>
                    </div>
                    <div className="col-md-6">
                    <form action="">
                            <label for="cars"><strong>Giống chó: </strong></label>
                            <select name="cars" id="cars">
                              <option value="volvo">CHIHUAHUA</option>
                              <option value="saab">CORGI</option>
                              <option value="opel">PITBULL</option>
                              <option value="audi">PUG</option>
                            </select>
                    </form>
                    </div>
                    </div>
                    <form action="">
                        <label for="img"><strong>Thêm ảnh: </strong></label>
                        <input type="file" id="img" name="img" accept="image/*"/>
                    </form>
                    <br/>
                    <form action="">
                            <p><label for="Des"><strong>Mô tả: </strong></label></p>
                        <br/>
                            <textarea name="content" id="editor">
                                &lt;p&gt;&lt;/p&gt;
                            </textarea>
                    </form>
                    <br/>
                    <input type="button" value="THÊM MẶT HÀNG"/>
                    
                    </div>
                </div>
            </div>
        </div>
       
    </div>
   
   
  )
}
export default AddProduct