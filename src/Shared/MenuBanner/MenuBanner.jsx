

const MenuBanner = ({heading,subheading,backImage,height}) => {
    return (
        <div className="flex justify-center items-center h-full" style={{backgroundImage: `url(${backImage})`,backgroundSize:"cover",height:height}}>
            <div className="text-center bg-black opacity-50 px-[200px] py-[80px]">
            <p className="text-5xl text-white">{heading}</p>
            <h3 className="text-xl text-white">{subheading}</h3>
            </div>
        </div>
    );
};

export default MenuBanner;