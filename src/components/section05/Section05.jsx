import bgImage from './../../assets/img/bg/section05.png';
import bus from './../../assets/img/icons/busGreen.png';
import deliveryMan from './../../assets/img/sections/section05/deliveryMan.png';

const Section05 = () => {
    return (
       <div className="bg-center bg-cover mt-[-2px]" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className='mx-auto max-w-7xl py-[100px] px-5 xl:px-0 flex flex-col lg:flex-row justify-between items-center'>
                <div className='text-center md:text-left'>
                    <div>
                        <span className='font-oswald font-bold text-[17px] leading-[28px] tracking-normal text-siteYellow'>
                            Crispy, Every Bite Taste
                        </span>
                    </div>
                    <div className='mt-[5px]'>
                        <h1 className='font-oswald font-bold text-[40px] leading-[40px] md:text-[60px] md:leading-[67px] lg:text-[40px] lg:leading-[40px] xl:text-[60px] xl:leading-[67px] tracking-normal text-white'>
                            <p>30 Minutes Fast</p>
                            <p><span className='text-siteYellow'>Delivery</span> Challenge</p>
                        </h1>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row items-center justify-between gap-[40px] lg:gap-[10px] xl:gap-[64px]'>
                    <div className='mt-[10px] lg:mt-[-115px]'>
                        <img src={deliveryMan} alt="" />
                    </div>

                    <button className='rounded-[9px] bg-white hover:bg-siteGray3 transition duration ease-in-out py-6 px-[25px] xl:px-[50px] flex justify-center items-center gap-[10px]'>
                        <img src={bus} alt="" />
                        <span className='font-oswald font-semibold text-[17px] leading-[17px] tracking-[0.8px] text-siteBlack'>Order Now</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default Section05;