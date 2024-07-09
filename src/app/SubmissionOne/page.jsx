import Navbar from "../Navbar/page";
import upload from "../../assets/upload.png"
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import MinimizeIcon from '@mui/icons-material/Minimize';

export default function ModalOne(){
    return(
       <>
       <Navbar/>
        <div className="w-[400px] md:w-[502px] h-[394px]  content-center  ms-auto me-auto mt-5 ">
            <div className="h-[48px] w-[400px] md:w-[502px] text-white">
                <h3 className="text-white font-bold leading-6 ps-2 text-lg">
                    Media Upload
                </h3>
                <p className="text-base ps-2">Add your documents here</p>

            </div>
            <div className="h-[186px] bg-white w-[400px] md:w-[502px] p-2 rounded">
            <div className="p-2  text-center mx-auto ">
      <div className="mx-auto w-[400px] md:w-[502px]">
    <div className="p-2">  <DriveFolderUploadIcon className="text-blue-500  "/></div>
      <p className="text-black pb-2  ">Drag your file(s) to start uploading</p>
<div className="flex  text-black justify-center">
    <div className=" border-b-[1px] border-gray-300 w-28 mb-3"></div>
    <p className="px-2">OR</p>
    <div className=" border-b-[1px] border-gray-300 w-28 mb-3"></div>
</div>
      </div>
       <div className=" h-[30px] w-[95px] border-[1.5px] mt-2 border-blue-500 hover:border-blue-700  rounded  mx-auto">
        <button className="text-blue-700 hover:text-white bg-transparent hover:bg-blue-700 text-sm px-1 py-1 w-full ">
            Browse files
        </button>
       </div>
      </div>
            </div>

    <div className="h-[20px] w-[400px] md:w-[502px] text-white ">
        <p className="text-sm p-2">Only support .Pdf files</p>
    </div>
    <div className=" flex h-[44px] w-[400px] md:w-[502px] justify-end mt-3">
        <button className="h-[44px] w-[80px] mr-3 text-black bg-white rounded"> Cancel</button>
        <button className="h-[44px] w-[80px]  mr-1 bg-blue-700 hover:bg-blue-900 rounded">Upload</button>

    </div>
        </div>
       </>
    )
}