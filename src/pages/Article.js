import { Link } from "react-router-dom";
import bg from "../assets/bg-mobile.jpg";
import Paging from "../components/Paging";

export default function Article() {
  const limit = 12;
  const data = 12;
  return (<div className="bg-[#001820] min-h-screen">
    <div className="mx-auto pt-20 h-screen" style={{maxWidth: 1300}}>
      <div className="pb-1 flex justify-center items-center align-center h-full">
        <div className="text-slate-50 text-4xl w-96 font-bold h-fit text-center">
          <div>Tidak Ada Ide</div>
          <div>Tolong bantu desain :)</div>
        </div>
      </div>
    </div>
  </div>)
}