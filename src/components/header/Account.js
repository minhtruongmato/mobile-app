import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Account extends Component {

    render() {
    	if (sessionStorage.getItem('login') === null) {
    		return (
    			<li>
					<Link to="/dang-nhap">
						<i className="fa fa-user" />Tài khoản
					</Link>
				</li>
    		)
        }else{
        	return (
        		<li>
					<Link to="/">
						<i className="fa fa-user" />{JSON.parse(sessionStorage.getItem('login')).name}
					</Link>
				</li>
        	)
        }
    }
}

export default Account;
