import img1 from "../../assets/others/authentication2.png";
import img2 from "../../assets/others/authentication.png";
import Swal from "sweetalert2";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useRef, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const location=useLocation();
  const navigate=useNavigate();
  const { login } = useAuth();
  const [disable, setDisable] = useState(true);
  const captchaRef = useRef(null);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        Swal.fire({
        
          text: "Thank you",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
        navigate(location.state ? location.state : "/")
        console.log(result)})
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
        console.error(error)});
  };

  const handleValidateCaptcha = () => {
    const value = captchaRef.current.value;
    if (validateCaptcha(value)) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  };

  return (
    <div
      className="w-9/12 mx-auto"
      style={{
        backgroundImage: `url(${img2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "70vh",
      }}
    >
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img src={img1} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h3 className="text-3xl font-bold pl-10 pt-10">Login</h3>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Captcha</span>
                </label>
                <LoadCanvasTemplate />
                <input
                  type="text"
                  ref={captchaRef}
                  name="captcha"
                  placeholder="Enter captcha"
                  className="input input-bordered"
                  required
                />
              </div>
              <div>
                <button type="button" onClick={handleValidateCaptcha}>
                  Validate Captcha
                </button>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" disabled={disable}>
                 <input type="submit" value="Login" />
                </button>
              </div>
            </form>
            <h3>
              New Here ? <Link to="/signup">Signup</Link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
