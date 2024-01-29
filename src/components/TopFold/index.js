import React from 'react';
import "./topfold.css";
import Button from '../../common/button';
const TopFold = () => {
  return (
    <div className='topfold absolute-center'>
      <div className='tf-left'>
      <div className='tf-heading'>Tokenize Your Passion :)</div>
        <div className='tf-heading'>Discover,Invest & sell <span className='heading-gradient'>Miraculous</span> NFT's Art </div>
        <div className='tf-discription'>Discover TokenTreasures: Your gateway to rare NFT masterpieces. Build a personalized art collection, unlocking the essence of each creator. Step into the future of art ownership today!</div>
        <div className='tf-left-btn'>
           <Button btntype="PRIMARY" btntext="Explore" />
           <Button btntype="SECONDARY" btntext="Create" customclass="btn-tf-second"/>
      </div>
         <div className='tf-left-inforstate'>
            <div className='tf-is-infoItem absolute-center'>
                <div className='tf-infoItem-count'>200K</div>
                <div className='tf-infoItem-lable'>Collections</div>
            </div>
         
         
            <div className='tf-is-infoItem absolute-center'>
                <div className='tf-infoItem-count'>10K</div>
                <div className='tf-infoItem-lable'>Artists</div>
            </div>
         
        
            <div className='tf-is-infoItem absolute-center'>
                <div className='tf-infoItem-count'>520K</div>
                <div className='tf-infoItem-lable'>Community</div>
            </div>
         </div>
      </div>
      {/* ------------------------------------------ */}
      <div className='tf-right'>
      <div className='tf-r-bg-blur'></div>
        <div className='tf-right-diamond'>
          <div className='tf-r-diamond-item absolute-center'>
            <img className="tf-r-diamond-img"  src="https://i.seadn.io/gae/u4ednCqlaJmF3Irkfbr3nGXXs3Y3xJt7G0dMOyi1SKSIkPkV9XolOTXYg3t4qxb-pgKlfzV4PuC8NqOddYViRyylE-E-8y8ryNzqQgM?auto=format&dpr=1&w=384" alt="diamond-banner" />
          </div>
          <div className='tf-r-diamond-item absolute-center'>
            <img className="tf-r-diamond-img"  src="https://i.seadn.io/gae/3fwMHANmtdfTEJ1HsLrJ5f2E-Fk-G2TEg7lYYNC3g2tUuCEuBcWAEonfDeKTxrh4FEhN8yowzxd4MSKFi7U23iDs5n7ezxuJbmyY?auto=format&dpr=1&w=384" alt="diamond-banner" />
          </div>
          <div className='tf-r-diamond-item absolute-center'>
            <img className="tf-r-diamond-img"  src="https://i.seadn.io/gae/CgGzr7DgRmduN2c_jPLwVUSxQTHShHvsYEcxdxoVO_CXxTzWj2OQS-F-A4xMOpM6WJMDP3WkWvuQpQgmpao4GlFoj24EH5nCYIwWeQ?auto=format&dpr=1&w=1000" alt="diamond-banner" />
          </div>
          <div className='tf-r-diamond-item absolute-center'>
            <img className="tf-r-diamond-img"  src="https://i.seadn.io/gae/SGM--9Kj1KWjTiwO6uBcJVi9SE4gA1JgIC3kLWQxr0uRtiitVNDfoH6ZeJUeVf1Ees0ufAjWpqaAC7vyesfxMh5SBsFqOetE-r3hAA?auto=format&dpr=1&w=1000" alt="diamond-banner" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopFold
