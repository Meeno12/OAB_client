import { Link, Outlet, useLocation } from "react-router-dom"
import bg from "../assets/background.jpg"

export default function UserPage() {
  const location = useLocation();
  const selected = location.pathname.split("/")[3];
  
  return (
    <div className="bg-[#001820] min-h-screen">
      <div style={{paddingTop: 68}}>
        <img src={bg} className="object-cover w-screen h-36 md:h-[470px]"/>
        <div className="w-screen bg-[#002634]">
          <div className="mx-auto px-5 md:px-10" style={{maxWidth: 1150}}>
            <div className="flex mb-3 md:mb-0">
              <div className="mt-[-40px] md:mt-[-84px] border-[#002634] overflow-hidden border-4 rounded-full border-2">
                <img src={bg} style={{}} className="h-28 md:h-36 aspect-square object-cover" />
              </div>
              <div className="flex-1 items-center text-slate-50">
                <div className="ml-4">
                  <div className="text-2xl font-bold leading-none pt-1">Username</div>
                  <div className="text-slate-300">@handle</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex text-slate-50">
                <Link to="/user/artist/fanart" className={"mb-2 text-lg px-2 mx-1 border-b-2 " + (selected === undefined || selected === "fanart" ? "border-slate-50" : "border-transparent") }>Fanart</Link>
                <Link to="/user/artist/music" className={"mb-2 text-lg px-2 mx-1 border-b-2 " + (selected === "music" ?"border-slate-50" : "border-transparent") }>Music</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  )
}