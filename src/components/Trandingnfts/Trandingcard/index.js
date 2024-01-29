import React from 'react'
import "./Trandingcard.css"
const Trandingcard = (props) => {
  const {nft} =props
  return (
    <div className='trendingcard absolute-center'>
      <div className='tc-inner-wrapper'>
        <div className='tc-content'>
          <img className='tc-banner' src={nft.banner} alt={nft.user_name} />
          <div className='tc-info'>
            <div className='tc-ui-left'>
              <img className='tc-logo' src={nft.user_photo} alt={nft.user_name}
              />
              <div>
                <div className='name1'>{nft.user_name}</div>
                <div className='handle1'>{nft.userhandle}</div>
              </div>
              <img className='tc-solana-logo' src="https://openseauserdata.com/files/022e9dbe22d8b29d48bc9163674cae2c.jpg" alt="eth on solana" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trandingcard
