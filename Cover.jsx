import React from 'react';

const Cover = ({ img, title, subTitle }) => {
    return (
        <div
            className="hero h-96 "
            style={{
                backgroundImage:
                    `url(${img})`,
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md py-20">
                    <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                    <p className="mb-5 text-base">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                       
                    </p>
                   
                </div>
            </div>
        </div>
    );
};

export default Cover;