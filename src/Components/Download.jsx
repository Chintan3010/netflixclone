import React from 'react';
import Logo from '../assets/mobile.jpg';
import BoxShot from '../assets/boxshot.png';
import GIF from '../assets/download-icon.gif';


const Download = () => {
  return (
    <section className='w-[100%] bg-black border-t-[7px] border-t-[#605d5d] sm:py-[70px] py-[50px]'>
          <div className='max-w-[1170px] mx-auto px-[15px]'>
                <div className='grid sm:grid-cols-2 grid-cols-1 items-center'>
                    <figure className='relative sm:order-1 order-2'>
                        <img src={Logo} alt='img not available' className=''  />
                        <div className='sm:w-[60%] w-[90%] absolute sm:left-[20%] left-[5%] border-[1px] border-[#ccc] bottom-[0px] grid grid-cols-[70%_auto] bg-black rounded-[5px] items-center'>
                            <div className='grid grid-cols-[25%_auto] gap-[10px] p-[10px] items-center  '>
                                <img src={BoxShot} alt='not' className='' />
                                <div className='text-white'>
                                    <h3 className='font-bold text-[14px]'>Stranger Things</h3>
                                    <span className='text-[blue]'>Downloading...</span>
                                </div>
                            </div>
                            <div>
                                <img src={GIF} alt='not' />
                            </div>
                        </div>
                    </figure>
                    <div className='text-white sm:order-1 order-1 '>
                        <h2 className='sm:text-[50px] text-[40px] font-bold sm:leading-[60px] leading-[50px]'>Download your shows to watch offline</h2>
                        <p className='sm:text-[25px] text-[20px] pt-[30px]'>Save your favourites easily and always have something to watch.</p>
                    </div>
                </div>

            </div>
    </section>
  )
}

export default Download