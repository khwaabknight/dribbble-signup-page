import { FieldValues, UseFormRegister, UseFormWatch } from "react-hook-form"
import Button from "../common/Button";

type Step3FormProps = {
    register: UseFormRegister<FieldValues>;
    successHandler: () => void;
    previousHandler: () => void;
    watch: UseFormWatch<FieldValues>;
}

const radioOptions = [
    {
        id: 'DESIGNER',
        img: '/images/designer-account.png',
        title: "I'm a designer looking to share my work",
        text:'With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration.'
    },
    {
        id: 'EMPLOYER',
        img: '/images/employer-account.png',
        title: "I'm looking to hire a designer",
        text:'With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration.'
    },
    {
        id: 'USER',
        img: '/images/user-account.png',
        title: "I'm looking for design inspiration",
        text:'With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration.'
    }
]

function Step3Form({ register,successHandler,previousHandler, watch }: Step3FormProps) {

    const watchAccountType = watch('accountType');

    const submitHandler = (e:any) => {
        e.preventDefault();
        successHandler();
    }
    
  return (
    <div className="min-h-screen">
        <div className="md:mb-16 md:mt-5 md:ml-3 mx-auto my-5 flex items-center gap-3">
            <div className='w-36 '>
                <img src="/logos/dribbblelogopink.png" alt="" />
            </div>
            <button onClick={previousHandler} className='text-base font-medium text-gray-500 hover:bg-slate-200 w-10 h-10 rounded-md'>
                <i className="fa-solid fa-chevron-left"></i>
            </button>
        </div>
        <form onSubmit={submitHandler} className='flex flex-col justify-center items-center gap-32 w-10/12 md:w-11/12 lg:w-7/12 mx-auto mb-10'>

            {/* heading */}
            <div className='flex flex-col gap-4'>
                <h2 className='text-4xl font-bold tracking-tight font-roboto text-center'>What brings you to Dribbble?</h2>
                <p className='text-base font-medium text-gray-500 text-center'>Select the options that best describe you. Don't worry you can explore other options later.</p>
            </div>

            <div className="">
                {/* radio buttons */}
                <div className='grid md:grid-cols-3 gap-y-20 lg:gap-x-32'>
                    {
                        radioOptions.map(({id,img,title,text}) => (
                            <label key={"accountType-"+id} htmlFor={id} className={`border rounded-2xl ${watchAccountType === id ? "border-accent-1 sm:mt-0 sm:pt-8 pb-8 pt-14" : "border-slate-200 py-5"} px-8 flex flex-col items-center justify-center gap-x-2 relative w-80 mx-auto`}>
                                <div className={`${watchAccountType === id && 'absolute -top-1/3 z-50'} w-60`}>
                                    <img src={img} alt=""/>
                                </div>
                                <p className={`text-center text-xl font-semibold ${watchAccountType === id && "mt-4 sm:mt-12"}`}>{title}</p>
                                {
                                    watchAccountType === id &&
                                    <div className="flex flex-col items-center gap-5">
                                        <p className="text-center text-sm mx-auto">{text}</p>
                                        <i className="fa-solid fa-circle-check text-center text-accent-1"></i>
                                    </div>
                                }
                                <input type="radio" id={id} {...register('accountType')} value={id} className="hidden"/>
                            </label>
                        ))
                    }
                </div>
            </div>

            <div className="flex flex-col items-center gap-6">
                <div className="">
                    <p className="text-2xl font-bold">Anythin else? You can select multiple</p>
                </div>
                <div className='text-center w-fit'>
                    <Button 
                        type='submit'
                        primary = {!!watchAccountType}
                        secondary = {!watchAccountType}
                        disabled = {!watchAccountType}
                    >
                        Finish
                    </Button>
                    {
                        !!watchAccountType  && 
                        <p className='text-gray-400 text-xs font-semibold pt-2'>or Press <span className='font-bold'>RETURN</span></p>
                    }
                </div>
            </div>
        </form>

    </div>
  )
}

export default Step3Form