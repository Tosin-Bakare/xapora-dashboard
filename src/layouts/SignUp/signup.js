import React from 'react';


const SignUp = () => (
    <div className='p-4'>
        <p className='flex justify-center'>Create account</p>
        <div>
            <form>
                <div className='mt-8'>
                    <p>Email</p>
                    <input
                        className="w-full text-lg py-2 shadow-md border-gray-300 focus:outline-none focus:border-blue-900 p-4 font-light"
                        type=""
                        name="email"
                        placeholder="john@wick.me"
                    />
                </div>
                <div className="mt-10">
                <button
                  type="submit"
                  className="bg-gray-900 text-gray-100 p-4 w-full  tracking-wide font-semibold focus:outline-none focus:shadow-outline hover:bg-blue-700"
                >
                  SIGN UP
                </button>
                </div>
                </form>
                </div>
    </div>
);
export default SignUp;