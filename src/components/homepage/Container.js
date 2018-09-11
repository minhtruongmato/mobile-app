import React, { Component } from 'react';
import Slider from './../Slider';
import NewProductContainer from './../../containers/homepage/NewProductContainer';
import TopProductContainer from './../../containers/homepage/TopProductContainer';


class Container extends Component {

	render() {
		return (
			<div>
				<Slider />
				<div className="container">
					<div id="content" className="space-top-none">
						<div className="main-content">
							<div className="space60">&nbsp;</div>
							<div className="row">
								<div className="col-sm-12">
									<NewProductContainer />
									{/* .beta-products-list */}
									<div className="space50">&nbsp;</div>
									<TopProductContainer />
									{/* .beta-products-list */}
								</div>
							</div> {/* end section with sidebar and main content */}
						</div> {/* .main-content */}
					</div> {/* #content */}
				</div>
			</div>
		);
	}
}

export default Container;
