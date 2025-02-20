import line from './../../assets/img/sections/section10/horizontalDivider.png';

const Section10 = () => {
    return (
        <div className="bg-beige py-[120px]">
            <div className="mx-auto max-w-7xl text-center">
                <div className='mt-[20px]'>
                    <span className='font-oswald font-bold text-[17px] leadinf-[28px] tracking-normal text-siteGreen'>FOOD PROCESSING</span>
                </div>

                <div className='mt-[5px]'>
                    <h1 className='font-oswald font-bold text-[30px] sm:text-[60px] leading-[45px] sm:leading-[67px] tracking-normal text-siteBlack'>
                        HOW WE SERVE YOU?
                    </h1>
                </div>

                <div className="mt-[60px] flex flex-col lg:flex-row gap-[24px] relative z-10">
                    <img src={line} alt="" className='hidden lg:flex absolute z-0 top-[110px] w-[900px] xl:w-[1000px] left-[100px]'/>
                    <div className="pt-[90px] px-[50px] pb-[60px] z-10 flex flex-col items-center">
                        <h1 className="font-oswald font-bold text-[28px] leading-[36px] text-siteBlack">COOKING WITH CARE</h1>
                        <div className="mt-[10px] max-w-[311px]">
                            <span className="font-oswald font-normal text-[17px] leading-[28px] tracking-normal text-siteGray2">
                            Its the perfect dining experience where Experience
                            quick and efficient
                            </span>
                        </div>
                    </div>

                    <div className="mx-[20px] lg:mx-0 pt-[90px] px-[50px] pb-[60px] bg-white border border-dashed border-siteGray2 rounded-[17px] z-10 flex flex-col items-center">
                        <h1 className="font-oswald font-bold text-[28px] leading-[36px] text-siteBlack">QUICKLY DELIVERY</h1>
                        <div className="mt-[10px] max-w-[311px]">
                            <span className="font-oswald font-normal text-[17px] leading-[28px] tracking-normal text-siteGray2">
                            Its the perfect dining experience where Experience
                            quick and efficient
                            </span>
                        </div>
                    </div>

                    <div className="pt-[90px] px-[50px] pb-[60px] z-10 flex flex-col items-center">
                        <h1 className="font-oswald font-bold text-[28px] leading-[36px] text-siteBlack">CHOOSE FOOD</h1>
                        <div className="mt-[10px] max-w-[311px]">
                            <span className="font-oswald font-normal text-[17px] leading-[28px] tracking-normal text-siteGray2">
                            Its the perfect dining experience where Experience
                            quick and efficient
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Section10;