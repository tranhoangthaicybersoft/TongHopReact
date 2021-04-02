import axios from 'axios'

// Tạo ra action layDanhSachPhim 
// Dùng async / await để lấy dữ liệu từ axios ( axios là một hàm bất đồng bộ )
// Setimeout để delay hàm

export const layDanhSachPhim = () => {
    return async (dispatch) => {
        // Bật Loading
        dispatch({
            type: 'openLoading'
        })

        setTimeout(async () => {
            const result = await axios({
                url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
                method: 'GET'
            });

            // Sau khi lấy data từ API về thì sử dụng hàm dispatch của redux-thunk để đưa dữ liệu lên store redux
            dispatch({
                type: 'LAY_DANH_SACH_PHIM',
                mangPhim: result.data
            })

            // Tắt loading
            dispatch({
                type: 'closeLoading'
            })
        }, 1000)
    }
}

// Lấy thông tin chi tiết phim từ API

export const layThongTinChiTietPhim = (maPhim) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
                method: 'GET'
            });
            console.log(result);
            // Sau khi lấy dữ liệu từ API chúng ra sẽ đưa dữ liệu lên reducer = dispatch 
            dispatch({
                type: 'LAY_CHI_TIET_PHIM',
                chiTietPhim: result.data
            })
        } catch (errors) {

        }
    }
}