import React from 'react';

import  FormInput from '../Form-input/Form-input';
import { connect }from 'react-redux'

import './signup.scss'

import CustomButton from '../custom-button/Custom-button';

import { signUpStart } from '../../redux/user/User.actions'

import { auth, createUserProfileDocument } from '../../firebase/Firebase';

class SignUp extends React.Component {
	constructor() {
		super();

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	}
	
	handleSubmit = async event  => {
		event.preventDefault();
        const { signUpStart } = this.props

		const { displayName, email, password, confirmPassword } = this.state

		if (password !== confirmPassword) {
			alert("passwords don't match");
			return;
		}

		signUpStart({displayName, email, password})

	};
	handleChange = event  => {
		const {name, value } = event.target;

		this.setState({[name]: value});
	}

	render () {
		const { displayName, email, password, confirmPassword } = this.state
		return (
          <div className='sign-up'>
            <h2 className='title'> i do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={this.handleSubmit} >
               <FormInput 
                type='text'
                name='displayName'
                value={displayName}
                onChange={this.handleChange}
                label='Display Name'
                required
               />
                <FormInput 
                type='email'
                name='email'
                value={email}
                onChange={this.handleChange}
                label='email'
                required
               />
                <FormInput 
                type='password'
                name='password'
                value={password}
                onChange={this.handleChange}
                label='Password'
                required
               />
                <FormInput 
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={this.handleChange} 
                label='confirm Password'
                required
               />

               <CustomButton type='submit' > Sign Up </CustomButton>
            </form>
          </div>

      );
	}
}
const mapDispatchToProps = dispatch => ({
	signUpStart: (email, password, displayName) => dispatch(signUpStart(email, password, displayName))
})

export default connect(null, mapDispatchToProps)(SignUp)



