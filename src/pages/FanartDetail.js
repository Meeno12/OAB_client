import { Link } from "react-router-dom"
import bg from "../assets/background.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import Viewer from "react-viewer";

export default function FanartDetail() {
  const [shownImages, setShownImages] = useState([])

  return (
    <div className="bg-[#001820] min-h-screen">
      <Viewer
      noFooter
      zoomSpeed={0.1}
      onMaskClick={(e) => e.button===0 && setShownImages([])}
      visible={shownImages[0]}
      onClose={() =>  setShownImages([]) }
      images={shownImages}
      />
      <div className="mx-auto pt-20" style={{maxWidth: 1150}}>
        <div className="flex flex-wrap">
          <div className="w-3/4 p-2">
            <div className="bg-[#002634]">
              <div style={{minHeight: 480}} onClick={() => setShownImages([{src: bg, alt: ''}])} className="flex items-center justify-center cursor-zoom-in">
                <img className="max-h-screen" src={bg} />
              </div>
              <div className="py-2.5 px-5 text-slate-50">
                <div className="text-xl font-bold">Art Title</div>
                <div className="text-slate-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed id semper risus in hendrerit. Cursus sit amet dictum sit amet justo donec. Porttitor lacus luctus accumsan tortor posuere ac.</div>
                <div className="pt-2 text-slate-300">
                  <Link to="#" className="tag"><span className="tag-el">Usami Renko</span> <span className="text-gray-500">147</span></Link>
                  <Link to="#" className="tag"><span className="tag-el">Usami Sumireko</span> <span className="text-gray-500">147</span></Link>
                  <Link to="#" className="tag"><span className="tag-el">Maribel Hearn</span> <span className="text-gray-500">147</span></Link>
                  <Link to="#" className="tag"><span className="tag-el">Fujiwara No Mokou</span> <span className="text-gray-500">147</span></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/4 py-2 text-slate-50 relative">
            <div className="bg-[#002634] sticky" style={{top: 88}}>
              <Link to="/user/artist/fanart">
                <img className="" style={{aspectRatio: 1/3}} src={bg} />
              </Link>
              <div className="border border-t-0 border-slate-700 relative">
                <Link to="/user/artist/fanart" className="flex">
                  <div style={{marginTop: -34}} className="border-[#002634] overflow-hidden border-4 rounded-full border-2 ml-3">
                    <img style={{width: 72}} src={bg} className="aspect-square object-cover" />
                  </div>
                  <div className="pr-3 pl-2 pt-1">
                    <div className="font-bold text-lg leading-none truncate">Username</div>
                    <div className="text-slate-300 truncate">@handler</div>
                  </div>
                </Link>
                <div className="text-slate-300 text-sm text-right mt-2">
                  <Link className="hover:underline hover:text-slate-50 pr-3" to="/user/artist/fanart">Show More <FontAwesomeIcon icon="angles-right" /></Link>
                </div>
                <div className="mt-1 flex flex-wrap">
                  {new Array(3).fill(true).map((_x, i) => (
                    <div key={i} className="p-0.5 w-1/3">
                      <Link to={"/fanart/"+i}>
                        <img src={bg} className="aspect-square object-cover w-full" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5">
          <div className="text-lg text-slate-50">Similar Posts:</div>
          <div className="flex flex-wrap mx-2">
            {new Array(10).fill(true).map((_x, i) => (
              <div key={i} className="w-1/5 p-1">
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
        </div>
      </div>
    </div>
  )
}