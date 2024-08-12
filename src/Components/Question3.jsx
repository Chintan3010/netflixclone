import React from 'react';
import { useState } from 'react';

  const List = ({ title, p1, p2, isActive, onClick }) => {
    return (
        <div className='bg-[#2d2d2d] mb-[15px]'>
            <div
                className={`p-[20px] text-white sm:text-[30px] text-[20px] border border-b-[2px] border-black relative hover:bg-[rgb(78,78,78)] cursor-pointer`}
                onClick={onClick}
            >
                <h3>{title}</h3>
                <span className='absolute right-[20px] top-[15px]'>{isActive ? '-' : '+'}</span>
            </div>
            <div
                className={`text-white text-[20px] overflow-hidden transition-all duration-300 ${isActive ? 'scale-y-100 h-auto p-5' : 'scale-y-0 h-0'}`}
            >
                <p>{p1}</p>
                {p2 && <p>{p2}</p>}
            </div>
        </div>
    );
};


const faqData = [
    {
        id: 1,
        title : "What is a netflix?",
        p1: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.",
        p2: " You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
    },
    {
        id: 2,
        title : "How much does Netflix cost?",
        p1: "  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
        
    },
    {
        id: 3,
        title : "Where can I watch?",
        p1: " Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
        p2: " You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
        id: 4,
        title : "How do I cancel?",
        p1: "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
        p2: "chintan",
    },
    {
        id: 5,
        title : "What can I watch on Netflix?",
        p1: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
        p2: "kem cho",
    },
    {
        id: 6,
        title : "Is Netflix good for kids?",
        p1: " The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
        p2: " Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    }
]
  

const Question3 = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  const toggleAnswer = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };


  return (
    <section className="w-[100%] bg-black border-t-[7px] border-t-[#605d5d] sm:py-[80px] py-[50px]">
      <div className='max-w-[1170px] mx-auto px-[15px]'>
        <h2 className='sm:text-[50px] text-[40px] text-white text-center font-bold sm:leading-[60px] leading-[50px]'>
          Frequently Asked Questions
        </h2>

        <div className='py-[20px]'>
          {faqData.map((item, index) => (
            <List
              key={index}
              title={item.title}
              p1={item.p1}
              p2={item.p2}
              isActive={activeIndex === index}
              onClick={() => toggleAnswer(index)}
            //   disabled={isDisabled}
            />
          ))}
        </div>

        <div>
          <h3 className='text-white text-center text-[20px]'>
            Ready to watch? Enter your email to create or restart your membership.
          </h3>
        </div>

        <div className='max-w-[700px] sm:px-[10px] px-[40px] mx-auto mt-[30px]'>
          <form action='' className='grid sm:grid-cols-[70%_auto] grid-cols-1 gap-[20px]'>
            <input
              type='text'
              placeholder='Email address'
              className='border-[1px] border-[#ccc] bg-[transparent] pl-[20px] h-[50px] rounded'
            />
            <button className='text-white bg-[red] rounded-[5px] px-[10px] py-[7px] hover:bg-[rgb(193,17,25)] duration-300 text-[25px]'>
              Get Started
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Question3