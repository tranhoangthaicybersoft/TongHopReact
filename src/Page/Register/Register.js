import React, { Component } from 'react'

export default class Register extends Component {

    // Tạo state 2 đối tượng là values và error

    state = {
        values: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDienThoai: '',
            hoTen: ''
        },
        error: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDienThoai: '',
            hoTen: ''
        }
    }

    // Viết hàm xử lý khi người dùng đăng nhập form 
    handleChange = (event) => {
        // Khi dùng thay đổi giá trị của form ( event.tartget ) => Lấy ra 2 giá trị của thẻ là value và name
        const {value , name} = event.target;
        // Xử lý lấy dữ liệu trên value
        let newValues = {...this.state.values};
        newValues.name = value;
    }

    render() {
        return (
            <form>
                <div className="container">
                    <div className="display-4">Đăng ký</div>
                    <div className="form-group">
                        <p>Tài khoản</p>
                        <input name="taiKhoan" className="form-control" onChange={this.handleChange}></input>
                    </div>
                    <div className="form-group">
                        <p>Họ tên</p>
                        <input name="taiKhoan" className="form-control" onChange={this.handleChange}></input>
                    </div>
                    <div className="form-group">
                        <p>Mật khẩu</p>
                        <input name="taiKhoan" className="form-control" onChange={this.handleChange}></input>
                    </div>
                    <div className="form-group">
                        <p>Email</p>
                        <input name="taiKhoan" className="form-control" onChange={this.handleChange}></input>
                    </div>
                    <div className="form-group">
                        <p>Số điện thoại</p>
                        <input name="taiKhoan" className="form-control" onChange={this.handleChange}></input>
                    </div>
                    <div className="form-group">
                        <button className="submit">Đăng ký</button>
                    </div>
                </div>
            </form>
        )
    }
}
