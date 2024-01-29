import React from 'react'
import "./infoitem.css";
const InfoItem = (props) => {
    const {item}=props;
  return (
    <divn className="info-item absolute-center">
      <img className='ii-icon' src={item.icon} alt={item.section_title} />
      <div className='ii-title'>{item.section_title}</div>
      <div className='ii-dis'>{item.description}</div>
    </divn>
  )
}

export default InfoItem
