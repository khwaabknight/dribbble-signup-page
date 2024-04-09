import axios from 'axios';
import { useState } from 'react'
import './App.css'
import { useForm, FieldValues } from 'react-hook-form';
import SignUpStep1Form from './components/SignUp/Step1Form';
import Step1LeftPanel from './components/SignUp/Step1LeftPanel';
import Step2Form from './components/SignUp/Step2Form';
import Step3Form from './components/SignUp/Step3Form';
import SignUpStep4 from './components/SignUp/SignUpStep4';



function App() {

    const [step, setStep] = useState(4);
    const { register, formState: { errors }, getValues, setError, clearErrors, watch } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            username: '',
            email: '',
            password: '',
            location: '',
            accountType: '',
        }
    });
    const [avatar, setAvatar] = useState<File | null>(null);

    const signUpHandler = () => {

        const formdata = new FormData();
        const values = getValues();

        for (const key in values) {
            if (Object.prototype.hasOwnProperty.call(values, key)) {
                const element = values[key];
                formdata.append(key, element);
            }
        }
        if(avatar) {
            formdata.append('avatar', avatar);
        }

        axios.post(`${import.meta.env.VITE_APP_BASE_URL}/api/auth/register`, formdata).then((response) => {
            console.log(response);
            setStep(4)
        }).catch((error : any) => {
            console.log(error);
        })
        
    }


  return (
    <main className=''>
        <div>
            <div className='flex flex-col gap-5 mx-auto'>
                {
                    step === 1 &&
                    <section className='flex'>
                        <Step1LeftPanel />
                        <SignUpStep1Form
                            register={register}
                            errors={errors}
                            successHandler={() => setStep(2)}
                            getValues={getValues}
                            setError={setError}
                            clearErrors={clearErrors}
                        />
                    </section>
                }                

                {
                    step === 2 &&
                    <section className=''>
                        <Step2Form
                            register={register}
                            successHandler={() => setStep(3)}
                            watch={watch}
                            avatar={avatar}
                            setAvatar={setAvatar}
                        />
                    </section>
                }

                {
                    step === 3 &&
                    <section>
                        <Step3Form
                            register={register}
                            successHandler={signUpHandler}
                            previousHandler={() => setStep(2)}
                            watch={watch}
                        />
                    </section>
                }

                {
                    step === 4 &&
                    <section>
                        <SignUpStep4 />
                    </section>
                }

            </div>

        </div>
    </main>
  )
}

export default App