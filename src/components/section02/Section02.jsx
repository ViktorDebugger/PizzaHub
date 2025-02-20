import pizza from './../../assets/img/sections/section02/pizza.png';
import A from './../../assets/img/sections/section02/A.png';
import F from './../../assets/img/sections/section02/F.png';
import O from './../../assets/img/sections/section02/O.png';
import photo from './../../assets/img/sections/section02/photo.png';
import signature from './../../assets/img/sections/section02/signature.png';

const Section02 = () => {
    return (
        <div className="flex flex-col items-center xl:flex-row justify-between gap-2 pb-[120px] ml-0 pl-0">
            <img src={pizza} alt="" className='z-10 h-auto max-h-[250px] max-w-[300px] sm:max-h-[450px] sm:max-w-[500px] md:max-h-[500px] md:max-w-[600px] 2xl:max-h-[550px] 2xl:max-w-[700px] relative ml-[-1px]'/>
            <div className='pr-0 xl:pr-4 max-w-[692px] text-center xl:text-left px-5 md:px-0'>
                <div className='mt-[20px]'>
                    <span className='font-oswald font-bold text-[17px] leadinf-[28px] tracking-normal text-siteGreen'>About Our Food</span>
                </div>
                <div className='mt-[5px]'>
                    <h1 className='font-oswald font-bold text-[30px] sm:text-[60px] leading-[45px] sm:leading-[67px] tracking-normal text-siteBlack'>
                        <p>The Best Delicious Food</p>
                        <p>Made From Us...</p>
                    </h1>
                </div>
                <div className='mt-[20px]'>
                    <span className='font-oswald font-normal text-[17px] leading-[28px] tracking-normal text-siteGray2'>Its the perfect dining experience where every dish is crafted with fresh, high-quality dining experience Experience quick and efficient service that ensures your food is servead fresh Its the where every dining experience where every dish is crafted with fresh, high-quality ingredients fresh, high-quality</span>
                </div>
                <div className='mt-[20px] border-t border-t-siteGray3 flex flex-col md:flex-row ml-2'>

                    <div className='px-[10px] md:pl-[40px] md:pr-[80px] pt-[20px] relative border-none md:border-r border-r-siteGray3'>
                        <span className='font-oswald font-medium text-[18px] leading-[23px] tracking-normal text-siteBlack'>Satsified Clients</span>
                        <div className='mt-[5px]'>
                            <h1 className='font-oswald font-bold text-[50px] leading-[56px] tracking-normal text-siteYellow'>250+</h1>
                        </div>
                        <img src={O} alt="" className='hidden md:flex absolute z-0 top-[15px] left-1'/>
                    </div>

                    <div className='px-[10px] md:pl-[78px] md:pr-[78px] pt-[20px] relative border-none md:border-r border-r-siteGray3'>
                        <span className='font-oswald font-medium text-[18px] leading-[23px] tracking-normal text-siteBlack'>Total Food Categories</span>
                        <div className='mt-[5px]'>
                            <h1 className='font-oswald font-bold text-[50px] leading-[56px] tracking-normal text-siteYellow'>153+</h1>
                        </div>
                        <img src={F} alt="" className='hidden md:flex absolute z-0 top-[15px] left-[72px]'/>
                    </div>

                    <div className='px-[10px] md:pl-[78px] pt-[20px] relative'>
                        <span className='font-oswald font-medium text-[18px] leading-[23px] tracking-normal text-siteBlack'>Award Win</span>
                        <div className='mt-[5px]'>
                            <h1 className='font-oswald font-bold text-[50px] leading-[56px] tracking-normal text-siteYellow'>25+</h1>
                        </div>
                        <img src={A} alt="" className='hidden md:flex absolute z-0 top-[15px] right-[35px]'/>
                    </div>

                </div>
                <div className='flex flex-col sm:flex-row gap-[40px] items-center mt-[56px] mb-[20px]'>
                    <div className='flex gap-[20px] items-center'>
                        <img src={photo} alt="" />
                        <img src={signature} alt="" />
                    </div>
                    <div className='rounded-[19px] bg-siteBlack py-[10px] px-[50px] sm:px-[75px] 2xl:px-[100px] font-oswald font-semibold leading-[16px] tracking-normal text-white'>
                        <span>
                            <span>Foundation, since</span>
                            <span className='text-siteYellow'> 21st</span>
                            <span> Oct , 2019</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Section02;