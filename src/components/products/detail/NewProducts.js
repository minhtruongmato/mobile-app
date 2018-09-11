import React, { Component } from 'react';
import { IMAGE_URL } from './../../../constants/Config';
import { Link } from 'react-router-dom';

class NewProducts extends Component {

    render() {
    		const { newProducts } = this.props;
    		let elmNewProducts = '';
    		if(newProducts){
    			elmNewProducts = newProducts.map((item, index) => {
    				const image = JSON.parse(item.image);
    				return (
    					<div className="media beta-sales-item" key={index}>
                     <Link className="pull-left" to={`/san-pham/${item.slug}`} ><img src={`${IMAGE_URL}products/${item.slug}/${image[0]}`} alt={item.slug} /></Link>
                     <div className="media-body">
                        {item.tile}
                        <span className="beta-sales-price">{parseInt((item.price - item.discount), 0).toLocaleString('vi')} VND</span>
                     </div>
                  </div>
    				)
    			});
    		}
        	return (
            <div className="widget">
               <h3 className="widget-title">Sản Phẩm Mới</h3>
               <div className="widget-body">
                  <div className="beta-sales beta-lists">
                     { elmNewProducts }
                  </div>
               </div>
            </div>
        );
    }
}

export default NewProducts;
