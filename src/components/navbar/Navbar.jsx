import logo from './../../assets/img/special/logo.png';
import down from './../../assets/img/icons/down.png'
import menu from './../../assets/img/icons/menu.png'
import basket from './../../assets/img/icons/greenBasket.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    function handleClose() {
        setIsOpen(false)
    }

    function handleOpen() {
        setIsOpen(true)
    }

    return (
        <>
            <div className="mx-auto max-w-7xl flex justify-between px-[20px] xl:px-[0] py-[20px]">
                <div className='flex items-center gap-2'>
                    <img src={logo} alt="" className='w-[70px] h-[60px]'/>
                    <h1 className='leading-[26.7px] tracking-normal font-normal text-[24px] text-siteRed font-fugazOne'>pizza hut</h1>
                </div>

                <div className='hidden lg:flex items-center gap-[40px] text-siteBlack font-medium leading-[28px] tracking-normal font-oswald'>
                    <button className='flex items-center gap-1'>
                        <span>Home</span>
                        <img src={down} alt="" />
                    </button>
                    <button className='flex items-center gap-1'>
                        <span>About Us</span>
                    </button>
                    <button className='flex items-center gap-1'>
                        <span>Shop</span>
                        <img src={down} alt="" />
                    </button>
                    <button className='flex items-center gap-1'>
                        <span>Blog</span>
                        <img src={down} alt="" />
                    </button>
                    <button className='flex items-center gap-1'>
                        <span>Pages</span>
                        <img src={down} alt="" />
                    </button>
                    <button className='flex items-center gap-1'>
                        <span>Contact</span>
                    </button>
                </div>

                <div className='hidden sm:flex items-center gap-[25px]'>
                    <button className='relative'>
                        <div className='absolute top-[-15px] right-[-15px] text-white bg-siteBlack w-5 h-5 rounded-[16px] flex items-center justify-center p-[4px] '>
                            <span className='font-medium text-[12px] tracking-normal leading-[16px] font-oswald'>0</span>
                        </div>
                        <img src={basket} alt="" />
                    </button>
                    <button className='font-semibold text-[17px] leading-[17px] tracking-[0.8px] font-oswald text-white py-4 px-[50px] bg-siteYellow rounded-[7px] hover:bg-siteYellowHover ease-in-out duration-300 transition'>
                        <span>Contact Us</span>
                    </button>
                    <button>
                        <img src={menu} alt="" />
                    </button>
                </div>

                <div onClick={handleOpen} className='flex sm:hidden items-center text-[25px]'>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
        
            <div className={`z-50 flex items-start justify-between pt-[50px] px-[30px] transition-all duration-300 ease-in-out leading-normal tracking-normal bg-white font-normal text-[24px] fixed top-0 bottom-0 left-0 right-0 h-screen ${isOpen ? "opacity-100 translate-x-0 flex visible" : "opacity-0 translate-x-4 invisible"}`}>
                <div>
                    <div className='flex flex-col gap-[40px] text-siteBlack font-medium leading-[28px] tracking-normal font-oswald'>
                        <button className='flex items-center gap-1'>
                            <span>Home</span>
                            <img src={down} alt="" />
                        </button>
                        <button className='flex items-center gap-1'>
                            <span>About Us</span>
                        </button>
                        <button className='flex items-center gap-1'>
                            <span>Shop</span>
                            <img src={down} alt="" />
                        </button>
                        <button className='flex items-center gap-1'>
                            <span>Blog</span>
                            <img src={down} alt="" />
                        </button>
                        <button className='flex items-center gap-1'>
                            <span>Pages</span>
                            <img src={down} alt="" />
                        </button>
                        <button className='flex items-center gap-1'>
                            <span>Contact</span>
                        </button>
                    </div>

                    <div className='flex flex-col items-center gap-[25px] mt-[50px]'>
                        <button className='relative'>
                            <div className='absolute top-[-15px] right-[-15px] text-white bg-siteBlack w-5 h-5 rounded-[16px] flex items-center justify-center p-[4px] '>
                                <span className='font-medium text-[12px] tracking-normal leading-[16px] font-oswald'>0</span>
                            </div>
                            <img src={basket} alt="" />
                        </button>
                        <button className='font-semibold text-[17px] leading-[17px] tracking-[0.8px] font-oswald text-white py-4 px-[50px] bg-siteYellow rounded-[7px] hover:bg-siteYellowHover ease-in-out duration-300 transition'>
                            <span>Contact Us</span>
                        </button>
                        <button>
                            <img src={menu} alt="" />
                        </button>
                    </div>
                </div>

                <div onClick={handleClose} className='flex sm:hidden items-center text-[25px]'>
                    <FontAwesomeIcon icon={faClose} />
                </div>

            </div>
        </>
        
    );
}
 
export default Navbar;