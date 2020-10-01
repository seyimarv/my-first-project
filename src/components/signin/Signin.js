import React from 'react';

import FormInput from '../Form-input/Form-input';
import CustomButton from '../custom-button/Custom-button';
import { connect } from 'react-redux'

import { googleSignInStart, emailSignInStart } from '../../redux/user/User.actions'


import './signin.scss'

 class Signin extends React.Component {
 	constructor (props) {
 		super (props);


 		this.state = {
 			email: '',
 			password: ''
 		}
 	}

 	handleSubmit = async event => {
        event.preventDefault();
        const { emailSignInStart } = this.props;

        const {email, password} = this.state;
        emailSignInStart(email, password);
 	}

 	handleChange = (event) => {
 		const { value, name } = event.target

 		this.setState ({[name]: value })
 	}
 	render () {
 		const { googleSignInStart } = this.props
 		return(
 		   <div className='sign-in'>
 		   <h2> I already have an account</h2>
 		   <span>Sign in with your email and password</span>

 		   <form onSubmit={this.handleSubmit} >
 		   	<FormInput name='email' type='email' value= {this.state.email} handleChange={this.handleChange} required label='email' />
 		

 		    <FormInput name='password' type='password' value= {this.state.password} handleChange={this.handleChange} required label='password' />
 		   
           <div className='buttons'>
 		   	<CustomButton type='submit' value='submit form'>SIGN IN </CustomButton>
 		   	<CustomButton this='button' onClick={googleSignInStart} isGoogleSignIn>{' '} Sign in with Google {' '}</CustomButton>
 		   </div>

 		   </form>	 

 		   </div>


 	  );
 	}
 }

 const mapDispatchToProps = dispatch => ({
 	googleSignInStart: () => dispatch(googleSignInStart()),
 	emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
 })

 export default connect(null, mapDispatchToProps)(Signin)