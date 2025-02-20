import item01 from './../../assets/img/sections/section13/item01.png';
import item02 from './../../assets/img/sections/section13/item02.png';
import item03 from './../../assets/img/sections/section13/item03.png';
import item04 from './../../assets/img/sections/section13/item04.png';
import item05 from './../../assets/img/sections/section13/item05.png';

const Section13 = () => {
    return (
        <div className="flex flex-col xl:flex-row items-center w-full justify-center">
            <img src={item01} alt="" className='w-full xl:w-[200px] 2xl:w-[303.8px] mt-[-2px]'/>
            <img src={item02} alt="" className='w-full xl:w-[200px] 2xl:w-[303.8px] mt-[-2px]'/>
            <img src={item03} alt="" className='w-full xl:w-[200px] 2xl:w-[303.8px] mt-[-2px]'/>
            <img src={item04} alt="" className='w-full xl:w-[200px] 2xl:w-[303.8px] mt-[-2px]'/>
            <img src={item05} alt="" className='w-full xl:w-[200px] 2xl:w-[303.8px] mt-[-2px]'/>
        </div>
    );
}
 
export default Section13;