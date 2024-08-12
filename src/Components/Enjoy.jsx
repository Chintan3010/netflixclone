import React from 'react';
import Logo from '../assets/tv.png';
import Video from '../assets/video-Enjoy.mp4';

const Enjoy = () => {
  return (
        <section className='w-[100%] bg-black border-t-[7px] border-t-[#605d5d] sm:py-[50px] py-[50px]'>
            <div className='max-w-[1170px] mx-auto px-[15px]'>
                <div className='grid sm:grid-cols-2 grid-cols-1 items-center'>
                    <div className='text-white '>
                        <h2 className='sm:text-[50px] text-[40px] font-bold'>Enjoy on your TV</h2>
                        <p className='sm:text-[22px] text-[20px] pt-[30px]'>Watch on smart TVs, PlayStation, Xbox, Chromecast,<br/> Apple TV, Blu-ray players and more.</p>
                    </div>
                    <figure className='relative'>
                        <video loop autoPlay className="absolute w-[80%] bottom-[20%] left-[10%] z-[1]" >
                        <source src={Video} type="video/mp4" />
                        </video>
                        <img src={Logo} alt='img not available' className='relative z-[2]'  />
                    </figure>
                </div>

            </div>

        </section>
  )
}

export default Enjoy