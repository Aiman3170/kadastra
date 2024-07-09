"use client"
import Navbar from "../Navbar/page";
import img from "../../assets/group.png";
import { useState, useRef } from "react";

export default function ModalTwo() {
  const [address, setAddress] = useState("");
  const [pdf, setPdf] = useState(null); // Use null initially
  const [manuals, setManuals] = useState("");
  const fileInputRef = useRef(null);

  const handleSubmit = () => {
    console.log(address);
    console.log(pdf);
    console.log(manuals);
    setAddress("");
    setManuals("");
  };

  const handleManualsChange = (e) => {
    setManuals(e.target.value);
  };

  const handlePdfChange = (e) => {
    const file = e.target.files[0];
    setPdf(file);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePdfIconClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <Navbar />
      <div className="w-[400px] md:w-[502px] h-[394px] content-center ms-auto me-auto mt-10">
        <div className="mt-3 max-md:max-w-full font-medium text-2xl">Address Entry</div>
        <div className="flex items-center gap-3 p-3 mt-2 font-medium rounded-md border-2 border-white max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          <input
            type="text"
            required
            value={address}
            onChange={handleAddressChange}
            className="flex-grow p-2 bg-transparent border-none focus:outline-none h-[36px] w-[433px]"
            placeholder="Lorem ipsum"
          />
        </div>
        <div className="mt-7 max-md:max-w-full font-medium text-2xl">Pdf Upload</div>
        <div className="flex items-center gap-3 p-3 mt-3.5 font-medium rounded-md border-2 border-white  max-md:pr-5 max-md:max-w-full">
          <input
            type="text"
            readOnly
            value={pdf ? pdf.name : ""}
            className="flex-grow p-2 bg-transparent border-none focus:outline-none h-[36px] w-[433px]"
            placeholder="Kadastra.pdf"
          />
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handlePdfChange}
            accept="application/pdf"
          />
          <img
            src={img.src}
            alt="Upload PDF"
            className="cursor-pointer"
            onClick={handlePdfIconClick}
          />
        </div>
        <div className="mt-7 max-md:max-w-full font-medium text-2xl">Manual Inputs</div>
        <div className="flex items-center gap-3 p-3 mt-3.5 font-medium rounded-md border-2 border-white max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          <input
            type="text"
            required
            value={manuals}
            onChange={handleManualsChange}
            className="flex-grow p-2 bg-transparent border-none focus:outline-none h-[36px] w-[433px]"
            placeholder="Lorem ipsum"
          />
        </div>
      <div className=" flex justify-center">
      <button className="h-[44px] w-[80px] mt-3 border-0  font-semibold   bg-white text-black hover:border-2 hover:bg-transparent hover:text-white  rounded">Upload</button>
   
        </div>   </div>
    </>
  );
}
