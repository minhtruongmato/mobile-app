import React, { Component } from 'react';
import { IMAGE_URL } from './../../../constants/Config';
import { Link } from 'react-router-dom';

class RelatedProducts extends Component {

    render() {
    		const { relatedProducts } = this.props;
    		let elmRelatedProducts = '';
    		if(relatedProducts !== null){
    			elmRelatedProducts = relatedProducts.map((item, index) => {
    				const image = JSON.parse(item.image);
    				return (
    					<div className="col-sm-4" key={index}>
                     <div className="single-item">
                        <div className="single-item-header">
                           <Link  to={`/san-pham/${item.slug}`}><img src={`${IMAGE_URL}products/${item.slug}/${image[0]}`} alt={item.slug} /></Link>
                        </div>
                        <div className="single-item-body">
                           <p className="single-item-title">{item.tile}</p>
                           <p className="single-item-price">
                              <span className="flash-del">{parseInt((item.price), 0).toLocaleString('vi')} VND</span>
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
    			});
    		}
        	return (
            <div className="beta-products-list">
               <h4>Sản Phẩm Liên Quan</h4>
               <div className="row">
                  { elmRelatedProducts }
               </div>
            </div>
        );
    }
}

export default RelatedProducts;
