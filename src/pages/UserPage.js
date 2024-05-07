import { Link, Outlet, useLocation } from "react-router-dom"
import bg from "../assets/background.jpg"
import Button from "../components/Button"
import { useEffect } from "react";

export default function UserPage() {
  const location = useLocation();
  const selected = location.pathname.split("/")[3];
  
  useEffect(() => {
    console.log(selected)
  }, [])

  return (
    <div className="bg-[#001820] min-h-screen">
      <div style={{paddingTop: 68}}>
        <img src={bg} className="object-cover w-screen" style={{height: 500}}/>
        <div className="w-screen bg-[#002634]">
          <div className="mx-auto px-10" style={{maxWidth: 1150}}>
            <div className="flex">
              <div style={{marginTop: -84}} className="border-[#002634] overflow-hidden border-4 rounded-full border-2">
                <img src={bg} style={{}} className="h-36 aspect-square object-cover" />
              </div>
              <div className="flex flex-1 items-center text-slate-50 justify-between">
                <div className="ml-4">
                  <div className="text-2xl font-bold leading-none pt-1">Username</div>
                  <div className="text-slate-300">@handle</div>
                </div>
                <div>
                  <Button variant="solid">Follow</Button>
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