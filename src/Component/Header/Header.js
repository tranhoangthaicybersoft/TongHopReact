import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class Header extends Component {
    render() {
        return (
            <div className="">
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                    <NavLink className="navbar-brand" to="/home">CyberSoft</NavLink>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <NavLink activeStyle={{ fontWeight: 'bold' }} activeClassName="bg-light text-dark" className="nav-link" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeStyle={{ fontWeight: 'bold' }} activeClassName="bg-light text-dark" className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeStyle={{ fontWeight: 'bold' }} activeClassName="bg-light text-dark" className="nav-link" to="/login">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeStyle={{ fontWeight: 'bold' }} activeClassName="bg-light text-dark" className="nav-link" to="/register">Register</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeStyle={{ fontWeight: 'bold' }} activeClassName="bg-light text-dark" className="nav-link" to="/lifecycle">Life Cycle</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >Hooks</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <NavLink className="dropdown-item" to="/usestatehook">Use State Hook</NavLink>
                                    <NavLink className="dropdown-item" to="/baitapchonxe">Bài tập chọn xe</NavLink>
                                    <NavLink className="dropdown-item" to="/usecallback">Bài tập Use Callback</NavLink>
                                    <NavLink className="dropdown-item" to="/usememo">Use Memo Hook </NavLink>
                                    <NavLink className="dropdown-item" to="/useeffect">Use Effect Hook </NavLink>
                                    <NavLink className="dropdown-item" to="/reduxhook">Redux Hook </NavLink>
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}

