import item01 from './../../assets/img/sections/section01/item01.png';
import item02 from './../../assets/img/sections/section01/item02.png';
import item03 from './../../assets/img/sections/section01/item03.png';
import right from './../../assets/img/icons/right.png';
import bus from './../../assets/img/icons/busBlack.png';
import burger from './../../assets/img/sections/section01/burger.png';
import vegetables from './../../assets/img/sections/section01/vegetables.png';
const Section01 = () => {
    return (
        <div className="py-[120px] max-w-7xl mx-auto flex flex-col xl:flex-row px-[20px] xl:px-0 gap-4 xl:gap-8 relative">
            <img src={burger} alt="" className='absolute bottom-0 right-[30px] w-[124px] rounded-[100px]'/>
            <img src={vegetables} alt="" className='absolute bottom-[-440px] left-0 md:left-[-120px]'/>
            <div style={{ backgroundImage: `url(${item01})` }} className='basis-1/3 py-[50px] px-[35px] rounded-[9px] bg-cover bg-center h-[331px]'>
                <span className='font-oswald font-bold text-[18px] leading-[23.4px] tracking-normal text-siteYellow'>Crispy, Every Bite Taste</span>
                <h1 className='font-oswald font-bold text-[38px] leading-[49.4px] tracking-normal text-white'>
                    <p>Delicious &</p>
                    <p>Hot pizza</p>
                </h1>
                <button className='flex items-center gap-[10px] mt-3'>
                    <span className='font-oswald font-medium text-[17px] leading-[28px] tracking-normal text-white '>Order Now</span>
                    <img src={right} alt="" />
                </button>
            </div>

            <div style={{ backgroundImage: `url(${item02})` }} className='basis-1/3 py-[50px] px-[35px] rounded-[9px] bg-cover bg-center h-[331px]'>
                <span className='font-oswald font-medium text-[13px] leading-[33px] tracking-normal text-white'>Todays</span>
                <span className='font-oswald font-medium text-[26px] leading-[33px] tracking-normal text-siteYellow'> Delicious</span>
                <div className='mt-[15px]'>
                    <h1 className='font-oswald font-bold text-[40px] leading-[52px] tracking-normal text-white'>
                        French Fry
                    </h1>
                </div>
                <div className='mt-[10px]'>
                    <span className='font-medium font-oswald text-[18px] leading-[23px] tracking-normal text-white'>This Weekend only</span>
                </div>
                <button className='flex items-center gap-[10px] mt-[52px] bg-siteYellow hover:bg-siteYellowHover transition duration ease-in-out py-[20px] px-[40px] rounded-[9px]'>
                    <img src={bus} alt="" />
                    <span className='font-oswald font-medium text-[17px] leading-[17px] tracking-[0.8px] text-siteBlack'>Order Now</span>
                </button>
            </div>

            <div style={{ backgroundImage: `url(${item03})` }} className='basis-1/3 py-[50px] px-[35px] rounded-[9px] bg-cover bg-center h-[331px]'>
                <span className='font-oswald font-bold text-[18px] leading-[23.4px] tracking-normal text-siteYellow'>Crispy, Every Bite Taste</span>
                <h1 className='font-oswald font-bold text-[38px] leading-[49.4px] tracking-normal text-white'>
                    <p>Chiken &</p>
                    <p>French Fry</p>
                </h1>
                <button className='flex items-center gap-[10px] mt-3'>
                    <span className='font-oswald font-medium text-[17px] leading-[28px] tracking-normal text-white'>Order Now</span>
                    <img src={right} alt="" />
                </button>
            </div>
        </div>
    );
}
 
export default Section01;