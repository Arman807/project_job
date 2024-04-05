import { useEffect, useState } from "react";


const useMenu = () => {
    const [menu,setMenu]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/menu")
        .then(res=>res.json())
        .then(data=>setMenu(data))
    },[])
    const dessert =menu.filter((data) => data.category === "dessert");
  const pizza =menu.filter((data) => data.category === "pizza");
  const soup =menu.filter((data) => data.category === "soup");
  const salad =menu.filter((data) => data.category === "salad");
  const drinks =menu.filter((data) => data.category === "drinks");
    return [menu,dessert,pizza,soup,salad,drinks]
};

export default useMenu;