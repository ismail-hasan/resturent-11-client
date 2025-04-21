import React from 'react';
import MenuItem from '../../Components/MenuItem';
import Cover from '../../../../Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ item, title, img }) => {
    return (
        <>
            {title && <Cover title={title} img={img}></Cover>}
            <div className='grid  grid-cols-2 gap-10 py-15'>
                {
                    item.map(items => (
                        <MenuItem key={items._id} item={items}></MenuItem>
                    )

                    )
                }
            </div>
            <div className='flex items-center justify-center mb-10'>
                <Link to={`/order/${title}`}>
                    <button className="btn btn-neutral btn-outline text-center border-0 border-b-4">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
        </>
    );
};

export default MenuCategory;