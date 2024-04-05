import img2 from "../../assets/home/featured.jpg"
import img1 from "../../assets/home/chef-special.jpg"
import SectionHeading from "../../Shared/SectionHeading/SectionHeading";
import './FeaturedImage.css'
const FeaturedImage = () => {
    return (
      <div className="featured-image py-10">
        <SectionHeading heading={"From Our Menu"} subheading={"check it out"}/>
          <div className="flex justify-center items-center">
            <div>
                <img src={img2} className="w-[350px]" alt="" />
            </div>
            <div className="pl-10">
                <p>March 20,2023</p>
                <h3>Where can I get some?
                </h3>
                <p className="w-[400px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem voluptatibus, doloremque veritatis commodi ut et cupiditate a alias fugit voluptatem.</p>
                <button>Read More</button>
            </div>
           
        </div>
      </div>
    );
};

export default FeaturedImage;