
import HomeLayout from '../../layouts/HomeLayout'

function SignUpStep4
() {
  return (
    <div>
        <HomeLayout >
            <section className='flex flex-col gap-5 mx-auto'>
                <h1 className='text-3xl font-bold text-center'>Step 4</h1>
                <div className='flex flex-col gap-5 mx-auto'>
                    <div className='flex flex-col gap-5 mx-auto'>
                        <label htmlFor="password" className='text-lg font-medium'>Password</label>
                        <input type="password" id="password" className='p-2 border border-gray-300 rounded-md' />
                    </div>
                    <div className='flex flex-col gap-5 mx-auto'>
                        <label htmlFor="confirmPassword" className='text-lg font-medium'>Confirm Password</label>
                        <input type="password" id="confirmPassword" className='p-2 border border-gray-300 rounded-md' />
                    </div>
                    <div className='flex flex-col gap-5 mx-auto'>
                        <button className='p-2 bg-blue-500 text-white rounded-md'>Sign Up</button>
                    </div>
                </div>
            </section>
        </HomeLayout>
    </div>
  )
}

export default SignUpStep4
