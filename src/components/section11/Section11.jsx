import star from './../../assets/img/sections/section11/star.png';
import cook from './../../assets/img/sections/section11/cook.png';
import bgImage from './../../assets/img/bg/section11.png';

const Section11 = () => {
    return (
        <div className='bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="mx-auto px-5 lg:px-0 max-w-7xl py-[60px] flex flex-col lg:flex-row gap-[54px] items-center" >
                <img src={cook} alt="" />

                <div className="text-center">
                    <h1 className="font-oswald font-semibold text-[29px] leading-[37px] tracking-normal text-siteBlack">Piter Bowman</h1>

                    <div className="mt-[6px]">
                        <span className="font-oswald font-semibold text-[20px] leading-[26px] tracking-normal text-siteYellow">Business CEO & Co Founder</span>
                    </div>

                    <div className="mt-[28px] max-w-[720px]">
                        <span className="font-oswald font-medium text-[34px] leading-[44px] tracking-normal text-siteBlack">“Thank You For Dinner Last Night. It Was Amazing!! I
    Have Say It’s The Best Meal I Have Had In Quite Some
    Time. Will Definitely Be Seeing More Eating Next Year.”</span>
                    </div>

                    <div className="flex gap-[3.5px] mt-6 justify-center">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>

                    <div className='mt-[50px] rounded-[30px] border border-dashed border-siteGray2 py-[10px] px-[35px] flex justify-between w-[146px] mx-auto items-center'>
                        <div className='w-[9px] h-[9px] bg-siteGray2 rounded-full'></div>
                        <div className='p-1 border-siteGreen border-[2px] rounded-full'>
                            <div className='w-[9px] h-[9px] bg-siteGreen rounded-full'></div>
                        </div>
                        <div className='w-[9px] h-[9px] bg-siteGray2 rounded-full'></div>
                        <div className='w-[9px] h-[9px] bg-siteGray2 rounded-full'></div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
 
export default Section11;