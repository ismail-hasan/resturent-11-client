import React from 'react';

const OrderCard = ({ item }) => {
    const { image, name, recipe, price } = item
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={image}
                    alt={name} />
            </figure>
            <h3 className='top-5 right-5 absolute bg-black px-3 py-1 text-white'>${price}</h3>

            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions ">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;