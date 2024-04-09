import {
    FieldErrors,
    FieldValues,
    UseFormRegister,
} from 'react-hook-form'

type InputProps = {
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
    label: string;
    type: string;
    placeholder: string;
    name: string;
    required?: boolean;
    pattern?: any;
    minLength?: number;
    className?: string;
    widthFull?: boolean;
}

function Input({register, errors, label, type, placeholder, name, required, pattern = /.*/gim, minLength = 1, className = '', widthFull} : InputProps) {
  return (
    <label htmlFor={name} className='w-full'>
        <p>{errors[name] && <i className="fa-solid fa-triangle-exclamation text-error"></i>} {label}</p>
        <input 
            type={type}
            placeholder={placeholder}
            {...register(
                name,
                {
                    required: required,
                    pattern : pattern, 
                    minLength: minLength
                }
            )}
            className={`
                ${widthFull && 'w-full'}
                ${errors[name] && 'bg-red-100 text-error'}
                py-2 px-5 rounded-lg focus:outline-none focus:bg-zinc-200
                transition-all duration-200 ease-in-out
                ${className}
            `}
        />
    </label>
  )
}

export default Input