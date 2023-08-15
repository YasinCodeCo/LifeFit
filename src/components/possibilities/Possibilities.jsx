import styled from './possibilities.module.css';
import plan from '../../assets/image/plane.svg'
import datsgah from '../../assets/image/datsgah.svg'
import onlineClass from '../../assets/image/onlineClass.svg'
import onlineShop from '../../assets/image/onlineShop.svg'
import restaurant from '../../assets/image/restaurant.svg'
function Possibilities() {
    return(
        <div className="">
            <div className={styled.items}>
                <div className={styled.item}>
                    <img src={plan} alt="plan" />
                    <span className={styled.palnTitle}>برنامه</span>
                </div>
                <div className={styled.item}>
                    <img src={datsgah} alt="datsgah" />
                    <span className={styled.palnTitle}>دستگاه تخصصی</span>
                </div>
                <div className={styled.item}>
                    <img src={restaurant} alt="restaurant" />
                    <span className={styled.palnTitle}>رستوران</span>
                </div>
                <div className={styled.item}>
                    <img src={onlineClass} alt="onlineClass" />
                    <span className={styled.palnTitle}>کلاس انلاین</span>
                </div>
                <div className={styled.item}>
                    <img src={onlineShop} alt="onlineShop" />
                    <span className={styled.palnTitle}>انلاین شاپ</span>
                </div>
            </div>
        </div>
    );
}
export default Possibilities;