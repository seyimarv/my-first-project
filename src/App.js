import React from 'react';
import Homepage from './pages/homepage/Homepage';
import { Switch, Route, Redirect} from 'react-router-dom';
import Shop from './pages/shop/Shop';
import SignInAndSignUp from './pages/signin-and-signup/Signinsignup'
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/User.selector'
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './components/checkout/CheckoutPage'
import { checkUserSession } from './redux/user/User.actions'



import Header from './components/Header/Header'

import './App.css';

class App extends React.Component {

   

   unsubscribeFromAuth = null;

   componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();

   
 
  }

  componentWillUnmount() {
  	this.unsubscribeFromAuth();
  }

  render () {
	 return (
    <div>
    <Header />
     <Switch>
        <Route exact path = '/' component={Homepage}/>
        <Route path = '/Shop' component={Shop}/>
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path = '/signin' render= {() => this.props.currentUser ? (<Redirect to='' />) : <SignInAndSignUp />}/>
     </Switch>
    </div>
  );


}
}


const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	
});

const mapDispatchToProps = dispatch => ({
	checkUserSession: () => dispatch(checkUserSession())
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
