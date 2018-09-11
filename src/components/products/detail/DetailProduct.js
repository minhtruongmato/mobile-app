import React, { Component } from 'react';
import { IMAGE_URL } from './../../../constants/Config';

class DetailProduct extends Component {
   constructor(props) {
      super(props);
      this.state = {
         quantity: 1
      };
   }
   handleChange = (event) => {
      this.setState({quantity: event.target.value});
   }
   render() {
      const { detailProduct } = this.props;
      let quantity = parseInt(this.state.quantity, 0);
      if (detailProduct !== null) {
         const image = JSON.parse(detailProduct.image);
         let elmPrice = <p className="single-item-price" style={{ color: '#ffb500' }}>
            <span>Giá: <strong style={{ color: '#ffb500' }}>{parseInt(detailProduct.price, 0).toLocaleString('vi')} VND</strong></span>
         </p>
         if (detailProduct.discount > 0) {
            elmPrice = <span>
               <p className="single-item-price" style={{ textDecoration: 'line-through' }}>
                  <span>Giá Gốc: <strong>{parseInt(detailProduct.price, 0).toLocaleString('vi')} VND</strong></span>
               </p>
               <p className="single-item-price" style={{ color: '#ffb500' }}>
                  <span>Giá Bán: <strong style={{ color: '#ffb500' }}>{parseInt(detailProduct.price - detailProduct.discount, 0).toLocaleString('vi')} VND</strong></span>
               </p>
            </span>
         }
         let elmTemplate = '';
         if(detailProduct.template){
            let template = JSON.parse(detailProduct.template)
            elmTemplate = Object.keys(template).map((item, index) => {
               return (
                     <tr key={index}>
                        <td>{item}</td>
                        <td>{template[item]}</td>
                     </tr>
                  )
            });
         }

         return (
            <div>
               <div className="inner-header">
                  <div className="container">
                     <div className="pull-left">
                        <h6 className="inner-title">Chi Tiết Sản Phẩm</h6>
                     </div>
                     <div className="pull-right">
                        <div className="beta-breadcrumb font-large">
                           <a href="index.html">Trang Chủ</a> / <span>Chi Tiết Sản Phẩm</span>
                        </div>
                     </div>
                     <div className="clearfix" />
                  </div>
               </div>
               <div className="container">
                  <div id="content">
                     <div className="row">
                        <div className="col-sm-9">
                           <div className="row">
                              <div className="col-sm-4">
                                 <img src={`${IMAGE_URL}products/${detailProduct.slug}/${image[0]}`} alt={detailProduct.slug} />
                              </div>
                              <div className="col-sm-8">
                                 <div className="single-item-body">
                                    <p className="single-item-title">{detailProduct.title}</p>
                                    {elmPrice}
                                 </div>
                                 <div className="clearfix" />
                                 <div className="space20">&nbsp;</div>
                                 <div className="single-item-desc">
                                    <p>{detailProduct.description}</p>
                                 </div>
                                 <div className="space20">&nbsp;</div>
                                 <p>Số lượng:</p>
                                 <div className="single-item-options">
                                    <select className="wc-select" name="quantity"  value={this.state.value} onChange={this.handleChange}>
                                       <option value={1}>1</option>
                                       <option value={2}>2</option>
                                       <option value={3}>3</option>
                                       <option value={4}>4</option>
                                       <option value={5}>5</option>
                                    </select>
                                    <a className="add-to-cart" onClick={() => this.props.handleAddToCart(detailProduct, quantity)}>
                                       <i className="fa fa-shopping-cart" />
                                    </a>
                                    <div className="clearfix" />
                                 </div>
                              </div>
                           </div>
                           <div className="space40">&nbsp;</div>
                           <div className="woocommerce-tabs">
                              <ul className="tabs">
                                 <li role="presentation" className="active">
                                    <a href="#tab-description" aria-controls="description" role="tab" data-toggle="tab">Description</a>
                                 </li>
                                 <li role="presentation">
                                    <a href="#tab-reviews" aria-controls="reviews" role="tab" data-toggle="tab">Reviews</a>
                                 </li>
                              </ul>
                              <div className="tab-content">
                                 <div role="tabpanel" className="tab-pane active" id="tab-description">
                                    <p dangerouslySetInnerHTML={{ __html: detailProduct.content }}></p>
                                 </div>
                                 <div role="tabpanel" className="tab-pane" id="tab-reviews">
                                    <table className="table table-striped table-dark">
                                       <thead>
                                          <tr>
                                             <th scope="col" colSpan={2} style={{ textAlign: 'center' }}>Thông Số Sản Phẩm</th>
                                          </tr>
                                       </thead>
                                       <tbody>
                                          {elmTemplate}
                                       </tbody>
                                    </table>

                                 </div>
                              </div>
                           </div>
                           <div className="space50">&nbsp;</div>

                           {this.props.elmRelatedProducts}
                           {/* .beta-products-list */}
                        </div>
                        <div className="col-sm-3 aside">
                        
                           {this.props.children}

                        </div>
                     </div>
                  </div> {/* #content */}
               </div>
            </div>
         );
      }else{
         return (
            <div></div>
         )
      }
      
      
   }
}

export default DetailProduct;
