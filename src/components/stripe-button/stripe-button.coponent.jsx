import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_VOhff5Fody6P3WwudLCoZ5Gi00ryG3WmGb';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesfull');
    };

    return (
        <StripeCheckout
            label="Pay Now"
            name="Crwn Clothing"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;