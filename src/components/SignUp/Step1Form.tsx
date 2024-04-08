import { useState } from 'react';
import Button from '../common/Button'
import axios from 'axios';
import Input from '../common/Input';
import { FieldValues, useForm } from 'react-hook-form';

type SignUpStep1FormProps = {
    successHandler: () => void;
}

function SignUpStep1Form({successHandler}: SignUpStep1FormProps) {


    const [signupErrorMessage, setSignupErrorMessage] = useState('')
    const { register, handleSubmit, formState: { errors }, getValues, setError, clearErrors } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            username: '',
            email: '',
            password: '',
        }
    });
    const values = getValues();

    const onCreateAccount = () => {
        console.log(values)
        axios.post(`${import.meta.env.VITE_APP_BASE_URL}/api/auth/register`, {
            username : values.username,
            email : values.email,        
        }).then((response) => {
            console.log(response);
            successHandler() // move to next step
            setSignupErrorMessage('') // clear error message
            clearErrors('email');
            clearErrors('username');
        }).catch((error:any) => {
            console.log(error);
            setError('email', {type: 'manual', message: error.message})
            setError('username', {type: 'manual', message: error.message})            
            setSignupErrorMessage(error.message); // set error message
        })
    }

  return (
    <form onSubmit={handleSubmit(onCreateAccount)} className='w-full flex items-center min-h-screen'>
        <div className='absolute top-5 right-5 md:block hidden'>
            {/* replace with Link from react-router */}
            <p>Already a member <a href='#' className='text-link'>Sign In</a></p>
        </div>

        <div className='flex flex-col gap-8 md:w-[400px] sm:w-9/12 w-11/12 mx-auto'>
            {/* heading */}
            <h1 className='text-2xl font-extrabold font-roboto'>Sign up to Dribbble</h1>
            {/* api error message */}
            {signupErrorMessage && <li className='text-error'>{signupErrorMessage}</li>}

            <div className='flex w-full gap-x-3'>
                {/* name */}
                <Input 
                    type="text" 
                    placeholder="Name" 
                    label='Name' 
                    register={register} 
                    errors={errors} 
                    name='name' 
                    required 
                    widthFull
                />
                {/* username */}
                <Input 
                    type="text" 
                    placeholder="Username" 
                    label='Username' 
                    register={register} 
                    errors={errors} 
                    name='username' 
                    required 
                    widthFull
                />
            </div>

            {/* Email */}
            <Input 
                type="text" 
                placeholder="Email" 
                label='Email' 
                register={register} 
                errors={errors} 
                name='email' 
                required 
                pattern={/^\S+@\S+$/i} 
                widthFull 
            />
            {/* Password */}
            <Input 
                type="password" 
                placeholder="6+ characters" 
                label='Password' 
                register={register} 
                errors={errors} 
                name='password' 
                required 
                minLength={6} 
                widthFull
            />

            <label className='flex items-baseline gap-3'>
                <input type='checkbox' required/>
                <p>Creating an account means you're okay with our
                    <a className='text-link'> Terms of Service,</a>
                    <a className='text-link'> Pricacy Policy, </a>
                    and our default
                    <a className='text-link'> Notification Settings.</a>
                </p>
            </label>

            <div>
                <Button type="submit" primary className='text-lg font-medium' onClick={onCreateAccount}>Create Account</Button>
            </div>

            <div className='max-w-[300px]'>
                <p className=' font-medium text-gray-400'>This site is protected by reCAPTCHA and the Google <a className='text-link'>Privacy Policy</a> and <a className='text-link'>Terms of Service</a> apply.</p>
            </div>
        </div>
    </form>
  )
}

export default SignUpStep1Form