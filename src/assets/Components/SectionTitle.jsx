import React from 'react';

const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div className='text-center w-4/12 mx-auto mb-15'>
            <h3 className='text-xl mb-4 text-yellow-500 italic'>{subHeading}</h3>
            <h3 className='text-4xl border-y-4 border-gray-600 py-3'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;