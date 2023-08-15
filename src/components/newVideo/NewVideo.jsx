import styled from './newVideo.module.css'
import {BsPlayCircle} from 'react-icons/bs'
function NewVideo(){
    const image=[
        {
            url:'https://i.pinimg.com/564x/14/8c/1c/148c1c879c637900315134fe91105c5d.jpg'
        },
        {
            url:'https://i.pinimg.com/564x/7f/f5/7a/7ff57a6a2adfd33d25d6c9aa863595a8.jpg'
        },
        {
            url:'https://i.pinimg.com/564x/74/b2/4b/74b24b4362ade54608afa58a153d9da3.jpg'
        }
    ]
    return(
        <div className="">

            <div className={styled.items}>
                <div className={styled.item}><BsPlayCircle size={70} className={styled.btnPlay}/><span className={styled.viedoTitle}>موضوع فیلم</span><img src={image[0].url} alt="" /></div>
                <div className={styled.item}><BsPlayCircle size={70} className={styled.btnPlay}/><span className={styled.viedoTitle}>موضوع فیلم</span><img src={image[1].url} alt="" /></div>
                <div className={styled.item}><BsPlayCircle size={70} className={styled.btnPlay}/><span className={styled.viedoTitle}>موضوع فیلم</span><img src={image[2].url} alt="" /></div>
            </div>

        </div>
    );
}
export default NewVideo;