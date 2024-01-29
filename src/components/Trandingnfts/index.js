import React from 'react';
import "./Trandingnfts.css";
import Slider from 'react-slick/lib/slider'
import { TRENDING_NFTS } from '../../data/trandingnfts';
import Trandingcard from './Trandingcard';
import Button from '../../common/button';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


var settings = {
  arrows: false,
  autoPlay: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};
const Trandingnfts = () => {
  return (
    <div className='Trandingnfts'>
        <div className='tn-title absolute-center'>
           <span className='heading-gradient span-h1'>Tranding nfts</span> 
        </div>  
        <div className='tn-bg-blur'></div>
         <Slider {...settings}>
               {TRENDING_NFTS.map((_nft)=>
               <Trandingcard nft={_nft}/>)}
          </Slider>
          <div className='absolute-center'>
                <Button btntype="SECONDARY" btntext="See More" customclass="btn-tc cur-po"/>
          </div>
    </div>
  )
}

export default Trandingnfts
