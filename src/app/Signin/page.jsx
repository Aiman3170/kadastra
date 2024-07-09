"use client";
import * as React from "react";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State to manage loading state
  const router = useRouter();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (!email || !password) {
      setIsLoading(true); // Set loading state to true
      toast.error("Please enter both email and password.", {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false, // Show progress bar
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        setIsLoading(false); // Set loading state to false after 7 seconds
      }, 7000);
    } else {
      console.log("Email:", email);
      console.log("Password:", password);
      setEmail("");
      setPassword("");
      router.push('/signup'); // Navigate to the signup page
    }
  };

  return (
    <div className="flex gap-5 justify-between max-md:flex-wrap  w-full max-w-full">
      <ToastContainer />
      <div className="flex flex-col items-center py-20 px-10 text-lg leading-10 bg-black backdrop-blur-md max-w-[700px] max-md:px-5">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/74dce3f64b732b0231c0ef117027a167b48e74f5538fe9b96e47d659439570b4?apiKey=5ef277e32c1943c3b4657b2f928b5216&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/74dce3f64b732b0231c0ef117027a167b48e74f5538fe9b96e47d659439570b4?apiKey=5ef277e32c1943c3b4657b2f928b5216&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/74dce3f64b732b0231c0ef117027a167b48e74f5538fe9b96e47d659439570b4?apiKey=5ef277e32c1943c3b4657b2f928b5216&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/74dce3f64b732b0231c0ef117027a167b48e74f5538fe9b96e47d659439570b4?apiKey=5ef277e32c1943c3b4657b2f928b5216&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/74dce3f64b732b0231c0ef117027a167b48e74f5538fe9b96e47d659439570b4?apiKey=5ef277e32c1943c3b4657b2f928b5216&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/74dce3f64b732b0231c0ef117027a167b48e74f5538fe9b96e47d659439570b4?apiKey=5ef277e32c1943c3b4657b2f928b5216&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/74dce3f64b732b0231c0ef117027a167b48e74f5538fe9b96e47d659439570b4?apiKey=5ef277e32c1943c3b4657b2f928b5216&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/74dce3f64b732b0231c0ef117027a167b48e74f5538fe9b96e47d659439570b4?apiKey=5ef277e32c1943c3b4657b2f928b5216&"
          className="mt-8 max-w-full aspect-[4.55] w-[360px]"
        />
        <div className="max-md:max-w-full">
          <p className="mt-28">
            Streamline project management, Exceed client expectations, Grow profitability with Buildern!
          </p>
          <ul className="list-disc px-4">
            <li>No hidden fees. No contracts.</li>
            <li>No training and setup fees.</li>
            <li>Data imports and integration setup assistance.</li>
            <li>Live chat, video call and email support.</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col px-5   text-base leading-6 bg-white  text-blue-950 ">
        <div className="text-4xl font-bold mt-24 leading-10 max-md:max-w-full max-md:text-4xl">
          Log in to your account
        </div>
        <div className="mt-2 text-black leading-[300%] max-md:max-w-full">
          Welcome back! Enter your credentials to access your account
        </div>
        <div className="mt-3 max-md:max-w-full">Email</div>
        <div className="flex items-center gap-3 p-3 mt-2 font-medium rounded-md bg-zinc-100 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          <EmailIcon />
          <input
            type="email"
            required
            value={email}
            onChange={handleEmailChange}
            className="flex-grow p-2 bg-transparent border-none focus:outline-none"
            placeholder="Enter your email"
          />
        </div>
        <div className="mt-7 max-md:max-w-full">Password</div>
        <div className="flex items-center gap-3 p-3 mt-3.5 font-medium rounded-md bg-zinc-100 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          <LockIcon />
          <input
            type="password"
            required
            value={password}
            onChange={handlePasswordChange}
            className="flex-grow p-2 bg-transparent border-none focus:outline-none"
            placeholder="Enter your password"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="flex justify-center items-center px-16 py-4 mt-12 text-lg font-bold text-white bg-black rounded-md shadow max-md:px-5 max-md:mt-10 max-md:max-w-full"
        >
          Login
        </button>
        <div className="self-center mt-6 text-lg leading-7 text-black">
          <span className="text-indigo-900">Don’t have an account?</span>{" "}
          <Link href="/signup">Signup</Link>
        </div>
      </div>
    </div>
  );
};


