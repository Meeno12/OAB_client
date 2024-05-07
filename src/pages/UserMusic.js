import { Link } from "react-router-dom"
import bg from "../assets/background.jpg"
import Paging from "../components/Paging"
import DesktopMusicMenu from "../components/DesktopMusicMenu"

export default function UserMusic() {
  return (
    <div className="mx-auto pt-5 flex" style={{maxWidth: 1150}}>
      <div style={{width: "70%"}}>
        <div className="flex flex-wrap">
          {new Array(20).fill(true).map((_x, i) => (
            <div key={i} className="w-1/4 transition p-2">
              <div className="cursor-pointer">
                <div className="w-full aspect-square">
                  <img className="w-full h-full object-cover block" src={bg} />
                </div>
                <div className="text-slate-50">
                  <Link to={"/music/album-name/"+i} className="font-bold block hover:underline truncate">Music Name</Link>
                  <Link to="#" className="text-sm leading-none text-slate-400 block hover:border-slate-400 w-fit pb-0.5 border-b border-transparent truncate">Artist name</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Paging />
      </div>
      <div style={{width: "30%"}} className="p-2 relative">
        <DesktopMusicMenu />
      </div>
    </div>
  )
}