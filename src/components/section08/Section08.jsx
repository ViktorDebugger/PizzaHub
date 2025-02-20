import item01 from './../../assets/img/sections/section08/item01.png';
import item02 from './../../assets/img/sections/section08/item02.png';
import item03 from './../../assets/img/sections/section08/item03.png';
import left from './../../assets/img/sections/section08/left.png';
import right from './../../assets/img/sections/section08/right.png';

const Section08 = () => {
    return (
        <div className="mx-6 py-[120px] flex items-center">
            <div>
                <img src={left} alt="" />
            </div>

            <div className='mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-[30px] px-[10px]'>
                <div className='basis-1/3'>
                    <img src={item01} alt="" />
                </div>
                <div className='basis-1/3'>
                    <img src={item02} alt="" />
                </div>
                <div className='basis-1/3'>
                    <img src={item03} alt="" />
                </div>
            </div>
            
            <div>
                <img src={right} alt="" />
            </div>
        </div>
    );
}
 
export default Section08;