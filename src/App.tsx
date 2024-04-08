import { useState } from 'react'
import './App.css'
import SignUpStep1Form from './components/SignUp/Step1Form';
import Step1LeftPanel from './components/SignUp/Step1LeftPanel';
import Step2Form from './components/SignUp/Step2Form';



function App() {

    const [step, setStep] = useState(1);
    

  return (

    <main className=''>
        <div>
            <div className='flex flex-col gap-5 mx-auto'>
                {
                    step === 0 &&
                    <div className='flex'>
                        <Step1LeftPanel />
                        <SignUpStep1Form 
                            successHandler={() => setStep(1)}
                        />                        
                    </div>
                }                

                {
                    step === 1 &&
                    <div className=''>
                        <Step2Form
                            successHandler={() => setStep(2)}                    
                        />
                    </div>
                }

            </div>

        </div>
    </main>
  )
}

export default App