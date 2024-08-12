import React from 'react';
import Logo from '../assets/device-pile-in.png';
import Video from '../assets/video-devices.mp4';

const Watch = () => {
  return (
        <section className='w-[100%] bg-black border-t-[7px] border-t-[#605d5d] sm:py-[50px] py-[50px]'>
            <div className='max-w-[1170px] mx-auto px-[15px]'>
                <div className='grid sm:grid-cols-2 grid-cols-1 items-center'>
                    <div className='text-white '>
                        <h2 className='sm:text-[50px] text-[40px] font-bold'>Watch everywhere</h2>
                        <p className='sm:text-[25px] text-[20px] pt-[30px]'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                    </div>
                    <figure className='relative'>
                        {/* <video className=''>
                            <source src={Video}></source>
                        </video> */}
                        <video loop autoPlay className="absolute w-[60%] bottom-[40%] left-[20%] z-[1]" >
                        <source src={Video} type="video/mp4" />
                        </video>
                        <img src={Logo} alt='img not available' className='relative z-[2]'  />
                    </figure>
                </div>

            </div>

        </section>
  )
}

export default Watch