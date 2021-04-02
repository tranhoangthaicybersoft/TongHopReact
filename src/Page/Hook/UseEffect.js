import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function UseEffect() {
    // State ban đầu là mảng trống
    const [arrPhim, setArrPhim] = useState([]);
    // Tạo ra state mảng phim => load ra trang chủ
    // Viết hàm render giao diện     
    const renderPhim = () => {
        return arrPhim.map((phim, index) => {
            return <div className="col-4" key={index}>
                <div className="card text-left">
                    <img className="card-img-top" src={phim.hinhAnh}></img>
                    <div className="card-body">
                        <h4 className="card-title">{phim.tenPhim}</h4>
                        <button className="btn btn-info">Đặt vé</button>
                    </div>
                </div>
            </div>
        })
    }

    // Gọi data từ axios thông qua API
    const layDanhSachPhim = async () => {
        try {
            let result = await axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/quanlyphim/laydanhsachphim?manhom=GP01',
                method: 'GET'
            });
            setArrPhim(result.data)
            console.log(result.data)
        } catch (error) {
            console.log(error);
        }
    }

    // layDanhSachPhim();
    // Nhận vào 2 tham số :
    // + Tham số 1 : là hàm chạy sau khi component render
    // + Tham số 2 : Chứa state khi nào state thay đổi thì tham số 1 sẽ chạy
    // Ghi chú : 1 component có thể gọi nhiều useEffect 
    useEffect(() => {
        layDanhSachPhim();
        return () => {
            // Hàm này sẽ được kích hoạt khi component mất khỏi giao diện
        }
    }, [])


    return (
        <div className="container mt-5">
            <div className="display-4 text-center">Danh sách phim UseEffect</div>
            <div className="row">
                {renderPhim()}
            </div>
        </div>
    )
}

// UseEffect sẽ chạy sau hàm render ( didupdate và didmount)
// Muốn chạy sau khi render xong thì viết 
/**
 * useEffect(()=>{
 *  })
 */
// Muốn chỉ chạy lần đầu còn khi setstate thì không chạy lại ( didmount)
/**
 * useEffect(()=>{
 * },[])
 */
// Muốn chạy didupdate
/**
 * useEffect(()=>{
 * },[khi muon tham nao thay doi thi ham chay lai])
 */
// Muốn chạy willunmount ( xoa tat ca data dang chay )
/**
 * useEffect(()=>{
 *     return {
 * }
 * },[])
 */