import { useForm } from "react-hook-form";

type SignUpStep2FormProps = {
    successHandler: () => void;
}

function Step2Form({
    successHandler,
}: SignUpStep2FormProps) {

    useForm

    
  return (
    <div>
        <div className='w-36'>
            <img src="/logos/dribbblelogopink.png" alt="" />
        </div>
        <form onSubmit={successHandler}>
            <div>
                <h2>Welcome! Let's create your profile</h2>
                <p>Let others get to know you better! You can do these later</p>
            </div>
            <div>
                <h3>Add an avatar</h3>
                <div>
                    <img src="" alt="" />

                    <div>
                        <input type="file" name='avatar' placeholder='Choose image'/>
                        <div>
                            <i className="fa-solid fa-chevron-right"></i>
                            <p>Or choose one of our defaults</p>
                        </div>
                    </div>
                </div>
            </div>

        </form>
    </div>
  )
}

export default Step2Form