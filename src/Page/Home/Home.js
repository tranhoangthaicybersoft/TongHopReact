import React, { Component } from 'react'
// import action
import { layDanhSachPhim } from '../../Redux/Action/PhimAction';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';

class Home extends Component {

    // Viết hàm đưa dữ liệu lên Reducer
    loadFilm = () => {
        this.props.dispatch(layDanhSachPhim());
    }

    renderFilm = () => {
        return this.props.mangPhim.map((film, index) => {
            return <div className="col-4" key={index}>
                <img className="card-img-top" style={{height:300}} src={film.hinhAnh} alt={film.hinhAnh} />
                <div className="card-body text-center">
                    <h4 className="card-title">{film.tenPhim}</h4>
                    <NavLink className="btn btn-info" to={`details/${film.maPhim}`}>Chi tiết phim</NavLink>
                </div>
            </div>
        })
    }

    render() {
        return (
            <div className="container">
                <div className="text-center display-4">
                    Danh sách phim hot
                    </div>
                <div className="row">
                    {this.renderFilm()}
                </div>
            </div>
        )
    }
    componentDidMount() {
        //Các API muốn gọi sau khi giao diện render thì sẽ gọi hàm này
        this.loadFilm();
    }
}

// Lấy dữ liệu về từ Reducer
const mapStateToProps = (state) => {
    return {
        mangPhim: state.PhimReducer.mangPhim
    }
}
export default connect(mapStateToProps)(Home)


