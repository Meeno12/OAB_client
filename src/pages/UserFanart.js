import { Link } from "react-router-dom"
import bg from "../assets/background.jpg"
import Paging from "../components/Paging"

export default function UserFanart() {
  return (
    <div className="mx-auto pt-5 max-w-[469px] md:max-w-[695px] lg:max-w-[921px] xl:max-w-[1150px]">
      <div className="pb-1 px-2 flex flex-wrap">
        {new Array(20).fill(true).map((_x, i) => (
          <div key={i} className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-1">
            <div className="aspect-square transition-all relative overflow-hidden">
              <img src={bg} className="object-cover transition-all block w-full h-full hover:w-10px" />
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
  )
}