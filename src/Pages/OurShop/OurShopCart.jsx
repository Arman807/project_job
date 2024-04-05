import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const OurShopCart = ({ data }) => {
    const [refetch,]=useCart();
    const  axiosSecure  = useAxiosSecure();
    const {  name, recipe, image, category, price } = data;
    const navigate = useNavigate();
    const { user } = useAuth();

    const handleAddToCart = () => {
        if (user && user.email) {
            const cartItem = {
                email: user?.email,
                name,
                image,
                price
            };
            axiosSecure.post("/carts", cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Item added to cart",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                    refetch()
                    
                })
                .catch(error => {
                    console.error("Error adding item to cart:", error);
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong! Please try again."
                    });
                });
        } else {
            navigate("/login", { state: { from: window.location.pathname } });
        }
    };

    return (
        <div className="relative">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className="absolute right-0 bg-slate-700 mr-5 mt-5 text-white rounded-md">${price}</p>
                <div className="card-body">
                    <h2 className="card-title">
                        <div className="badge badge-secondary">{name}</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions">
                        <button onClick={handleAddToCart} className="text-xl hover:bg-blue-500 mb-5 hover:text-white p-1 border-b-2 rounded-xl border-black">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurShopCart;
