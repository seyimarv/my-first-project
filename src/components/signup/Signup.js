import React, {useState} from 'react';

import  FormInput from '../Form-input/Form-input';
import { connect }from 'react-redux'

import './signup.scss'

import CustomButton from '../custom-button/Custom-button';

import { signUpStart } from '../../redux/user/User.actions'

import { auth, createUserProfileDocument } from '../../firebase/Firebase';

const SignUp = ({ signUpStart }) => {
	const [userDetails, setUserDetails ] = useState({displayName: '',
			email: '',
			password: '',
			confirmPassword: ''})
	
	
	const handleSubmit = async event  => {
		event.preventDefault();
        const { signUpStart } = this.props

		const { displayName, email, password, confirmPassword } = userDetails

		if (password !== confirmPassword) {
			alert("passwords don't match");
			return;
		}

		signUpStart({displayName, email, password})

	};
	const handleChange = event  => {
		const {name, value } = event.target;

		setUserDetails({...userDetails, [name]: value});
	}

		const { displayName, email, password, confirmPassword } = userDetails
		return (
          <div className='sign-up'>
            <h2 className='title'> i do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit} >
               <FormInput 
                type='text'
                name='displayName'
                value={displayName}
                onChange={handleChange}
                label='Display Name'
                required
               />
                <FormInput 
                type='email'
                name='email'
                value={email}
                onChange={handleChange}
                label='email'
                required
               />
                <FormInput 
                type='password'
                name='password'
                value={password}
                onChange={handleChange}
                label='Password'
                required
               />
                <FormInput 
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={handleChange} 
                label='confirm Password'
                required
               />

               <CustomButton type='submit' > Sign Up </CustomButton>
            </form>
          </div>

      );
	}

const mapDispatchToProps = dispatch => ({
	signUpStart: (email, password, displayName) => dispatch(signUpStart(email, password, displayName))
})

export default connect(null, mapDispatchToProps)(SignUp)



