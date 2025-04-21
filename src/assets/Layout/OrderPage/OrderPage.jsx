import React, { useState } from 'react';
import Cover from '../../../../Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


import img from "../../images/contact/banner.jpg"
import useMenu from '../../../Hooks/useMenu';
import OrderCategory from '../../../Hooks/OrderCategory';

const OrderPage = () => {

    const [menu] = useMenu()
    const offeredData = menu.filter(item => item.category === 'offered')
    const dessertsData = menu.filter(item => item.category === 'dessert')
    const pizzaData = menu.filter(item => item.category === 'pizza')
    const saladsData = menu.filter(item => item.category === 'salad')
    const soupsData = menu.filter(item => item.category === 'soup')
    const drinksData = menu.filter(item => item.category === 'drinks')

    console.log('sdf', saladsData)

    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div>
            <Cover img={img} title={"Our Shop"}></Cover>


            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                
                <TabPanel>
                    <OrderCategory orderItem={saladsData}></OrderCategory>
                </TabPanel>
                <TabPanel>
                    <OrderCategory orderItem={pizzaData}></OrderCategory>
                </TabPanel>
                <TabPanel>
                    <OrderCategory orderItem={soupsData}></OrderCategory>
                </TabPanel>
                <TabPanel>
                    <OrderCategory orderItem={dessertsData}></OrderCategory>
                </TabPanel>
                <TabPanel>
                    <OrderCategory orderItem={drinksData}></OrderCategory>
                </TabPanel>
               
            </Tabs>


        </div>
    );
};

export default OrderPage;