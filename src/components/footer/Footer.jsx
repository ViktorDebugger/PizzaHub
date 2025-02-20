import bgImage from './../../assets/img/bg/footer.png';
import right from './../../assets/img/icons/rightFooter.png';
const Footer = () => {
    return (
        <div className='bg-center bg-no-repeat bg-cover pt-[100px]' style={{ backgroundImage: `url(${bgImage})` }}>
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col xl:flex-row justify-between items-center mb-[100px]'>
                    <div className='mx-[20px] xl:mx-0 py-[40px] px-[45px] text-white bg-siteRed3 rounded-[30px]'>
                        <h1 className='font-fugazOne font-normal text-[24px] leading-[26px] tracking-normal'>pizza hut</h1>
                        <div className='ml-[17px] mt-[-10px]'>
                            <span className='font-fugazOne font-normal text-[10px] leading-[26px] tracking-normal'>FOOD & RESTAURANT</span>
                        </div>

                        <div className='mt-[56px]'>
                            <span className='font-fredoka font-regular leading-[26px] tracking-normal'>Tuesday – Saturday: 12:00pm – 23:00pm</span>
                        </div>

                        <div className='mt-3'>
                            <span className='font-fredoka font-normal leading-[26px] tracking-normal underline'>Closed on Sunday</span>
                        </div>

                        <div className='mt-[94px]'>
                            <span className='font-fredoka font-normal leading-[26px] tracking-normal'>5 star rated on TripAdvisor</span>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row items-center md:items-start gap-[100px] mt-[100px] xl:mt-0 px-10 lg:px-0'>
                        <div>
                            <div className='w-[78px] border-b-siteYellow border-b-[4px]'>
                                <h1 className='font-fredoka font-bold text-[26px] leading-[25px] tracking-normal '>About</h1>
                            </div>

                            <div className='flex flex-col gap-[13px] mt-[46px]'>
                                <div className='flex items-center gap-[10px] cursor-pointer'>
                                    <img src={right} alt="" />
                                    <span className='font-epilogue font-normal leading-[26px] tracking-normal'>Fredoka One</span>
                                </div>

                                <div className='flex items-center gap-[10px] cursor-pointer'>
                                    <img src={right} alt="" />
                                    <span className='font-epilogue font-normal leading-[26px] tracking-normal'>Special Dish</span>
                                </div>

                                <div className='flex items-center gap-[10px] cursor-pointer'>
                                    <img src={right} alt="" />
                                    <span className='font-epilogue font-normal leading-[26px] tracking-normal'>Reservation</span>
                                </div>

                                <div className='flex items-center gap-[10px] cursor-pointer'>
                                    <img src={right} alt="" />
                                    <span className='font-epilogue font-normal leading-[26px] tracking-normal'>Contact</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='w-[69px] border-b-siteYellow border-b-[4px]'>
                                <h1 className='font-fredoka font-bold text-[26px] leading-[25px] tracking-normal '>Menu</h1>
                            </div>

                            <div className='flex flex-col gap-[13px] mt-[46px] cursor-pointer'>
                                <div className='flex items-center gap-[10px]'>
                                    <img src={right} alt="" />
                                    <span className='font-epilogue font-normal leading-[26px] tracking-normal'>Steaks</span>
                                </div>

                                <div className='flex items-center gap-[10px] cursor-pointer'>
                                    <img src={right} alt="" />
                                    <span className='font-epilogue font-normal leading-[26px] tracking-normal'>Burgers</span>
                                </div>

                                <div className='flex items-center gap-[10px] cursor-pointer'>
                                    <img src={right} alt="" />
                                    <span className='font-epilogue font-normal leading-[26px] tracking-normal'>Coctails</span>
                                </div>

                                <div className='flex items-center gap-[10px] cursor-pointer'>
                                    <img src={right} alt="" />
                                    <span className='font-epilogue font-normal leading-[26px] tracking-normal'>Bar B Q</span>
                                </div>

                                <div className='flex items-center gap-[10px] cursor-pointer'>
                                    <img src={right} alt="" />
                                    <span className='font-epilogue font-normal leading-[26px] tracking-normal'>Desserts</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className='w-[136px] border-b-siteYellow border-b-[4px]'>
                                <h1 className='font-fredoka font-bold text-[26px] leading-[25px] tracking-normal '>Newsletter</h1>
                            </div>
                            <div className='mt-[46px]'>
                                <span className='font-epilogue font-normal leading-[26px] tracking-normal'>Get recent news and updates.</span>
                            </div>

                            <input type="text" placeholder='Email Address' className='py-[25px] px-9 font-epilogue text-normal leading-normal tracking-normal text-siteGray2 rounded-[16px] border-[2px] border-siteGray4 w-[250px] md:w-[360px] h-[63px] mt-[15px]'/>

                            <div className='mt-[21px] rounded-[12px] border-[4px] relative border-siteRed3 p-1 w-full md:w-[150px] h-[72px]'>
                                <button className='w-full absolute left-[-22px] top-[4px] py-[15px] px-[42px] bg-siteRed3 hover:bg-siteRedHover transition duration ease-in-out rounded-[12px]'>
                                    <span className='font-fredoka font-normal leading-normal tracking-normal text-white'>Subscribe</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='pt-5 pb-3 flex justify-between border-t-[4px] px-5 gap-10 xl:px-0 border-t-siteYellow3'>
                    <div>
                        <span className='font-fugazOne font-normal leading-[26px] tracking-normal text-siteRed3'>© 2024 pizza hub</span>
                        <span className='font-fredoka font-bold leading-[26px] tracking-normal'> | All shawonetc3 Themes</span>

                    </div>
                    <div className='flex gap-[20px] font-fredoka font-bold leading-[26px] tracking-normal underline'>
                        <span>Facebook</span>
                        <span>Instagram</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;