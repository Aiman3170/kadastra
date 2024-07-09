import logo from "../../assets/black.png";

export default function Navbar() {
  return (
    <div className="bg-white h-14 flex items-center text-black">
      <div className="p-2 ml-8 ">
        <img
          loading="lazy"
          src={logo.src} // Adjusted to logo.src for correct path
          className="h-10  w-auto"
          alt="Logo"
        />
      </div>
      <div className="flex ml-10">
        <ul className="flex space-x-4 font-medium">
          <li>New Submission</li>
          <li>Reports</li>
        </ul>
      </div>
    </div>
  );
}
