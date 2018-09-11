import React, { Component } from 'react';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        	fields: {},
        	errors: {}
        }
    }

    handleChange = (field, e) => {         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    }

    handleSubmit = (event) => {
    	this.props.handleGetUser(this.state.fields);
    	event.preventDefault();
    }

    render() {
        return (
            <div>
			  <div className="inner-header">
			    <div className="container">
			      <div className="pull-left">
			        <h6 className="inner-title">Đăng nhập</h6>
			      </div>
			      <div className="pull-right">
			        <div className="beta-breadcrumb">
			          <a href="index.html">Home</a> / <span>Đăng nhập</span>
			        </div>
			      </div>
			      <div className="clearfix" />
			    </div>
			  </div>
			  <div className="container">
			    <div id="content">
			      <form className="beta-form-checkout" onSubmit={this.handleSubmit}>
			        <div className="row">
			          <div className="col-sm-3" />
			          <div className="col-sm-6">
			            <h4>Đăng nhập</h4>
			            <div className="space20">&nbsp;</div>
			            <div className="form-block">
			              <label htmlFor="email">Email address*</label>
			              <input
			              	type="text"
			              	id="email"
			              	name={this.state.fields["email"]}
			              	required
			              	onChange={this.handleChange.bind(this, "email")}
			              />
			            </div>
			            <div className="form-block">
			              <label htmlFor="phone">Password*</label>
			              <input
			              	type="password"
			              	id="password"
			              	name={this.state.fields["password"]}
			              	required
			              	onChange={this.handleChange.bind(this, "password")}
			              />
			            </div>
			            <div className="form-block">
			              <button type="submit" className="btn btn-primary">Login</button>
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
export default Login;
