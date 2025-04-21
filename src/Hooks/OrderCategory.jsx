import OrderCard from "../assets/Layout/OrderPage/OrderCard";

const OrderCategory = ({ orderItem }) => {
    return (
        <div className='grid  grid-cols-3 gap-10'>
            {
                orderItem.map(items => (
                    <OrderCard key={items._id} item={items}></OrderCard>
                )

                )
            }
        </div>
    )

};

export default OrderCategory;