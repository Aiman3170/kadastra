"use client";
"use client";
import * as React from "react";
import { useState } from "react";
import { useRouter } from 'next/navigation';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (!email || !password || !firstName || !lastName || !confirmPassword) {
      setIsLoading(true);
      toast.error("Please fill all fields", {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        setIsLoading(false);
      }, 7000);
    } else {
      console.log("Form Data:");
      console.log("First Name:", firstName);
      console.log("Last Name:", lastName);
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Confirm Password:", confirmPassword);
      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("");
      setConfirmPassword("");
      router.push('/signup'); // Navigate to the signup page
    }
  };

  return (
    <div className="flex gap-5 justify-between max-md:flex-wrap w-full">
      <ToastContainer />
      <div className="flex flex-col items-center py-20 px-5 text-lg leading-10 bg-black backdrop-blur-md max-w-[800px] max-md:px-5">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/74dce3f64b732b0231c0ef117027a167b48e74f5538fe9b96e47d659439570b4?apiKey=5ef277e32c1943c3b4657b2f928b5216&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/74dce3f64b732b0231c0ef117027a167b48e74f5538fe9b96e47d659439570b4?apiKey=5ef277e32c1943c3b4657b2f928b5216&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/74dce3f64b732b0231c0ef117027a167b48e74f5538fe9b96e47d659439570b4?apiKey=5ef277e32c1943c3b4657b2f928b5216&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/74dce3f64b732b0231c0ef117027a167b48e74f5538fe9b96e47d659439570b4?apiKey=5ef277e32c1943c3b4657b2f928b5216&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/74dce3f64b732b0231c0ef117027a167b48e74f5538fe9b96e47d659439570b4?apiKey=5ef277e32c1943c3b4657b2f928b5216&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/74dce3f64b732b0231c0ef117027a167b48e74f5538fe9b96e47d659439570b4?apiKey=5ef277e32c1943c3b4657b2f928b5216&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/74dce3f64b732b0231c0ef117027a167b48e74f5538fe9b96e47d659439570b4?apiKey=5ef277e32c1943c3b4657b2f928b5216&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/74dce3f64b732b0231c0ef117027a167b48e74f5538fe9b96e47d659439570b4?apiKey=5ef277e32c1943c3b4657b2f928b5216&"
          className="mt-8 max-w-full aspect-[4.55] w-[360px]"
        />
        <div className="max-md:max-w-full">
          <p className="mt-8">
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
      <div className="flex flex-col px-5 py-7 text-base leading-6 bg-white text-blue-950 w-[600px]">
        <div className="text-4xl font-bold leading-10">Create Account</div>
        <div className="self-start mt-3.5 text-lg leading-7 text-black">
          Sign up for an account to get started
        </div>
        <div className="flex gap-5 mt-8">
          <div className="flex flex-col flex-1">
            <div>First Name</div>
            <div className="flex items-center gap-3 p-3 mt-3.5 font-medium rounded-md bg-zinc-100">
              <PersonIcon />
              <input
                type="text"
                value={firstName}
                onChange={handleFirstNameChange}
                className="flex-grow bg-transparent border-none focus:outline-none"
                placeholder="Enter your first name"
              />
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div>Last Name</div>
            <div className="flex items-center gap-3 p-3 mt-3.5 font-medium rounded-md bg-zinc-100">
              <PersonIcon />
              <input
                type="text"
                value={lastName}
                onChange={handleLastNameChange}
                className="flex-grow bg-transparent border-none focus:outline-none"
                placeholder="Enter your last name"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 w-full">Email</div>
        <div className="flex items-center gap-3 p-3 mt-2 w-full font-medium rounded-md bg-zinc-100">
          <EmailIcon />
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="flex-grow bg-transparent border-none focus:outline-none"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex gap-5 mt-7">
          <div className="flex flex-col flex-1">
            <div>Password</div>
            <div className="flex items-center gap-3 p-3 mt-3.5 font-medium rounded-md bg-zinc-100">
              <LockIcon />
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className="flex-grow bg-transparent border-none focus:outline-none"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div>Confirm Password</div>
            <div className="flex items-center gap-3 p-3 mt-3.5 font-medium rounded-md bg-zinc-100">
              <LockIcon />
              <input
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className="flex-grow bg-transparent border-none focus:outline-none"
                placeholder="Confirm your password"
              />
            </div>
          </div>
        </div>
        <button
          className="flex items-center justify-center gap-3 px-5 py-4 mt-10 text-center text-white bg-black rounded-md"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
          Create an account
        </button>
        <div className="self-center mt-5 text-lg leading-7 text-black">
          <span className="text-indigo-900">Already a member?</span>{" "}
          <span className="cursor-pointer">Signin</span>
       
        </div>
      </div>
    </div>
  );
}

