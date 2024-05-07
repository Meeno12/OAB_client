import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DesktopMusicMenu from "../components/DesktopMusicMenu";
import { useState } from "react";

export default function MusicDetail() {
  const [hoverMusic, setHoverMusic] = useState(false);
  const onRowHover = (idx) => {
    setHoverMusic(idx)
  }

  return (
    <div className="bg-[#001820] min-h-screen">
      <div className="mx-auto pt-20 flex" style={{maxWidth: 1150}}>
        <div style={{width: "70%"}}>
          <div className="bg-[#002634] text-slate-50 mt-2 p-4">
            <div className="text-2xl font-bold">Album Name</div>
            <table className="w-full mt-3">
              <thead>
                <tr className="text-slate-300 border-y border-slate-700">
                  <th className="w-10 font-normal pl-3 py-1">#</th>
                  <th className="text-left font-normal px-2 py-1">Title</th>
                  <th className="text-right font-normal pr-7 py-1"><FontAwesomeIcon icon="clock" /></th>
                </tr>
              </thead>
              <tbody onMouseOut={() => setHoverMusic(false)}>
                {new Array(6).fill(true).map((_x, i) => (
                  <tr onMouseOver={() => onRowHover(i)} key={i} className="hover:bg-white/[.05] cursor-pointer">
                    <td className="w-10 pl-3 text-center py-2">
                      {hoverMusic === i ? <FontAwesomeIcon icon="play" /> : i +1 }
                    </td>
                    <td className="text-left px-2 py-2">Song Name</td>
                    <td className="text-right pr-7 py-2">03:2</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="px-2 mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut tristique et egestas quis ipsum suspendisse. Montes nascetur ridiculus mus mauris. Gravida quis blandit turpis cursus in hac habitasse platea dictumst. Ultrices tincidunt arcu non sodales neque sodales ut etiam. Ante metus dictum at tempor commodo ullamcorper. Convallis convallis tellus id interdum velit laoreet id. Nisi est sit amet facilisis magna etiam tempor. Tortor condimentum lacinia quis vel eros. Arcu felis bibendum ut tristique et egestas quis. Mauris commodo quis imperdiet massa tincidunt nunc. Etiam non quam lacus suspendisse. Ipsum consequat nisl vel pretium lectus quam id leo. Pretium lectus quam id leo in vitae turpis massa.
              <br/><br/>
              Composer: Someone<br />
              Vocal: Someone<br />
              Other Credits: Someone<br />
            </div>
          </div>
        </div>
        <div style={{width: "30%"}} className="p-2 relative">
          <DesktopMusicMenu />
        </div>
      </div>
    </div>
  )
}