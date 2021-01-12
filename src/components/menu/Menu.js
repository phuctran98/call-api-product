import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

const menus = [
    {
        name: "Trang chủ",
        to: '/',
        exact: true
    },
    {
        name: "Quản lý sản phẩm",
        to: '/product-list',
        exact: false
    }
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path="to"
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var active = match ? 'active' : ""
                return (
                    <li className={match ? "active" : ""}>
                        <Link to={to} className="nav-link">{label}</Link>
                    </li>
                )
            }}>
        </Route>

    );
}

class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                               {this.showMenu(menus)}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
    showMenu = (menus)=>{
        var result = null
        if(menus.length>0){
            result = menus.map((menu,index)=>{
                return(
                    <MenuLink 
                        key={index}
                        label = {menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />

                    
                )
            })
        }
        return result
    }
}

export default Menu