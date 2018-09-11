import React, { Component } from 'react';
import { Link } from "react-router-dom";

class HeaderBottom extends Component {
    render() {
    	let {productType} = this.props;
    	let elmMenu = ''
    	if(productType !== undefined){
    		elmMenu = productType.map((item, index) => {
	    		return (
	    				<li key={index}><Link to={`/danh-muc/${item.slug}`}>{item.title}</Link></li>
	    			)
	    	});
    	}
    	
        return (
            <div className="header-bottom" style={{ backgroundColor: '#0277b8' }}>
				<div className="container">
					<a className="visible-xs beta-menu-toggle pull-right"><span className="beta-menu-toggle-text">Menu</span> <i className="fa fa-bars" /></a>
					<div className="visible-xs clearfix" />
					<nav className="main-menu">
						<ul className="l-inline ov">
							<li><Link to="/">Trang chủ</Link></li>
							<li><a>Sản phẩm</a>
								<ul className="sub-menu">
									{elmMenu}
								</ul>
							</li>
							<li><Link to="/gioi-thieu">Giới thiệu</Link></li>
							<li><Link to="/lien-he">Liên hệ</Link></li>
						</ul>
						<div className="clearfix" />
					</nav>
				</div> {/* .container */}
			</div>
        );
    }
}

export default HeaderBottom;
