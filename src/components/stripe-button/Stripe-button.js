import React from 'react'

import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_51HShbzATQN8Zj6QqSVqP7F2GjSulICy60HsC7QGTLRGqlD37G7tkcjg5e4L2PpyKWbpvZKGc9qad5cBDYMWvWuSc00fy7ZjNnW'
    
  const onToken = token => {
    	console.log(token);
    	alert('Payment Successful');
    }
    return (
        <StripeCheckout
           label='Pay Now'
           name='marvie e-commerce'
           billingAddress
           shippingAddress
           image='https://svgshare.com/i/CUz.svg'
           description={`your total is ${price}`}
           amount={priceForStripe}
           panelLabel='Pay Now'
           token={onToken}
           stripeKey={publishableKey}


         />




    );

};

export default StripeCheckoutButton;
