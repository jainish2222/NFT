import React from 'react';
import "./Infosection.css";
import { INFO_ITEMS } from '../../data/infosection';
// import infoitem from './InfoItem'
import InfoItem from './infoittem';
const Infosection = () => {
  return (
    <div className='info-Infosection'>
      <div className='in-heading absolute-center'>
        <span className='heading-gradient'>Create And Sell Your NFT's</span>
      </div>
      <div className='is-items-container'>
        {INFO_ITEMS.map((_infiItem)=>
        <InfoItem item= {_infiItem} />
        )}
      </div>
    </div>
  )
}

export default Infosection
