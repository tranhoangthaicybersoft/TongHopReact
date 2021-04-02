import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { layThongTinChiTietPhim } from '../../Redux/Action/PhimAction'

export default function Details(props) {
    // Tương tự như mapStateToProps của class component , chức năng là lấy state của store tổng 
    const chiTietPhim = useSelector(state => state.PhimReducer.chiTietPhim);
    // Props giống this.props
    console.log('props', props)
    const dispatch = useDispatch();
    // Tự gọi API khi trang vừa load 
    useEffect(() => {
        // Lấy tham số từ URL
        let { id } = props.match.params;
        // Gọi action truyền vào id phim 
        dispatch(layThongTinChiTietPhim(id))
    },[])

    return (
            <div className="container">
                <div className="row mt-5">
                    <div className="col-6">
                        <img src={chiTietPhim.hinhAnh} alt={chiTietPhim.tenPhim} className="w-100"></img>
                    </div>
                    <div className="col-6">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Tên phim</th>
                                    <th>{chiTietPhim.tenPhim}</th>
                                </tr>
                                <tr>
                                    <th>Mô tả</th>
                                    <th>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic natus, numquam, fuga ab soluta nesciunt amet vero consequatur quaerat alias unde recusandae, porro aliquid pariatur dolorem deleniti suscipit. Assumenda, iste!</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
    )
}
