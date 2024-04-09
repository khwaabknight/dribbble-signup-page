
import HomeLayout from '../../layouts/HomeLayout'

type SignUpStep4Props = {
    email:string,
}

function SignUpStep4({email}:SignUpStep4Props) {
  return (
    <div className='min-h-screen'>
        <HomeLayout >
            <div className='flex flex-col items-center gap-5 py-20 mx-auto w-11/12 sm:w-9/12 md:w-7/12 lg:w-4/12'>
                <h1 className='text-3xl font-bold text-center'>Please verify your email...</h1>

                <div className='relative text-center w-fit'>
                    <i className="fa-solid fa-envelope text-neutral-400 text-7xl"></i>
                    {/* <div className='rounded-full border-2 absolute top-0 right-0 translate-x-1/3 aspect-square'> */}
                        <i className="fa-solid fa-circle-check text-accent-1 text-xl aspect-square absolute top-0 right-0 translate-x-1/3 w-7 rounded-full bg-white"></i>
                    {/* </div> */}
                </div>

                <p className='text-center'>Please verify your email address. We've sent a confirmation email to:</p>

                <h3 className='font-bold text-black text-center'>{email || 'hello'}</h3>

                <p className='text-center'>Click the confirmation link in that email to begin using Dribbble</p>

                <p className='text-center'>
                    Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If you still don't see it, you can 
                    {/* change the a tag to Link tag */}
                    <a href='#' className='text-accent-1 font-semibold'> resend the confirmation email.</a>
                </p>

                <p className='text-center'>
                    Wrong email address?
                    <a href='#' className='text-accent-1 font-semibold'> Change it.</a>
                </p>

            </div>
        </HomeLayout>
    </div>
  )
}

export default SignUpStep4
