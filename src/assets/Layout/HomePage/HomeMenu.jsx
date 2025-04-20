import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle';
import MenuItem from '../../Components/MenuItem';

const HomeMenu = () => {
    const [menu, setMenu] = useState([])

    useEffect(() => {

        fetch("menu.json")
            .then(res => res.json())
            .then(data => {
                const popularData = data.filter(item => item.category === 'popular')
                setMenu(popularData)
                console.log(popularData)
            })
    }, [])

    return (
        <section className='mb-20'>
            <div>
                <SectionTitle heading={"Form Our Menu"} subHeading={"---Check it out---"}></SectionTitle>
            </div>
            <div className='grid  grid-cols-2 gap-10'>
                {
                    menu.map(items => (
                        <MenuItem item={items}></MenuItem>
                    )

                    )
                }
            </div>
            <div className='flex items-center justify-center mt-20'>
                <button className="btn btn-neutral btn-outline text-center border-0 border-b-4">View Full Menu</button>
            </div>
        </section>


    );
};

export default HomeMenu;