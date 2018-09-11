import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

class Login extends Component {
	handleLogout = () => {
		if(window.confirm('Chăc chắn đăng xuất?')){
			sessionStorage.removeItem('login');
			this.props.history.push("/dang-nhap");
		}
	}
    render() {
    	if (sessionStorage.getItem('login') === null) {
    		return (
    			<li>
					<Link to="/dang-nhap">Đăng nhập</Link>
				</li>
    		)
        }else{
        	return (
        		<li>
					<a onClick={this.handleLogout}>Đăng Xuất</a>
				</li>
        	)
        }
    }
}

export default withRouter(Login);
