

const PopularCart = ({data}) => {
    const {name,recipe,image,category,price}=data;
    return (
       <div className="flex mx-auto p-4">
         <div>
            <img src={image} className="w-[100px] rounded-b-full rounded-r-full" alt="" />
        </div>
        <div className="w-[300px]">
            <h3>{name}</h3>
            <p>{recipe}</p>
        </div>
        <div>
            <p>{price}</p>
        </div>
       </div>
    );
};

export default PopularCart;