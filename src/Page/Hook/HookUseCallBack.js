import React, { useState , useCallback      } from 'react'
import UseCallBackComment from './UseCallBackComment'

// Đối với data tĩnh không thay đổi dữ liệu nên đặt ngoài hàm return

export default function HookUseCallBack() {

    // Dùng useState để đặt state
    let [like, setLike] = useState(1);

    let renderNotify = () => {
        return `Bạn đã thả ${like} ♥ !`
        }
        // Truyền đối số thì xem như hàm mới
        const callbackRenderNotify = useCallback(renderNotify,[like])

    return (
        <div className="m-5">
            Like: {like} ♥
            <br />
            <span style={{ cursor: 'pointer', color: 'red', fontSize: 35 }} onClick={() => {
                setLike(like + 1)
            }}>♥</span>
            <br />
            <br />
            <UseCallBackComment renderNotify={callbackRenderNotify} />
        </div>
    )
}

// Use memo dùng cho state tĩnh là biến , giá trị , boolean
// Use callback dùng cho state là đối tượng
