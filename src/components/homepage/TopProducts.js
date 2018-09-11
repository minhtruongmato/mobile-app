import React, { Component } from 'react';
import { IMAGE_URL } from './../../constants/Config';
import { Link } from 'react-router-dom';

class TopProducts extends Component {

    render() {
    	const {topProducts} = this.props;
    	let elmProduct = '';
    	if(topProducts.length > 0){
    		elmProduct = topProducts.map((item, index) => {
    			const image = JSON.parse(item.image);
    			if(item.discount > 0){
    				return (
    					<div className="col-sm-3" key={index} style={{ marginTop: '20px' }}>
							<div className="single-item">
								<div className="ribbon-wrapper"><div className="ribbon sale">Sale</div></div>
								<div className="single-item-header">
									<Link to={`/san-pham/${item.slug}`}><img src={`${IMAGE_URL}/products/${item.slug}/${image[0]}`} alt={item.slug} /></Link>
								</div>
								<div className="single-item-body">
									<p className="single-item-title">{item.title}</p>
									<p className="single-item-price">
										<span className="flash-del">{parseInt(item.price, 0).toLocaleString('vi')} VND</span><br />
										<span className="flash-sale">{parseInt((item.price - item.discount), 0).toLocaleString('vi')} VND</span>
									</p>
								</div>
								<div className="single-item-caption">
									<a className="add-to-cart pull-left" onClick={() => this.props.handleAddToCart(item, 1)}><i className="fa fa-shopping-cart" /></a>
									<Link
										className="beta-btn primary"
										to={`/san-pham/${item.slug}`}
									>
										Details <i className="fa fa-chevron-right" />
									</Link>
									<div className="clearfix" />
								</div>
							</div>
						</div>
    				)
    			}else{
    				return (
    					<div className="col-sm-3" key={index} style={{ marginTop: '20px' }}>
							<div className="single-item">
								<div className="single-item-header">
									<Link to={`/san-pham/${item.slug}`} ><img src={`${IMAGE_URL}/products/${item.slug}/${image[0]}`} alt={item.slug} /></Link>
								</div>
								<div className="single-item-body">
									<p className="single-item-title">{item.title}</p>
									<p className="single-item-price">
										<span className="flash-sale">{parseInt(item.price, 0).toLocaleString('vi')} VND</span>
									</p>
								</div>
								<div className="single-item-caption">
									<a className="add-to-cart pull-left" onClick={() => this.props.handleAddToCart(item, 1)}><i className="fa fa-shopping-cart" /></a>
									<Link
										className="beta-btn primary"
										to={`/san-pham/${item.slug}`}
									>
										Details <i className="fa fa-chevron-right" />
									</Link>
									<div className="clearfix" />
								</div>
							</div>
						</div>
    				)
    			}
    		});
    	}
        return (
            <div className="beta-products-list">
				<h4>Sản Phẩm Bán Chạy</h4>
				<div className="beta-products-details">
					<div className="clearfix" />
				</div>
				<div className="row">
					{elmProduct}
				</div>
				<div className="space40">&nbsp;</div>
			</div>
        );
    }
}

export default TopProducts;
