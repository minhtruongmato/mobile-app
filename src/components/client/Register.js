import React, { Component } from 'react';
import { RegisterValidation } from './../validation/RegisterValidation';


class Register extends Component {
	constructor(props) {
        super(props);
        this.state = {
        	fields: {},
        	errors: {},
        	elmAlertFrom: ''
        }
    }
    componentWillReceiveProps(nextProps) {
    	this.setState({
    		elmAlertFrom: nextProps.elmAlert
    	});
    }
    handleValidation = () => {
    	let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        let validation = RegisterValidation(fields, errors, formIsValid);
       	this.setState({errors: errors});
        return validation.formIsValid;

    }

    handleChange = (field, e) => {         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }

    handleSubmit = (event) => {
    	if(this.handleValidation()){
    		this.props.handleRequestForm(this.state.fields);
        }
    	event.preventDefault();
    }

	render() {
		return (
			<div>
				<div className="inner-header">
					<div className="container">
						<div className="pull-left">
							<h6 className="inner-title">Đăng kí</h6>
						</div>
						<div className="pull-right">
							<div className="beta-breadcrumb">
								<a href="index.html">Home</a> / <span>Đăng kí</span>
							</div>
						</div>
						<div className="clearfix" />
					</div>
				</div>
				<div className="container">
					<div id="content">
					{this.state.elmAlertFrom}
						<form className="beta-form-checkout" onSubmit={this.handleSubmit}>
							<div className="row">
								<div className="col-sm-3" />
								<div className="col-sm-6">
									<h4>Đăng kí</h4>
									<div className="space20">&nbsp;</div>
									<div className="form-block">
										<label htmlFor="email">Email address*</label>
										<input
											type="text"
											id="email"
											name={this.state.fields["email"]}
											onChange={this.handleChange.bind(this, "email")}
											
										/>
										<span style={{color: "red"}}>{this.state.errors["email"]}</span>
									</div>
									<div className="form-block">
										<label htmlFor="name">Họ Tên*</label>
										<input
											type="text"
											id="name"
											name={this.state.fields["name"]}
											onChange={this.handleChange.bind(this, "name")}
											
										/>
										<span style={{color: "red"}}>{this.state.errors["name"]}</span>
									</div>
									<div className="form-block">
										<label htmlFor="address">Đại Chỉ*</label>
										<input
											type="text"
											id="address"
											placeholder="Tô Hiệu - Cầu Giấy - Hà Nội"
											name={this.state.fields["address"]}
											onChange={this.handleChange.bind(this, "address")}
											
										/>
										<span style={{color: "red"}}>{this.state.errors["address"]}</span>
									</div>
									<div className="form-block">
										<label htmlFor="phone">Điện Thoại*</label>
										<input
											type="text"
											id="phone"
											name={this.state.fields["phone"]}
											onChange={this.handleChange.bind(this, "phone")}
											
										/>
										<span style={{color: "red"}}>{this.state.errors["phone"]}</span>
									</div>
									<div className="form-block">
										<label htmlFor="password">Mật Khẩu*</label>
										<input
											type="password"
											id="password"
											name={this.state.fields["password"]}
											onChange={this.handleChange.bind(this, "password")}
											
										/>
										<span style={{color: "red"}}>{this.state.errors["password"]}</span>
									</div>
									<div className="form-block">
										<label htmlFor="re_password">Xác Nhận Mật Khẩu*</label>
										<input
											type="password"
											id="re_password"
											name={this.state.fields["re_password"]}
											onChange={this.handleChange.bind(this, "re_password")}
											
										/>
										<span style={{color: "red"}}>{this.state.errors["re_password"]}</span>
									</div>
									<div className="form-block">
										<button type="submit" className="btn btn-primary">Đăng Ký</button>
									</div>
								</div>
								<div className="col-sm-3" />
							</div>
						</form>
					</div> {/* #content */}
				</div>
			</div>
		);
	}
}

export default Register;
