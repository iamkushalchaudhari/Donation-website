import GooglePayButton from '@google-pay/button-react';
import { useState } from 'react';


export default function App() {    
    const [data, setData] = useState(null)

    function getData(val) {
        setData(val.target.value)
        console.warn(val.target.value)
    }

    return (
        <div>
            <div className="App">
                <div>
                <input type="text" style={{height:"50px",
                                           border:"1px solid black",
                                           background:"" }} onChange={getData}/>
                </div>
                <GooglePayButton
                    environment="TEST"
                    paymentRequest={{
                        apiVersion: 2,
                        apiVersionMinor: 0,
                        allowedPaymentMethods: [
                            {
                                type: 'CARD',
                                parameters: {
                                    allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                    allowedCardNetworks: ['MASTERCARD', 'VISA'],
                                },
                                tokenizationSpecification: {
                                    type: 'PAYMENT_GATEWAY',
                                    parameters: {
                                        gateway: 'example',
                                        gatewayMerchantId: 'exampleGatewayMerchantId',
                                    },
                                },
                            },
                        ],
                        merchantInfo: {
                            merchantId: '12345678901234567890',
                            merchantName: 'Demo Merchant',
                        },
                        transactionInfo: {
                            totalPriceStatus: 'FINAL',
                            totalPriceLabel: 'Total',
                            totalPrice: data,
                            currencyCode: 'INR',
                            countryCode: 'IN',
                        },
                        shippingAddressRequired: true,
                        callbackIntents: ['SHIPPING_ADDRESS', 'PAYMENT_AUTHORIZATION'],
                    }}
                    onLoadPaymentData={paymentRequest => {
                        console.log('Success', paymentRequest);
                    }}
                    onPaymentAuthorized={paymentData => {
                        console.log('Payment Authorised Success', paymentData)
                        return { transactionState: 'SUCCESS' }
                    }
                    }
                    onPaymentDataChanged={paymentData => {
                        console.log('On Payment Data Changed', paymentData)
                        return {}
                    }
                    }
                    existingPaymentMethodRequired='false'
                    buttonColor='black'
                    buttonType='donate'
                />
            </div>
        </div>
    );
}

