import item01 from './../../assets/img/sections/section06/item01.png';
import item02 from './../../assets/img/sections/section06/item02.png';
import item03 from './../../assets/img/sections/section06/item03.png';
import item04 from './../../assets/img/sections/section06/item04.png';
import item05 from './../../assets/img/sections/section06/item05.png';
import bus from './../../assets/img/icons/busBlack.png';

const Section06 = () => {
    return (
        <div className="flex flex-col lg:flex-row mt-[-2px]">
            <div className='pt-[40px] pb-[100px] lg:pt-[100px] lg:pb-0 px-[20px] lg:px-[100px] text-center w-full lg:w-[45%] bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${item01})` }}>
                <span className='font-oswald font-bold text-[36px] leading-[46px] tracking-normal text-white'>Today</span>
                
                <h1 className='font-oswald font-bold text-[40px] leading-[40px] lg:text-[67px] lg:leading-[67px] tracking-normal text-white'>Special Delicious</h1>

                <div className='mt-0 lg:mt-[-25px]'>
                    <span className='font-oswald font-semibold text-[40px] leading-[52px] tracking-normal text-white'>Beef</span>
                    <span className='font-oswald font-medium text-[40px] leading-[52px] tracking-normal text-siteYellow'>chiness Pizza</span>
                </div>
            </div>

            <div className='flex flex-col md:flex-row flex-wrap w-full lg:w-[55%]'>
                <div style={{ backgroundImage: `url(${item02})` }} className='py-[100px] md:py-[60px] pl-[45px] w-full basis-1 md:basis-1/2 bg-center bg-cover bg-no-repeat'>
                    <span className='font-oswald font-medium text-[26px] leading-[33px] tracking-normal text-siteYellow'>Delicious</span>
                    
                    <h1 className='font-oswald font-bold text-[40px] leading-[52px] tracking-normal text-white'>Burger Combo</h1>

                    <div className='mt-1'>
                        <span className='font-oswald font-semibold text-[18px] leading-[23px] tracking-normal text-white'>This Weekend Only</span>
                    </div>

                    <div>
                        <span className='font-oswald font-semibold text-[20px] leading-[49px] tracking-normal text-white'>Limited Offer /</span>
                        <span className='font-oswald font-bold text-[44px] leading-[49px] tracking-normal text-white'> $5</span>
                    </div>

                    <button className='mt-[40px] rounded-[9px] bg-siteYellow hover:bg-siteYellowHover transition duration ease-in-out py-6 px-[60px] flex justify-center items-center gap-[10px]'>
                        <img src={bus} alt="" />
                        <span className='font-oswald font-bold text-[17px] leading-[17px] tracking-[0.8px] text-siteBlack'>Order Now</span>
                    </button>
                </div>

                <div style={{ backgroundImage: `url(${item03})` }} className='py-[120px] md:py-[60px] pl-[45px] w-full basis-1 md:basis-1/2 bg-center bg-cover bg-no-repeat'>
                    <span className='font-oswald font-semibold text-[18px] leading-[23px] tracking-normal text-siteYellow'>Crispy, Every Bite Taste</span>

                    <div className='mt-[6px]'>
                        <h1 className='font-oswald font-bold text-[53px] leading-[69px] tracking-normal text-white'>
                            <p>SUPER</p>
                            <p>DELICIOUS</p>
                        </h1>
                    </div>
                </div>

                <div style={{ backgroundImage: `url(${item04})` }} className='mt-[-2px] py-[80px] pl-[45px] w-full basis-1 md:basis-1/2 bg-center bg-cover bg-no-repeat'>
                    <span className='font-oswald font-semibold text-[18px] leading-[23px] tracking-normal text-white'>Crispy, Every Bite Taste</span>

                    <div className='mt-[6px]'>
                        <h1 className='font-oswald font-bold text-[53px] leading-[69px] tracking-normal text-white'>
                            <p>FASH FOOD</p>
                            <p>MEAL</p>
                        </h1>
                    </div>

                    <div className='mt-1'>
                        <span className='font-oswald font-bold leading-[23px] tracking-normal text-white'>
                            <p>The mouth-watering aroma of</p>
                            <p>sizzling burgers</p>
                        </span>
                    </div>

                    <button className='mt-[40px] rounded-[9px] bg-siteYellow hover:bg-siteYellowHover transition duration ease-in-out py-6 px-[60px] flex justify-center items-center gap-[10px]'>
                        <img src={bus} alt="" />
                        <span className='font-oswald font-bold text-[17px] leading-[17px] tracking-[0.8px] text-siteBlack'>Order Now</span>
                    </button>
                </div>
                
                <div style={{ backgroundImage: `url(${item05})` }} className='mt-[-2px] py-[227px] pl-[45px] w-full basis-1 md:basis-1/2 bg-center bg-cover bg-no-repeat'>
                </div>
            </div>
        </div>
    );
}
 
export default Section06;