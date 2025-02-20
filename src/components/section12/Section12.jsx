import burger from './../../assets/img/sections/section12/burger.png';
import potato from './../../assets/img/sections/section12/potato.png';
import item01 from './../../assets/img/sections/section12/item01.png';
import item02 from './../../assets/img/sections/section12/item02.png';
import item03 from './../../assets/img/sections/section12/item03.png';

const Section12 = () => {
    return (
        <div className="py-[120px] mx-auto max-w-7xl relative">
            <img src={burger} alt="" className='absolute'/>
            <img src={potato} alt="" className='absolute right-0 bottom-0'/>
            <div className='mt-[20px] text-center'>
                <span className='font-oswald font-bold text-[17px] leadinf-[28px] tracking-normal text-siteGreen'>NEWS & BLOG</span>
            </div>

            <div className='mt-[5px] text-center'>
                <h1 className='font-oswald font-bold text-[30px] sm:text-[60px] leading-[45px] sm:leading-[67px] tracking-normal text-siteBlack'>
                    Update News & Blog
                </h1>
            </div>

            <div className='mt-[60px] mx-[20px] xl:mx-0 px-[20px] gap-[20px] xl:gap-0 lg:px-0 flex flex-col lg:flex-row justify-between items-center'>
                <div className='max-w-[414px]'>
                    <img src={item01} alt="" className='rounded-t-[16px]'/>
                    <div className='p-[30px]'>
                        <div className='flex gap-[34px] font-oswald font-semibold text-[17px] leading-[28px] tracking-normal text-siteBlack pb-[21px] border-b border-b-siteGreen'>
                            <span>15 Feb 2024</span>
                            <span>Comments (0)</span>
                        </div>
                        <div className='mt-5'>
                            <h1 className='font-oswald font-semibold text-[28px] leading-[36px] tracking-normal text-siteBlack'>
                            Quick Cravings: Unraveling Fast
                            Food Delights
                            </h1>
                        </div>

                        <div className='mt-[17px]'>
                            <span className='font-oswald font-normal text-[17px] leading-[28px] tracking-normal text-siteGray2'>
                            There are many variations of passages of Lorem Ipsum
                            available, but majority have suffered Lorem haca
                            ullamcorper donec ante habi believable. If you are going
                            to use a passage...
                            </span>
                        </div>
                    </div>
                </div>

                <div className='max-w-[414px]'>
                    <img src={item02} alt="" className='rounded-t-[16px]'/>
                    <div className='p-[30px]'>
                        <div className='flex gap-[34px] font-oswald font-semibold text-[17px] leading-[28px] tracking-normal text-siteBlack pb-[21px] border-b border-b-siteGreen'>
                            <span>15 Feb 2024</span>
                            <span>Comments (0)</span>
                        </div>
                        <div className='mt-5'>
                            <h1 className='font-oswald font-semibold text-[28px] leading-[36px] tracking-normal text-siteBlack'>
                            Veggie Vibes: Garden Fresh
                            Delightful Creations
                            </h1>
                        </div>

                        <div className='mt-[17px]'>
                            <span className='font-oswald font-normal text-[17px] leading-[28px] tracking-normal text-siteGray2'>
                            There are many variations of passages of Lorem Ipsum
                            available, but majority have suffered Lorem haca
                            ullamcorper donec ante habi believable. If you are going
                            to use a passage...
                            </span>
                        </div>
                    </div>
                </div>

                <div className='max-w-[414px]'>
                    <img src={item03} alt="" className='rounded-t-[16px]'/>
                    <div className='p-[30px]'>
                        <div className='flex gap-[34px] font-oswald font-semibold text-[17px] leading-[28px] tracking-normal text-siteBlack pb-[21px] border-b border-b-siteGreen'>
                            <span>15 Feb 2024</span>
                            <span>Comments (2)</span>
                        </div>
                        <div className='mt-5'>
                            <h1 className='font-oswald font-semibold text-[28px] leading-[36px] tracking-normal text-siteBlack'>
                            Bold Bite: Exotic Flavors, Global
                            Adventure
                            </h1>
                        </div>

                        <div className='mt-[17px]'>
                            <span className='font-oswald font-normal text-[17px] leading-[28px] tracking-normal text-siteGray2'>
                            There are many variations of passages of Lorem Ipsum
                            available, but majority have suffered Lorem haca
                            ullamcorper donec ante habi believable. If you are going
                            to use a passage...
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Section12;