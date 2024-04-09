import React from 'react'

type OverlayProps = {
    showOverlay?:boolean,
    closeHandler:() => void,
    children:React.ReactNode,
}

function Overlay({showOverlay,closeHandler,children} : OverlayProps) {
    if (!showOverlay) return null;

    const outsideClickHandler = (e:any) => {
        if(e.target.id === 'Overlaybg') closeHandler();
    }

    return (
        <div onClick={outsideClickHandler} id='Overlaybg' className='fixed inset-0 bg-gray-900 bg-opacity-20 backdrop-blur-sm flex justify-center items-center z-50 w-full'>
            {children}
        </div>
    )
}

export default Overlay