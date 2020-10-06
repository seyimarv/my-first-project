import React, {useState} from 'react';

import FormInput from '../Form-input/Form-input';
import CustomButton from '../custom-button/Custom-button';
import { connect } from 'react-redux'

import { googleSignInStart, emailSignInStart } from '../../redux/user/User.actions'


import './signin.scss'


const Signin = ({emailSignInStart, googleSignInStart }) => {


const [userCredentials, setCredentials ] = useState ({email: '', password:''});

const { email, password } = userCredentials;
 	

 	const handleSubmit = async event => {
        event.preventDefault();
        
        const {email, password} = userCredentials;
        emailSignInStart(email, password);
 	}

 	const handleChange = (event) => {
 		const { value, name } = event.target

 		setCredentials({...userCredentials, [name]: value })
 	}

 		return(
 		   <div className='sign-in'>
 		   <h2> I already have an account</h2>
 		   <span>Sign in with your email and password</span>

 		   <form onSubmit={handleSubmit} >
 		   	<FormInput name='email' type='email' value= {email} handleChange={handleChange} required label='email' />
 		

 		    <FormInput name='password' type='password' value= {password} handleChange={handleChange} required label='password' />
 		   
           <div className='buttons'>
 		   	<CustomButton type='submit' value='submit form'>SIGN IN </CustomButton>
 		   	<CustomButton this='button' onClick={googleSignInStart} isGoogleSignIn>{' '} Sign in with Google {' '}</CustomButton>
 		   </div>

 		   </form>	 

 		   </div>


 	  );
 	}

 const mapDispatchToProps = dispatch => ({
 	googleSignInStart: () => dispatch(googleSignInStart()),
 	emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
 })

 export default connect(null, mapDispatchToProps)(Signin)