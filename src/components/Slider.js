import React, { Component } from 'react';
import {DOMAIN } from './../constants/Config';
import { Slide } from 'react-slideshow-image';


class Slider extends Component {
	render() {
		const slideImages = [
			DOMAIN + '/assets/dest/images/thumbs/1.jpg',
			DOMAIN + '/assets/dest/images/thumbs/1.jpg',
			DOMAIN + '/assets/dest/images/thumbs/1.jpg',
			DOMAIN + '/assets/dest/images/thumbs/1.jpg',
		];

		const properties = {
			duration: 5000,
			transitionDuration: 500,
			infinite: true,
			indicators: true
		}
		return (
			<Slide {...properties}>
				<div className="each-slide">
					<img src={slideImages[0]} alt='a' />
				</div>
				<div className="each-slide">
					<img src={slideImages[0]} alt='a' />
				</div>
				<div className="each-slide">
					<img src={slideImages[0]} alt='a' />
				</div>
			</Slide>
		);
	}
}

export default Slider;
