import { useState } from "react";
import orderCoverImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../../shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseMenu from "../../../hooks/UseMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";


const Order = () => {

    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = UseMenu();
    const {category} = useParams();
    const drinks = menu.filter(item=> item.category === 'drinks')
    const desserts = menu.filter(item=> item.category === 'dessert')
    const salad = menu.filter(item=> item.category === 'salad')
    const soup = menu.filter(item=> item.category === 'soup')
    const pizza = menu.filter(item=> item.category === 'pizza')
    const offered = menu.filter(item=> item.category === 'offered')

  return (
    <div>
      <Cover img={orderCoverImg} title="Order Food"></Cover>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
           <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
