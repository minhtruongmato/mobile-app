import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Container from './../components/homepage/Container';
import LoginContainer from './../containers/client/LoginContainer';
import RegisterContainer from './../containers/client/RegisterContainer';
import CheckoutContainer from './../containers/checkout/CheckoutContainer';
import DetailProductContainer from './../containers/products/detail/DetailProductContainer';
import ListProductsContainer from './../containers/products/list/ListProductsContainer';

class RootRoute extends Component {

    render() {
        return (
        	<Switch>
		        <Route exact path="/" component={Container} />
		  		<Route path="/dang-nhap" component={LoginContainer} />
		  		<Route path="/dang-ky" component={RegisterContainer} />
                <Route path="/dat-hang" component={CheckoutContainer} />
                <Route path="/san-pham/:slug" component={DetailProductContainer} />
		  		<Route path="/danh-muc/:slug" component={ListProductsContainer} />
      		</Switch>
        );
    }
}

export default RootRoute;
