import styled from './slider.module.css';
import { useState } from 'react';
import{BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs';
import{RxDotFilled} from 'react-icons/rx';

function Slider() {
  const slides=[
    {
      url:"https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      url:"https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
    },
    {
      url:"https://images.unsplash.com/photo-1666979289312-cba24cfaebf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    },
    {
      url:"https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
    },
    {
      url:"https://images.unsplash.com/photo-1434608519344-49d77a699e1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80"
    }
  ];
  const [currentIndex,setCurrentIndex]=useState(0);

        const prevSlide= () => {
          const isFirstSlide=currentIndex===0;
          const newIndex=isFirstSlide ? slides.length -1 : currentIndex -1;
          setCurrentIndex(newIndex);
        };
        const nextvSlide= () => {
          const isLastSlide=currentIndex===slides.length-1;
          const newIndex=isLastSlide ? 0 : currentIndex +1;
          setCurrentIndex(newIndex);
        };
        const goToSlide=(slideIndex)=>{
          setCurrentIndex(slideIndex);
        };
    return(
      <div className="">
        <div className={styled.slider}>
          <div style={{backgroundImage:`url(${slides[currentIndex].url})`}} className={styled.sliderIn}></div>
      
            {/* left arrow */}
            <div className={styled.btnLeftChevron}><BsChevronCompactLeft onClick={prevSlide} size={40} style={{marginTop:'6px'}}/></div>
            {/* right arrow */}
            <div className={styled.btnRightChevron}><BsChevronCompactRight onClick={nextvSlide} size={40} style={{marginTop:'6px'}}/></div>

            <div className={styled.dotFilled}>
          {
            slides.map((slide,slideIndex) => (
              <div key={slideIndex}
              onClick={()=>{
                goToSlide(slideIndex)
              }}
              ><RxDotFilled size={40} style={{cursor:'pointer',color:'#fff'}}/></div>
            ))
          }
       </div>
       </div>
      
      </div>
    );
}
export default Slider;






