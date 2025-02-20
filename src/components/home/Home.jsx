import bgHome from './../../assets/img/bg/home.png';
import wave from './../../assets/img/special/wave.png';
import bus from './../../assets/img/icons/busWhite.png';
import group from './../../assets/img/special/homeGroup.png';

const Home = () => {
    return (
        <div className="flex flex-col-reverse xl:flex-row items-center bg-cover bg-center justify-around pt-[182px] pb-[147px] px-[20px] lg:px-0" style={{ backgroundImage: `url(${bgHome})` }}>
            <div>
                <div><span className='font-roboto font-normal tracking-normal leading-[26px] text-white'>
                    Starting at 
                    <span className='font-bold'> $24.00</span>
                    </span></div>
                <div className='mt-[10px] font-black text-[40px] sm:text-[55px] md:text-[80px] tracking-normal leading-[45px] sm:leading-[60px] md:leading-[80px] font-roboto text-white'><h1>
                    <p>The best Food</p>
                    <p>Collection 2024</p>
                    </h1></div>
                <div className='mt-[10px] relative flex'>
                    <span className='text-[28px] font-oregano font-normal leading-[26px] tracking-normal text-white'>
                        <span>Exclusive offer </span>
                        <span className='text-siteYellow2'> -35%</span>
                        <span> off this week</span>
                    </span>
                    <img src={wave} alt="" className='absolute left-[115px] bottom-[-25px]'/></div>
                <button className='bg-siteRed2 hover:bg-siteRedHover transition duration ease-in-out text-white rounded-[9px] py-[25px] px-[50px] flex items-center justify-center gap-[10px] mt-[75px]'>
                    <img src={bus} alt="" />
                    <span className='font-semibold text-[17px] leading-[17px] tracking-[0.8px] font-oswald'>Order Now</span>
                </button>
                <div className='bg-white rounded-[50px] flex justify-between max-w-[450px] mt-[76px]'>
                    <input className='focus:outline-none focus:ring-0 p-[22px] rounded-l-[50px] font-lato leading-normal tracking-normal text-siteGray w-full' placeholder='Your email address' type="text" name="" id="" />
                    <button className='text-white bg-siteRed2 hover:bg-siteRedHover transition duration ease-in-out rounded-[50px] py-[22px] px-[40px]'>
                        <span className='font-medium font-quicksand leading-[24px] tracking-[0.5px]'>Subscribe</span>
                    </button>
                </div>
            </div>

            <img src={group} alt="" className='w-[400px] sm:w-[450px] md:w-[600px] h-[120px] sm:h-[150px] md:h-[200px]'/>
        </div>
    );
}
 
export default Home;