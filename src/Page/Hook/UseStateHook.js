import React from 'react'
import {useState} from 'react'
export default function UseStateHook() {
    
    // Tuple : mảng hỗn hợp 
    // Viết state kiểu 1
    let [state,setState] = useState({
        number : 1
    });
    // Viết state kiểu 2 
    let [number,setNumber] = useState(2);
    
    return (
        <div className="container">
            <h1>{state.number} - {number}</h1>
            <button onClick={()=>{
                setState({
                    number : state.number + 1
                })
                setNumber(number+1);
            }}>Click !</button>
        </div>
    )
}
