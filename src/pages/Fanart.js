import Paging from "../components/Paging";
import bg from "../assets/bg-mobile.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { clearNavbarEvent } from "../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Fanart() {

  return (<div className="bg-[#001820] min-h-screen">
    <div className="mx-auto pt-20" style={{maxWidth: 1150}}>
      <div className="pb-1 flex flex-wrap">
        {new Array(20).fill(true).map((_x, i) => (
          <div key={i} className="w-1/5 p-1">
            <div className="aspect-square transition-all relative overflow-hidden">
              <img src={bg} className="object-cover transition-all block w-full h-full hover:w-10px" />
              {Math.round(Math.random() * 10) === 1 && (
                <div className="absolute mt-1 mr-2 text-xs rounded p-1 bg-black/25 text-slate-200 top-0 right-0">
                  {Math.round(Math.random() * 3.5) + 2} <FontAwesomeIcon icon="images" />
                </div>
              )}
              <div className="hover:opacity-100 opacity-0 transition-all ">
                <Link to={"/fanart/"+i} className="w-full h-full absolute bg-gradient-to-t from-gray-900 to-transparent top-0 flex items-end text-slate-50 p-2">
                  <div>
                    <div className="text-lg pb-6 truncate">Title</div>
                  </div>
                </Link>
                <Link to="/user/artist/fanart" className="flex mb-2 mx-2 block hover:underline align-center absolute bottom-0 left-0 text-sm text-gray-300">
                  <img src={bg} className="aspect-square rounded-full w-6 h-6 bg-cover mr-2" />
                  <div className="truncate">Artist Name</div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Paging/>
    </div>
  </div>)
}