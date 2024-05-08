import { Link } from "react-router-dom"
import bg from "../assets/background.jpg"
import Paging from "../components/Paging"
import DesktopMusicMenu from "../components/DesktopMusicMenu"
import { useEffect, useState } from "react"

export default function UserMusic() {
  const [playerDisplay, setPlayerDisplay] = useState(window.innerWidth > 1280 ? "side":"bottom");

  useEffect(() => {
    const change = () => {
      const val = window.innerWidth > 1280 ? "side":"bottom";
      if (val!==playerDisplay) {
        setPlayerDisplay(val);
      }
    }
    window.addEventListener("resize", change);
    return () => {
      window.removeEventListener("resize", change);
    }
  }, [playerDisplay])

  return (
    <div className="mx-auto pt-5 flex max-w-[469px] md:max-w-[695px] lg:max-w-[921px] xl:max-w-[1150px]">
      <div className="w-full xl:w-[70%]">
        <div className="flex flex-wrap">
          {new Array(20).fill(true).map((_x, i) => (
            <div key={i} className="w-1/2 md:w-1/3 lg:w-1/4 transition p-2">
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
      {playerDisplay==="side"&&
        <div style={{width: "30%"}} className="p-2 relative">
          <DesktopMusicMenu />
        </div>
      }
    </div>
  )
}