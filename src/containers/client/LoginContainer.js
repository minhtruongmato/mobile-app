import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginRequest } from './../../actions​/index';
import qs from 'qs';
import Login from './../../components/client/Login';
import {
    Redirect
} from "react-router-dom";

export class LoginContainer extends Component {
    render() {
        if (sessionStorage.getItem('login')) {
            return <Redirect to='/'/>;
        }
        return (
            <Login
            	handleGetUser={this.handleGetUser}
            />
        );
    }

    handleGetUser = (fields) => {
        this.props.handleLogin(qs.stringify(fields));
        // this.props.history.push("/");
    }
}
const mapStateToProps = state => {
	return {
        user: state.login
    }
}
const mapDispatchToProps = (dispatch, props) => {
	return {
		handleLogin: (userApi) => {
			dispatch(loginRequest(userApi))
		}
	}
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);
