import img1 from "../../assets/others/authentication2.png";
import img2 from "../../assets/others/authentication.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Signup = () => {
    const navigate=useNavigate()
    const location=useLocation()
    const { createUser,userProfile } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSubmit = async (data) => {
        setIsLoading(true);
        setError(null);

        try {
            await createUser(data.email, data.password);
            // User creation successful
            console.log("User created successfully");
            userProfile(data.name,data.photourl)
            navigate(location.state ? location.state : "/")
            // Reset the form after successful submission
            reset();
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-9/12 mx-auto" style={{ backgroundImage: `url(${img2})`, backgroundSize: "cover", backgroundPosition: "center", minHeight: "70vh" }}>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src={img1} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm">
                        <h3 className="text-3xl font-bold pl-10 pt-10">Signup</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Full Name" {...register("name", { required: true })} className="input input-bordered" />
                                {errors.name && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoUrl</span>
                                </label>
                                <input type="url" placeholder="photo url" {...register("photourl", { required: true })} className="input input-bordered" />
                                {errors.photourl && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" {...register("email", { required: true })} className="input input-bordered" />
                                {errors.email && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" {...register("password", { required: true, minLength: 8, maxLength: 20, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/ })} className="input input-bordered" />
                                {errors.password && <span>Password must contain at least one uppercase letter, one lowercase letter, and one number (8-20 characters)</span>}
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary" disabled={isLoading}>{isLoading ? "Signing Up..." : "Signup"}</button>
                            </div>
                            {error && <div className="text-red-600">{error}</div>}
                        </form>
                        <h3>
                            New Here? <Link to="/login">Login</Link>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
