import emailjs from 'emailjs-com';
import React from 'react';
export default function Example() {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_e7jx5pb', e.target, 'YvGJVU2nfe5qdcJO5')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (
        <div>
            <div className="container">
                <form onSubmit={sendEmail}>
                    <div class="flex flex-col items-center justify-center px-6 mx-auto md:h-screen">
                        <div class="w-full bg-peach rounded-lg shadow sm:max-w-md ">
                            <div class="p-6 space-y-2 md:space-y-4 sm:p-8">
                                <h1 class="text-xl font-bold text-center leading-tight tracking-normal text-gray-900 md:text-2xl ">
                                    Enter Your Details
                                </h1>
                                <form class="space-y-4 md:space-y-6" action="#">

                                    {/* Your Email */}
                                    <div>
                                        <label for="email" class="block mb-2 text-base font-medium text-white">Your email</label>
                                        <input type="email" name="email" id="email" class="bg-elightpeach border border-white text-black sm:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="...@gmail.com" required />
                                    </div>

                                    {/* Phone number */}
                                    <div>
                                        <label for="phone-number" class="block mb-2 text-base font-medium text-white ">Phone Number</label>
                                        <input type="phone-number" name="phone-number" id="phone-number" placeholder="+91 (123-456-7890)" class="bg-elightpeach border border-white text-black sm:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />
                                    </div>

                                    {/* Full Name*/}
                                    <div>
                                        <label for="full-name" class="block mb-2 text-base font-medium text-white ">Full Name</label>
                                        <input type="full-name" name="full-name" id="full-name" placeholder="Bob Parker" class="bg-elightpeach border border-white text-black sm:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required />
                                    </div>

                                    {/* Checkbox */}
                                    <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                            <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-white rounded bg-elightpeach focus:ring-3 focus:ring-primary-300 " required />
                                        </div>
                                        <div class="ml-3 text-base">
                                            <label for="terms" class="font-light text-white ">I accept the <a class="font-medium text-primary-600 hover:underline hover:text-white " href="#">Terms and Conditions</a></label>
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-center">
                                     <a class="px-7 py-3 bg-white/90 text-peach text-center font-semibold text-sm uppercase rounded shadow-md hover:shadow-white hover:bg-white hover:shadow-lg focus:bg-lightpeach focus:shadow-lg active:bg-elightpeach active:shadow-lg transition duration-150 ease-in-out" href="/payment" type='submit'>next</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}