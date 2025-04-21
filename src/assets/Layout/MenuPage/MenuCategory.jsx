import React from 'react';
import MenuItem from '../../Components/MenuItem';
import Cover from '../../../../Cover';

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
        </>
    );
};

export default MenuCategory;