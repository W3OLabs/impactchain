import React from 'react'

const VerifyEmail = () => {
  return (
<div className="">
    <h1>Verify your eamail </h1> 

    <h1
    className='text-center text-2xl font-bold text-gray-800'
    >OTP has been sent to your email</h1>
    <div className="">
    <label
    htmlFor="otp"
    className="text-sm font-bold text-gray-800"
    >OTP</label>
    <input
    type="text"
    placeholder="Enter OTP"
    className="w-full p-2 my-2 border-b-2 border-gray-800"
    />
    </div>
    <button
    className="w-full p-2 my-2 bg-gray-800 text-white font-bold"
    >Verify</button>
    <div className="text-center">
    <p
    className="text-gray-800"
    >Didn't receive OTP? <span className="text-blue-500">Resend OTP</span></p>
    </div>
</div>
  )
}

export default VerifyEmail