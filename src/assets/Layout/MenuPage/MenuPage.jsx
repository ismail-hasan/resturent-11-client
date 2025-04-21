import React from 'react';
import Cover from '../../../../Cover';

import img from "../../images/menu/banner3.jpg"
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../Components/SectionTitle';
import MenuCategory from './MenuCategory';


import dessert from "../../images/menu/dessert-bg.jpeg"
import pizza from "../../images/menu/pizza-bg.jpg"
import salad from "../../images/menu/salad-bg.jpg"
import soup from "../../images/menu/soup-bg.jpg"




const MenuPage = () => {
    const [menu] = useMenu()
    const offeredData = menu.filter(item => item.category === 'offered')
    const dessertsData = menu.filter(item => item.category === 'dessert')
    const pizzaData = menu.filter(item => item.category === 'pizza')
    const saladsData = menu.filter(item => item.category === 'salad')
    const soupsData = menu.filter(item => item.category === 'soup')



    return (
        <div>
            <Cover img={img} title={"Our Menu"}></Cover>

            <div className='py-10'>
                <SectionTitle heading={`TODAY'S OFFER`} subHeading={`---Don't miss---`}></SectionTitle>
            </div>

            <MenuCategory item={offeredData}></MenuCategory>
            <MenuCategory item={dessertsData} title={"Desserts"} img={dessert}></MenuCategory>

            <MenuCategory item={pizzaData} title={"Pizza"} img={pizza}></MenuCategory>
            <MenuCategory item={saladsData} title={"Salad"} img={salad}></MenuCategory>
            <MenuCategory item={soupsData} title={"Soups"} img={soup}></MenuCategory>

        </div>
    );
};

export default MenuPage;