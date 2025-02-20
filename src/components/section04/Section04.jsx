import bgImage from './../../assets/img/bg/section04.png';
import triangle from './../../assets/img/icons/triangle.png';

const Section04 = () => {
    return (
        <div className="flex items-end bg-center bg-cover justify-center h-[390px]" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="w-[150px] h-[150px] rounded-full border border-white border-dashed flex items-center justify-center cursor-pointer">
                <img src={triangle} alt="" />
            </div>
        </div>
    );
}
 
export default Section04;