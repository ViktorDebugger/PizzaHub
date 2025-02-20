import burgers from './../../assets/img/sections/section09/burgers.png';
import icon01 from './../../assets/img/sections/section09/icon01.png';
import icon02 from './../../assets/img/sections/section09/icon02.png';

const Section09 = () => {
    return (
        <div className="mb-[120px] ml-[0] 2xl:ml-[120px] flex flex-col-reverse 2xl:flex-row items-center 2xl:justify-between">
            <div className='px-[20px]'>
                <div className='mt-[20px] text-center xl:text-left'>
                    <span className='font-oswald font-bold text-[17px] leadinf-[28px] tracking-normal text-siteRed3'>About Our Food</span>
                </div>

                <div className='mt-[5px] text-center xl:text-left'>
                    <h1 className='font-oswald font-bold text-[30px] md:text-[60px] leading-[45px] md:leading-[67px] tracking-normal text-siteBlack'>
                        <p>Where Quality Meet</p>
                        <p>Excellent <span className='text-siteRed3'> Service.</span></p>
                    </h1>
                </div>

                <div className='mt-[30px] max-w-[630px] text-center xl:text-left'>
                    <span className='font-oswald font-normal text-[17px] leading-[28px] tracking-normal text-siteGray2'>Its the perfect dining experience where every dish is crafted with fresh, high-quality Experience quick
and efficient service that ensures your food is servead fresh Its the dining experience where every dish
is crafted with fresh, high-quality ingredients</span>
                </div>

                <div className='mt-[30px] flex flex-col sm:flex-row items-center gap-[20px]'>
                    <div className='flex gap-[15px]'>
                        <img src={icon01} alt="" className='w-[52px] h-[52px]'/>
                        <div>
                            <h1 className='font-oswald font-semibold text-[20px] leading-[26px] tracking-normal text-siteBlack'>Super Quality Food</h1>
                            <div className='max-w-[240px] mt-[5px]'>
                                <span className='font-oswald font-normal text-[17px] leading-[28px] tracking-normal text-siteBlack'>A team of dreamers and doers building
                                unique interactive music and art</span>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-[15px]'>
                        <img src={icon02} alt="" className='w-[52px] h-[52px]'/>
                        <div>
                            <h1 className='font-oswald font-semibold text-[20px] leading-[26px] tracking-normal text-siteBlack'>Well Reputation</h1>
                            <div className='max-w-[240px] mt-[5px]'>
                                <span className='font-oswald font-normal text-[17px] leading-[28px] tracking-normal text-siteBlack'>A team of dreamers and doers building
                                unique interactive music and art</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col-reverse sm:flex-row items-center gap-[22px] mt-[40px] text-center sm:text-left'>
                    <button className='bg-siteRed3 hover:bg-siteRedHover transition duration ease-in-out rounded-[9px] py-5 px-[50px]'>
                        <span className='text-white font-oswald font-semibold text-[17px] leading-[25px] trackimg-[0.8px]'>More About Us</span>
                    </button>
                    <div>
                        <h1 className='font-oswald font-semibold leading-[28px] tracking-normal text-siteYellow'>BRENDON GARREY</h1>
                        <h1 className='font-oswald font-bold leading-[23px] tracking-normal text-siteBlack'>CUSTOMER’S EXPERIENCE IS OUR HIGHEST PRIORITY.</h1>
                    </div>
                </div>
            </div>

            <div className='w-[90%] 2xl:max-w-[700px] relative'>
                <div className='rounded-[14px] bg-siteGreen py-[15px] px-[24px] absolute right-[120px] bottom-[100px] -rotate-30'>
                    <span className='font-oswald font-bold text-[36px] leading-[46px] tracking-normal text-white'>Since /1985</span>
                </div>
                <img src={burgers} alt=""  className='w-full rounded-[50px] 2xl:rounded-none'/>
            </div>
        </div>
    );
}
 
export default Section09;