import React from 'react';
import kids1 from '../assets/kids1.png';


const  Kids = () => {
  return (
    <section className='w-[100%] bg-black border-t-[7px] border-t-[#605d5d] sm:py-[80px] py-[50px]'>
        <div className='max-w-[1170px] mx-auto px-[15px]'>
            <div className='grid sm:grid-cols-2 grid-cols-1 items-center'>
                <figure className='relative sm:order-1 order-2'>
                    <img src={kids1} alt='img not available' className='relative z-[2]'  />
                </figure>
                <div className='text-white sm:order-2 order-1'>
                    <h2 className='sm:text-[50px] text-[40px] font-bold '>Create profiles for kids</h2>
                    <p className='sm:text-[25px] text-[20px] pt-[30px]'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
                </div>
            </div>

        </div>

    </section>
  )
}

export default Kids