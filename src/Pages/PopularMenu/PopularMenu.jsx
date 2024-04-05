import SectionHeading from "../../Shared/SectionHeading/SectionHeading";
import { useState,useEffect } from "react";
import PopularCart from "./PopularCart";
const PopularMenu = () => {
    const [menu,setMenu]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/menu")
        .then(res=>res.json())
        .then(data=>setMenu(data.filter(item=>item.category==="popular")))

        console.log(menu)
    },[])
    return (
        <div>
            <div>
            <SectionHeading heading={"From Our Menu"} subheading={"check it out"}/>
        </div>
        <div className="grid grid-cols-2">
            {
                menu.map(data=><PopularCart data={data}  key={data._id}/>)
            }
        </div>
        </div>
    );
};

export default PopularMenu;