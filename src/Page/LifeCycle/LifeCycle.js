import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export default class LifeCycle extends Component {

    // state = {}

    // Hàm khởi tạo luôn chạy đầu tiên trong 1 website 
    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            stateNumber: {
                number: 1
            }
        }
        console.log('constructor');
    }

    // Hàm này nhận vào props mới và state hiện tại để trả về state mới , hàm này sẽ thực thi sau constructor
    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDedriveStateFromProps');
        return currentState;
    }

    // Chạy sau khi state hoặc props của component thay đổi trước render 
    shouldComponentUpdate(newProps, newState) {
        // Xử lý => return false giao diện không render lại , return true giao diện render lại (default)
        return true;
    }
    // Hàm làm thay đổi giao diện
    render() {
        console.log('render');
        return (
            <div className="container">
                Life Cycle
                <h1>{this.state.stateNumber.number}</h1>
                <button onClick={() => {
                    {/**Đối với kiểu dữ liệu thường thì dùng kiểu setState thông thường */ }
                    // this.setState({
                    //     number : this.state.number + 1
                    // })
                    {/**Đối với kiểu dữ liệu object thì phải sao chép state để hiểu đây là một state mới thì mới có thể setState lại*/ }
                    let newStateNumber = { ...this.state.stateNumber };
                    newStateNumber.number += 1;
                    this.setState({
                        stateNumber: newStateNumber
                    })
                }}>Click</button>
                {this.state.stateNumber.number < 2? <ChildComponent stateNumber={this.state.stateNumber}/> : ''}
            </div>
        )
    }

    // Life cycle dùng để gọi API
    componentDidMount() { // Chạy 1 lần sau lần render đầu tiên 
        console.log('componentDidMount');
    }

    // ComponentDidupdate chạy kể từ lần thay đổi props hoặc state 
    componentDidUpdate(prevProps, prevState) { // Chạy sau mỗi lần setState hoặc props
        // Hạn chế setState trong component này ( Muốn setState phải có điều kiện if )
        console.log('componentDidUpdate');
    }
}
