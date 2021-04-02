import React , {useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { layDanhSachPhim } from '../../Redux/Action/PhimAction'


export default function ReduxHook(props) {
    console.log(props);

    // Gửi action lên redux store
    const dispatch = useDispatch();
    // Dùng UseEffect để dispatch component
    useEffect(() => {
        // component didupdate
        dispatch(layDanhSachPhim());
        return () => {
        }
    }, [])

    // Viết hàm lấy dữ liệu về sau khi đã gửi action lên redux
    const mangPhim = useSelector(state => state.PhimReducer.mangPhim);

    // Viết hàm render giao diện
    const renderPhim = () => {
        return mangPhim.map((phim, index) => {
            return <div className="col-4" key={index}>
                        <div className="card text-left">
                            <img className="card-img-top" src={phim.hinhAnh}/>
                            <div className="card-body">
                                <h4 className="card-title">{phim.tenPhim}</h4>
                                <button className="btn btn-info">Đặt vé</button>
                            </div>
                        </div>
                    </div>
        })
    }

    return (
        <div className="container mt-5">
            <div className="display-4 text-center">Danh sách phim</div>
            <div className="row">
                {renderPhim()}
            </div>
        </div>
    )
}
