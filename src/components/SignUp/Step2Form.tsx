import { useEffect, useRef, useState } from 'react';
import { FieldValues, UseFormRegister, UseFormWatch } from 'react-hook-form';
import Button from '../common/Button';
type SignUpStep2FormProps = {
    register: UseFormRegister<FieldValues>;
    successHandler: () => void;
    watch : UseFormWatch<FieldValues>;
    setAvatar: (file: File) => void;
    avatar: File | null;
}

function Step2Form({
    register,
    successHandler,
    watch,
    setAvatar,
    avatar
}: SignUpStep2FormProps) {
    
    const avatarRef = useRef(null);
    
    const [imageShow,setImageShow] = useState<string>('');
    const watchLocation = watch('location');

    const previewAndChangeAvatarImage = (e:any) => {
        const file = e.target.files[0];
        if (file) {
            setImageShow(URL.createObjectURL(file));
            setAvatar(file);
        }
    }

    useEffect(() => {
        if (avatar !== null) {
            setImageShow(URL.createObjectURL(avatar));
        }
    }, [watchLocation])

    const clickAvatarRef = () => {
        if (avatarRef.current) {
            (avatarRef.current as HTMLInputElement).click();
        }
    };

    const submitHandler = (e:any) => {
        e.preventDefault()
        successHandler()
    }

  return (
    <div className='min-h-screen'>
        <div className='w-36 md:mb-16 md:mt-5 md:ml-3 mx-auto my-5'>
            <img src="/logos/dribbblelogopink.png" alt="" />
        </div>
        <form onSubmit={submitHandler} className='flex flex-col gap-20 w-10/12 md:w-8/12 lg:w-6/12 mx-auto mb-10'>

            {/* heading */}
            <div className='flex flex-col gap-4'>
                <h2 className='text-4xl font-bold tracking-tight font-roboto'>Welcome! Let's create your profile</h2>
                <p className='text-base font-medium text-gray-600'>Let others get to know you better! You can do these later</p>
            </div>

            {/* Avatar */}
            <div className='flex flex-col gap-3'>
                <h3 className='text-2xl font-bold font-roboto'>Add an avatar</h3>
                <div className='flex md:flex-row md:justify-start flex-col justify-center gap-x-16'>
                    <div className={`${!avatar && 'border-2 border-gray-300'} text-gray-500 border-dashed w-48 h-48 rounded-full overflow-hidden flex justify-center items-center cursor-pointer`} onClick={clickAvatarRef}>
                        {
                            !avatar ?
                            (
                                <i className="fa-solid fa-camera"></i>
                            ):(
                                <img src={imageShow} alt="" className='h-48 w-48 object-cover'/>
                            )
                        }
                    </div>
                    <div className='flex flex-col gap-5 mt-8'>
                        <label htmlFor="avatarInput" className='cursor-pointer w-fit'>
                            <p className='hover:bg-slate-200 rounded w-fit px-3 py-1 font-semibold text-lg'>Choose image</p>
                            <input
                                type="file"
                                id='avatarInput'
                                onChange={previewAndChangeAvatarImage}
                                name='avatar'
                                ref={avatarRef}
                                className='hidden'
                                accept="image/*"
                            />
                        </label>
                        <div className='flex gap-2 items-center text-gray-400 cursor-pointer'>
                            <i className="fa-solid fa-chevron-right"></i>
                            <p>Or choose one of our defaults</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Location */}
            <div className='flex flex-col gap-5'>
                <h3 className='text-2xl font-bold font-roboto'>Add your Location</h3>
                <input
                    type="text"
                    placeholder="Enter a location"
                    {...register('location', {required: true})}                    
                    className='border-b border-gray-300 w-full focus:outline-none'
                />
            </div>

            {/* Next Button */}
            <div className='text-center w-fit'>
                <Button
                    type='submit'
                    disabled = {!avatar || !watchLocation }
                    primary={avatar && watchLocation }
                    secondary={!avatar  || !watchLocation}                    
                >Next</Button>
                {
                    avatar && 
                    watchLocation  && 
                    <p className='text-gray-400 text-xs font-semibold pt-2'>or Press <span className='font-bold'>RETURN</span></p>
                }
            </div>
        </form>
    </div>
  )
}

export default Step2Form