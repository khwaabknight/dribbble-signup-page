import links from '../../data/navlinks.json'
import Button from '../common/Button'
import SearchInput from '../common/SearchInput';

type NavbarProps = {
  openSideBar:() => void;
}

function Navbar({openSideBar}:NavbarProps) {
  return (
    <div 
      className='w-full'
    >
      <div 
        className=' mx-auto flex justify-between py-6 px-5'
      >

        {/* Logo and navlinks */}
        <div className='flex items-center justify-center gap-8'>

          {/* Hamburger menu */}
          <div className='lg:hidden flex items-center justify-center'>
            <Button onClick={openSideBar} className='text-accent-1 gap-3 px-2'>              
              <i className="fa-solid fa-bars"></i>
            </Button>
          </div>

          {/* Logo */}
          <div className='md:flex hidden w-24'>
            <img src="logos/dribbblelogo.png" alt="" />
          </div>

          {/* navlinks */}
          <div className='lg:flex hidden items-center justify-center gap-5'>
            {
              links.map(({id,text,link}) => (
                <div key={id} className=''>
                  <a  href={link} className='text-gray-500 capitalize px-4 py-2 rounded-full font-semibold text-sm hover:bg-accent-2'>{text}</a>
                </div>
              ))
            }
          </div>
        </div>

        {/* Login signup buttons */}
        <div className='flex items-center justify-end gap-6'>
          <SearchInput className='hidden lg:block'/>

          <i className="fa-solid fa-briefcase text-xl text-gray-400"></i>

          <div>
            <img src="/images/man-placeholder.png" alt="" className='w-10 h-10 rounded-full' />
          </div>
          
          <Button primary className='lg:flex hidden py-2 px-5' >
            Upload
          </Button>
        </div>
      </div>
        
    </div>
  )
}

export default Navbar