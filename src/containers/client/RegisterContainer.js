import React, { Component } from 'react';
import Register from './../../components/client/Register';
import { connect } from 'react-redux';
import { registerRequest } from './../../actions​/index';
import qs from 'qs';
import {
    Redirect
} from "react-router-dom";

class RegisterContainer extends Component {
    render() {
    	const { register } = this.props;
    	let elmAlert = '';
    	switch(register.result) {
    		case true:
    			elmAlert = <div className="alert alert-warning" role="alert" style={{ textAlign: 'center' }}>Email đã tồn tại</div>;
    			break;
    		case false:
    			elmAlert = <div className="alert alert-danger" role="alert" style={{ textAlign: 'center' }}>Đăng ký không thành công</div>
    			break;
    		case "success":
    			// elmAlert = <div className="alert alert-success" role="alert" style={{ textAlign: 'center' }}>Đăng ký thành công</div>
    			alert('Đăng ký thành công');
    			break;
    		default:
    			elmAlert = '';
    	}
    	if (sessionStorage.getItem('login')) {
            return <Redirect to='/'/>;
        }
        return (
            <Register
            	handleRequestForm={this.handleRequestForm}
            	elmAlert={elmAlert}
            />
        );
    }
    handleRequestForm = (fields) => {
    	this.props.handleRegister(qs.stringify(fields));
    }
}

const mapStateToProps = ( state ) => {
	return {
		register: state.login
	}
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleRegister: (user) => {
            dispatch(registerRequest(user));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);

