
export default function Step1LeftPanel() {
  return (
    <aside className='bg-soil-1 min-h-screen max-w-[750px] w-5/12 md:block hidden'>
        <div className='flex flex-col justify-between h-full text-soil-2 font-roboto'>
            <div className='px-16 pt-16 flex flex-col gap-10'>
            <div className='flex justify-start'>
                <img src='/logos/dribbblelogo.png' alt='' className='w-24'/>
            </div>
            <h2 className='font-[800] leading-10 text-4xl tracking-tight'>Discover the world's top Designers & Creatives</h2>
            </div>
            <div>
                <img src='/images/side-image.png' alt='' className='w-full object'/>
            </div>

            <div className='px-16 py-5'>
                <p>Art by <a href='https://dribbble.com/tarka' className='underline'>Peter Tarka</a></p>
            </div>
        </div>
    </aside>
  )
}

