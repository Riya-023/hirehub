import React from 'react'
import boy from '../images/boy.png'
import tick from '../images/tick.jpg'

const Register = () => {
    return (
        <>
            <div className="container">
                <div className="box">
                    <div>
                        <img className='boy' src={boy} alt="" />
                    </div>
                    <p className='text-center'>On registering , you can</p>

                    <div className='boxin'>
                        <img className='tick' src={tick} alt="" />
                        <p>Build your profile and let recruiers find you</p>
                    </div>
                    <div className='boxin'>
                        <img className='tick' src={tick} alt="" />
                        <p>Get job posting delivered right to your email</p>
                    </div>
                    <div className='boxin'>
                        <img className='tick' src={tick} alt="" />
                        <p>Find a job and grow your carrer</p>
                    </div>
                </div>

                <div className="box register">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Full Name
                    </label>
                    <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="text"
                            required
                            autoComplete="email"
                            className="block w-1/2  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>

                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                    </label>
                    <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="password"
                            required
                            autoComplete="email"
                            className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>

                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Mobile
                    </label>
                    <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="text"
                            required
                            autoComplete="email"
                            className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>

                </div>
            </div>

        </>
    )
}

export default Register
