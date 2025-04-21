import React from 'react';

const MenuItem = ({ item }) => {
    const { image, name, recipe } = item
    return (
        <div>
            <div className='flex gap-6 '>
                <img style={{ borderRadius: '0 200px 200px 200px' }} height={140} width={120} src={image} alt="" />
                <div>
                    <h3 className='text-xl'>{name}</h3>
                    <h3 className='text-base'>{recipe}</h3>
                </div>
            </div>
           
        </div>
    );
};

export default MenuItem;