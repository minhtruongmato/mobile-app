import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Login from './Login';
import Account from './Account';
import MenuContainer from './../../containers/MenuContainer';
import CartContainer from './../../containers/CartContainer';

class Header extends Component {
	render() {
		const url = window.location.protocol+ '//' + window.location.host;
		return (
			<div id="header">
				<div className="header-top">
					<div className="container">
						<div className="pull-left auto-width-left">
							<ul className="top-menu menu-beta l-inline">
								<li><a><i className="fa fa-home" /> 90-92 Lê Thị Riêng, Bến Thành, Quận 1</a></li>
								<li><a><i className="fa fa-phone" /> 0163 296 7751</a></li>
							</ul>
						</div>
						<div className="pull-right auto-width-right">
							<ul className="top-details menu-beta l-inline">
								<Account />
								<li>
									<Link to="/dang-ky">Đăng kí</Link>
								</li>
								<Login />
							</ul>
						</div>
						<div className="clearfix" />
					</div> {/* .container */}
				</div> {/* .header-top */}
				<div className="header-body">
					<div className="container beta-relative">
						<div className="pull-left">
							<Link to="/" id="logo"><img src={url +"/assets/dest/images/logo-cake.png"} width="200px" alt="aa" /></Link>
						</div>
						<div className="pull-right beta-components space-left ov">
							<div className="space10">&nbsp;</div>
							<div className="beta-comp">
								<form role="search" method="get" id="searchform" action="/">
									<input type="text" name="s" id="s" placeholder="Nhập từ khóa..." />
									<button className="fa fa-search" type="submit" id="searchsubmit" />
								</form>
							</div>
							<CartContainer />

						</div>
						<div className="clearfix" />
					</div> {/* .container */}
				</div> {/* .header-body */}
				
				<MenuContainer />  {/* .header-bottom */}
			</div>

		);
	}
}

export default Header;
