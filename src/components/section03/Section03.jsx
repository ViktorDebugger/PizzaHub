import pizza from './../../assets/img/sections/section03/pizza.png';
import chicken from './../../assets/img/sections/section03/chicken.png';
import potato from './../../assets/img/sections/section03/potato.png';
import cheeseburger from './../../assets/img/sections/section03/cheeseburger.png';
import bgImage from './../../assets/img/bg/section03.png';

const Section03 = () => {
    return (
        <div style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="mx-auto max-w-7xl py-[120px]">
                <div className='mt-[20px] text-center'>
                    <span className='font-oswald font-bold text-[17px] leadinf-[28px] tracking-normal text-siteGreen'>About Our Food</span>
                </div>

                <div className='mt-[5px] text-center'>
                    <h1 className='font-oswald font-bold text-[30px] sm:text-[60px] leading-[45px] sm:leading-[67px] tracking-normal text-siteBlack'>
                        Hot Delicious Item
                    </h1>
                </div>

                <div className="flex flex-col md:flex-row gap-5 justify-center mt-[30px] px-5 md:px-0">
                    <button className="py-[13px] px-[36px] rounded-[40px] bg-siteYellow hover:bg-siteYellowHover transition duration ease-in-out">
                        <span className="font-oswald font-medium text-[18px] leading-[28px] tracking-normal text-siteBlack">Chicken Fry</span>
                    </button>
                    <button className="py-[13px] px-[36px] rounded-[40px] border border-siteGray3 hover:bg-siteGray3 transition duration ease-in-out">
                        <span className="font-oswald font-medium text-[18px] leading-[28px] tracking-normal text-siteBlack">Pizza</span>
                    </button>
                    <button className="py-[13px] px-[36px] rounded-[40px] border border-siteGray3 hover:bg-siteGray3 transition duration ease-in-out">
                        <span className="font-oswald font-medium text-[18px] leading-[28px] tracking-normal text-siteBlack">Burger</span>
                    </button>
                    <button className="py-[13px] px-[36px] rounded-[40px] border border-siteGray3 hover:bg-siteGray3 transition duration ease-in-out">
                        <span className="font-oswald font-medium text-[18px] leading-[28px] tracking-normal text-siteBlack">Deserts</span>
                    </button>
                </div>

                <div className='mt-5 flex-col lg:flex-row pt-[30px] pb-[13px] px-[27px] flex justify-between gap-[100px] lg:gap-0'>
                    <div className='flex flex-col justify-end items-center text-center basis-1/4'>
                        <img src={pizza} alt="" />
                        <div className='mt-[28px]'>
                            <h1 className='font-oswald font-bold text-[26px] leading-[33px] tracking-normal text-siteBlack'>CHICAGO DEEP PIZZA</h1>
                        </div>
                        <div className='mt-[2px]'>
                            <span className='font-oswald font-normal text-[17px] leading-[28px] tracking-normal text-siteGray2'>Its the perfect dining experience where
                            Experience quick and efficient</span>
                        </div>
                    </div>

                    <div className='flex flex-col justify-end items-center text-center basis-1/4'>
                        <img src={potato} alt="" className='w'/>
                        <div className='mt-[28px] pt-[23px]'>
                            <h1 className='font-oswald font-bold text-[26px] leading-[33px] tracking-normal text-siteBlack'>FAST FOOD COMBO</h1>
                        </div>
                        <div className='mt-[2px]'>
                            <span className='font-oswald font-normal text-[17px] leading-[28px] tracking-normal text-siteGray2'>Its the perfect dining experience where
                            Experience quick and efficient</span>
                        </div>
                    </div>

                    <div className='flex flex-col justify-end items-center text-center basis-1/4'>
                        <img src={chicken} alt="" />
                        <div className='mt-[28px]'>
                            <h1 className='font-oswald font-bold text-[26px] leading-[33px] tracking-normal text-siteBlack'>GRILLED CHICKEN</h1>
                        </div>
                        <div className='mt-[2px]'>
                            <span className='font-oswald font-normal text-[17px] leading-[28px] tracking-normal text-siteGray2'>Its the perfect dining experience where
                            Experience quick and efficient</span>
                        </div>
                    </div>

                    <div className='flex flex-col justify-end items-center text-center basis-1/4'>
                        <img src={cheeseburger} alt="" />
                        <div className='mt-[28px]'>
                            <h1 className='font-oswald font-bold text-[26px] leading-[33px] tracking-normal text-siteBlack'>WHOPPER BURGER KING</h1>
                        </div>
                        <div className='mt-[2px]'>
                            <span className='font-oswald font-normal text-[17px] leading-[28px] tracking-normal text-siteGray2'>Its the perfect dining experience where
                            Experience quick and efficient</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
 
export default Section03;