import MenuBanner from "../../Shared/MenuBanner/MenuBanner";
import img1 from "../../assets/shop/order.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../useMenu/useMenu";
import OurShopCart from "./OurShopCart";
const OurShop = () => {
    const [menu,dessert,salad,soup,pizza,drinks]=useMenu();
    
  return (
    <div>
      <MenuBanner
        height={"500px"}
        subheading={"Would you like to try a dish"}
        heading={"Our Shop"}
        backImage={img1}
      />
      <div>
        <Tabs className="mx-auto">
          <TabList> 
            <Tab>Salad</Tab>
            <Tab>Desert</Tab>
            <Tab>Drink</Tab>
            <Tab>Soup</Tab>
            <Tab>Saled</Tab>
          </TabList>

          <TabPanel>
           <div className="grid grid-cols-3">
            {
                dessert.map(data=><OurShopCart data={data} key={data._id}/>)
            }
           </div>
          </TabPanel>
          <TabPanel>
           <div className="grid grid-cols-3">
            {
                soup.map(data=><OurShopCart data={data} key={data._id}/>)
            }
           </div>
          </TabPanel>
          <TabPanel>
           <div className="grid grid-cols-3">
            {
                salad.map(data=><OurShopCart data={data} key={data._id}/>)
            }
           </div>
          </TabPanel>
          <TabPanel>
           <div className="grid grid-cols-3">
            {
                pizza.map(data=><OurShopCart data={data} key={data._id}/>)
            }
           </div>
          </TabPanel>
          <TabPanel>
           <div className="grid grid-cols-3">
            {
                drinks.map(data=><OurShopCart data={data} key={data._id}/>)
            }
           </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
