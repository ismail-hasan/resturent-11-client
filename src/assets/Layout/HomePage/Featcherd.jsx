import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import img from '../../images/home/featured.jpg'
import './Featcherd.css'
const Featcherd = () => {
    return (
        <div className='featcherd pt-20'>
            <SectionTitle subHeading={'---Check it out---'} heading={'FROM OUR MENU'}></SectionTitle>

            <div className='flex justify-between items-center gap-10 pl-30 pb-30'>
                <div className='flex-3/4'>
                    <img className='' src={img} alt="" />
                </div>
                <div className='pr-30'>
                    <p>March 20, 2023</p>
                    <p className='text-xl py-2'>WHERE CAN I GET SOME?</p>
                    <p className='text-base'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <div className='mt-5 '>
                        <button className="text-white btn btn-neutral btn-outline text-center border-white border-0 border-b-4">View Full Menu</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featcherd;