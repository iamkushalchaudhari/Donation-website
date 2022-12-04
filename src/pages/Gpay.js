import GooglePayButton from '@google-pay/button-react';
import { useState } from 'react';

export default function App() {
    const [data, setData] = useState(null)

    function getData(val) {
        setData(val.target.value)
        console.warn(val.target.value)
    }

    return (
        <div className='grid w-full h-screen bg-fixed bg-center bg-no-repeat bg-cover'>
            <div className="text-center p-80 bg-back-ground">
                <input type="text" style={{
                    height: "40px",
                    border: "1px solid white",
                    borderRadius: "5px",
                    background: "#E8C4C4",

                }} onChange={getData} />
                <div className="py-2">
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
                        }}
                        onLoadPaymentData={paymentRequest => {
                            console.log('load payment data', paymentRequest);
                        }}
                        buttonType='donate'
                    />
                </div>
            </div>
        </div>
    );
}

