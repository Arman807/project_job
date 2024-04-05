import { useEffect, useState } from "react";
import img1 from "../../assets/menu/menu-bg.jpg";
import img2 from "../../assets/menu/dessert-bg.jpeg"
import img3 from "../../assets/menu/salad-bg.jpg"
import img4 from "../../assets/menu/soup-bg.jpg"
import img5 from "../../assets/menu/pizza-bg.jpg"
import MenuBanner from "../../Shared/MenuBanner/MenuBanner";
import SectionHeading from "../../Shared/SectionHeading/SectionHeading";
import PopularCart from "../PopularMenu/PopularCart";
import { Helmet } from "react-helmet-async";

const OurMenu = () => {
  const [alldata, setAlldata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/menu")
      .then((res) => res.json())
      .then((data) => setAlldata(data));
  }, []);
  const dessert = alldata.filter((data) => data.category === "dessert");
  const pizza = alldata.filter((data) => data.category === "pizza");
  const soup = alldata.filter((data) => data.category === "soup");
  const salad = alldata.filter((data) => data.category === "salad");
 

  return (
    <div>
        <Helmet><title>Our Menu</title></Helmet>
     <div>
     <div>
        <MenuBanner
          height={"400px"}
          heading={"Menu"}
          backImage={img1}
          subheading={"Would you like to try a dish"}
        />
      </div>
      <div>
        <SectionHeading subheading={"Don't miss"} heading={"Todays offer"} />
        <div className="grid grid-cols-2">
          {alldata.slice(0, 6).map((data) => (
            <PopularCart data={data} key={data._id} />
          ))}
        </div>
        <div className="text-center">
          <button className="text-xl hover:bg-black mb-5 hover:text-white p-1 border-b-2 rounded-xl border-black">Order Your Favourite Food</button>
        </div>
      </div>
     </div>
     <div>
     <div>
        <MenuBanner
          height={"300px"}
          heading={"Dessert"}
          backImage={img2}
          subheading={"Would you like to try a dish"}
        />
      </div>
      <div>
        <div className="grid grid-cols-2">
          {dessert.slice(0, 6).map((data) => (
            <PopularCart data={data} key={data._id} />
          ))}
        </div>
        
      </div>
      <div className="text-center">
          <button className="text-xl hover:bg-black mb-5 hover:text-white p-1 border-b-2 rounded-xl border-black">Order Your Favourite Food</button>
        </div>
     </div>
     <div>
     <div>
        <MenuBanner
          height={"300px"}
          heading={"Salad"}
          backImage={img3}
          subheading={"Would you like to try a dish"}
        />
      </div>
      <div>
        <div className="grid grid-cols-2">
          {salad.slice(0, 6).map((data) => (
            <PopularCart data={data} key={data._id} />
          ))}
        </div>
        
      </div>
      <div className="text-center">
          <button className="text-xl hover:bg-black mb-5 hover:text-white p-1 border-b-2 rounded-xl border-black">Order Your Favourite Food</button>
        </div>
     </div>
     <div>
     <div>
        <MenuBanner
          height={"300px"}
          heading={"Soup"}
          backImage={img4}
          subheading={"Would you like to try a dish"}
        />
      </div>
      <div>
        <div className="grid grid-cols-2">
          {soup.slice(0, 6).map((data) => (
            <PopularCart data={data} key={data._id} />
          ))}
        </div>
        
      </div>
      <div className="text-center">
          <button className="text-xl hover:bg-black mb-5 hover:text-white p-1 border-b-2 rounded-xl border-black">Order Your Favourite Food</button>
        </div>
     </div>
     <div>
     <div>
        <MenuBanner
          height={"300px"}
          heading={"Pizza"}
          backImage={img5}
          subheading={"Would you like to try a dish"}
        />
      </div>
      <div>
        <div className="grid grid-cols-2">
          {pizza.slice(0, 6).map((data) => (
            <PopularCart data={data} key={data._id} />
          ))}
        </div>
        
      </div>
      <div className="text-center">
          <button className="text-xl hover:bg-black mb-5 hover:text-white p-1 border-b-2 rounded-xl border-black">Order Your Favourite Food</button>
        </div>
     </div>
    </div>
  );
};

export default OurMenu;
