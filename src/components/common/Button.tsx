type ButtonProps = {
    children: React.ReactNode
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
    className?: string
    primary?: boolean
    secondary?: boolean
    disabled?: boolean
}

function Button({
    children,
    onClick,
    type = 'button',
    className = '',
    primary = false,
    secondary = false,
    disabled = false
}: ButtonProps) {
  return (
    <button
        className={`
            ${primary && 'bg-accent-1 text-white hover:bg-accent-1/90'}
            ${secondary && ' bg-accent-2 text-white'}
            disabled:cursor-not-allowed
            rounded-lg px-16 py-1 capitalize flex items-center justify-center font-semibold text-lg transition duration-300 ease-in-out whitespace-nowrap focus:outline-none
            ${className}
        `}
        onClick={onClick}
        type={type || 'button'}
        disabled={disabled}
    >
        {children}
    </button>
  )
}

export default Button