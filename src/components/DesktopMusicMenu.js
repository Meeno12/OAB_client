import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import bg from "../assets/background.jpg"
import DesktopMusicController from "./DesktopMusicController";

export default function DesktopMusicMenu() {
  return (
    <div style={{top: 88}} className="sticky w-full bg-[#002634] h-fit flex flex-col p-5">
      <Link to="/music/album-name/1">
        <img className="w-full object-cover block aspect-square" src={bg} />
      </Link>
      <DesktopMusicController />
      <div className="text-slate-50 mt-2">
        <Link to="/music/album-name/1" className="text-2xl font-bold block">Song title</Link>
        <Link to="/user/artist/music" className="flex block mt-1 mb-0.5 hover:underline align-center text-sm text-gray-300">
          <img src={bg} className="aspect-square rounded-full w-6 h-6 bg-cover mr-2" />
          <div className="truncate">Artist Name</div>
        </Link>
        <div className="text-slate-400">Hardcore Trance Uplifting Denpa</div>
      </div>
      <div className="text-slate-300 mt-4">
        <div>Listen on:</div>
        <div className="flex mt-2">
          <div className="cursor-pointer hover:text-white">
            <FontAwesomeIcon icon="fab fa-youtube" className="w-6 h-6 p-1" />
          </div>
          <div className="cursor-pointer hover:text-white">
            <FontAwesomeIcon icon="fab fa-spotify" className="w-6 h-6 p-1" />
          </div>
          <div className="cursor-pointer hover:text-white">
            <FontAwesomeIcon icon="fab fa-soundcloud" className="w-6 h-6 p-1" />
          </div>
          <div className="cursor-pointer hover:text-white">
            <FontAwesomeIcon icon="fab fa-bandcamp" className="w-6 h-6 p-1" />
          </div>
        </div>
      </div>
    </div>
  )
}