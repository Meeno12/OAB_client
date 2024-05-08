import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {Buffer} from 'buffer';
import Button from "../components/Button";
import DesktopMusicController from "../components/DesktopMusicController";

export default function UploadMusic() {
  const [files, setFiles] = useState([]);
  const [page, setPage] = useState(0);
  const [songIndex, setSongIndex] = useState(0);
  const [linkDrodown, setLinkDrodown] = useState(false);
  const [musicForm, setMusicForm] = useState({
    desc: "",
    childs: new Array(4).fill({
      title: "",
      tags: "",
      links: [
        {platform: "youtube", url: "", valid: false}
      ]
    }),
  })
  const music = musicForm.childs[songIndex];
  const musicPlatform = ["youtube", "spotify", "soundcloud", "bandcamp"];
  const {jsmediatags} = window;
  const [albumCover, setAlbumCover] = useState(null)

  const setForm = (attr, val) => setMusicForm({...musicForm, [attr]: val});
  const setMusic = (attr, val) => setMusicForm({...musicForm, childs: musicForm.childs.map((x, i2) => (
    songIndex===i2?{...music, [attr]: val}:x
  ))});
  
  const setLink = (index, attr, val) => setMusic("links", music.links.map((x, i) => (
    i===index?{...x, [attr]: val}:x
  )));
  
  const verifyLink = (str, i) => {
    try {
      const host = new URL(str).host;
      let valid = false;
      switch (music.links[i].platform) {
        case "youtube":
          if (host === "www.youtube.com" || host === "youtu.be") valid = true;
          break;
        case "spotify":
          if (host === "open.spotify.com") valid = true;
          break;
        case "soundcloud":
          if (host === "soundcloud.com") valid = true;
          break;
        case "bandcamp":
          const temp = host.split(".");
          temp.shift();
          if (temp.join(".") === "bandcamp.com") valid = true;
          break;
      }
      return valid;
    } catch (e) {
      return false;
    }
  }

  const setUrl = (e, i) => {
    const val = e.target.value
    const valid = verifyLink(val, i);
    const newLinks = music.links.map((x, idx) => (
      idx===i?{...x, url: val, valid}:x
    ));

    if (music.links.map((x, idx) => idx===i?valid:x.valid).every(link => link)) {
      const availablePlatform = musicPlatform.filter(platform =>  !music.links.find(x => platform===x.platform))
      if (!availablePlatform[0]) {
        setMusic("links", music.links.map((x, idx) => (
          idx===i?{...x, url: val, valid}:x
        )))
        return
      };
      newLinks.push({platform: availablePlatform[0], url: "", valid: false});
      setMusic("links", newLinks)
    } else {
        if (newLinks.filter(x => !x.valid).length>1) {
        const toRemove = newLinks.indexOf(newLinks.find(x => !x.valid));
        if (toRemove !== -1) {
          newLinks.splice(toRemove, 1);
        }
      }
      setMusic("links", newLinks);
    }
  }

  const dropFile = (e) => {
    e.preventDefault();  
  
    const uploadeFiles = [];
    if (e.dataTransfer.items) {
      [...e.dataTransfer.items].forEach((item, i) => {
        if (item.kind === "file") {
          uploadeFiles.push(item.getAsFile());
        }
      });
    } else {
      [...e.dataTransfer.files].forEach((file, i) => {
        uploadeFiles.push(file)
      });
    }
    if (uploadeFiles.length < 0) return console.log("no file found");
    uploadFiles(uploadeFiles);
  };
  const uploadFiles = async (files) => {
    const musics = [];
    let hasCover = false;
    let count = 0;
    files.forEach((file, i) => {
      jsmediatags.read(file, {
        onSuccess: (data) => {
          count++;
          if (!hasCover && data.tags.picture) {
            const {picture} = data.tags;
            setAlbumCover(`data:${picture.format};base64,${Buffer.from(picture.data).toString('base64')}`);
            hasCover = true;
          };
          musics.push({title: data.tags.title || file.name, tags: "", links: [
            {platform: "youtube", url: "", valid: false}
          ]})
          if (count===files.length) {
            setSongIndex(0); 
            setForm("childs", musics);
            setFiles(files);
            setPage(1);
          }
        },
        onError: (err) => {
          console.log(':(', err.type, err.info);
        }
      })
    })
  }
  const changeAlbumCover = (e) => {
    setAlbumCover(URL.createObjectURL(e.target.files[0]));
  }

  const currentPage = () => {
    switch (page) {
      case 0:
        return (
          <div className="md:px-8">
            <label onDrop={dropFile} onDragOver={(e) => e.preventDefault()} className="tooltip w-full aspect-[9/16] md:aspect-video border-4 border-dashed flex flex-col justify-center items-center">
              <div className="text-center text-slate-400 relative">
                <FontAwesomeIcon className="mb-4 h-24 w-24 md:h-32 md:w-32" icon="file-audio" />
                <div style={{width: 220}} className="text-lg whitespace-pre-wrap">
                  {files[0] ?
                   files.length + " file" + (files.length > 1 ? "s": "") + " uploaded\n" + 
                  "Upload again to change files" 
                  : "Select multiple file to upload as album/ep"}
                </div>            
                <div style={{width: 160}} className="tooltip-text">drag and drop or click to upload</div>
              </div>
              <input onChange={(e) => uploadFiles(e.target.files)} type="file" multiple hidden/>
            </label>
            {files[0] && 
              (<div className="flex justify-between mt-4">
                <div></div>
                <Button variant="solid" onClick={() => setPage(1)}>Next</Button>
              </div>)
            }
          </div>
        );
      case 1:
        return musicForm.childs[0] ? (
          <div className="flex flex-wrap flex-row-reverse">
            <div className="p-2 w-full md:w-[30%] flex items-center flex-col">
              <label>
                <img src={albumCover?albumCover:""} className="w-40 aspect-square object-cover" />
                <input onChange={changeAlbumCover } type="file" hidden />
              </label>
              <DesktopMusicController src={files[songIndex]||""} />
              {musicForm.childs.length > 1 && (
                <table className="w-full mt-3">
                  <thead>
                    <tr className="text-slate-300 border-y border-slate-700">
                      <th className="w-10 font-normal pl-3 py-1">#</th>
                      <th className="text-left font-normal px-2 py-1">Title</th>
                      <th className="text-right font-normal pr-7 py-1"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {musicForm.childs.map((x, i) => (
                      <tr onClick={() => setSongIndex(i)} key={i} className={"hover:bg-white/[.05] cursor-pointer" + (songIndex===i?" bg-white/[.05]":"") }>
                        <td className="w-10 pl-3 text-center py-1.5">
                          {i +1 }
                        </td>
                        <td className="text-left px-2 py-1.5">{x.title}</td>
                        <td className="text-right pr-7 py-1.5"><FontAwesomeIcon icon={x.title?"check":"circle-exclamation"} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
            <div className="p-2 w-full md:w-[70%]">
              <label>
                <div>Title <span>*</span></div>
                <input type="text" value={music.title} onChange={(e) => setMusic("title", e.target.value)} 
                className="focus-visible:outline-none focus-visible:bg-[#13202c] py-1 px-2 bg-[#00202b] rounded w-full" />
              </label>
              <label className="">
                <div>Description</div>
                <textarea value={musicForm.desc} onChange={(e) => setForm('desc', e.target.value)} className="focus-visible:outline-none focus-visible:bg-[#13202c] py-1 px-2 bg-[#00202b] rounded w-full"></textarea>
              </label>
              <label>
                <div>Tags</div>
                <textarea value={music.tags} onChange={(e) => setMusic('tags', e.target.value)} 
                className="focus-visible:outline-none focus-visible:bg-[#13202c] py-1 px-2 bg-[#00202b] rounded w-full"></textarea>
              </label>
              <div>
                <div>Links</div>
                {music.links.map((link, i) => (
                  <div key={i} className="flex flex-wrap mb-0.5">
                    <div onMouseLeave={() => setLinkDrodown(false)} onClick={() => !link.valid&&setLinkDrodown(linkDrodown===i?false:i)} className={(!link.valid?"hover:bg-[#13202c] ":"")+"bg-[#00202b] relative cursor-pointer border-r flex items-center px-2 border-slate-700"}>
                      <div>
                        <FontAwesomeIcon icon={"fab fa-"+link.platform} className="w-6 h-6 p-1" />
                      </div>
                      <FontAwesomeIcon icon="caret-down" style={{transform: `rotate(${linkDrodown===i?180:0}deg)`}} className="ml-2" />
                      <div style={{zIndex: 5}} className={"absolute top-full left-0 w-full pt-1" + (linkDrodown===i?"":" hidden")}>
                        {musicPlatform.filter(platform =>  !music.links.find(x => platform===x.platform)).map((x, i2) => (
                          <div onClick={() => setLink(i, "platform", x)} key={i2} className="bg-[#00202b] hover:bg-[#13202c] p-1 px-2 flex justify-center">
                            <FontAwesomeIcon icon={"fab fa-"+x} className="w-6 h-6" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <input type="text" value={link.url} onChange={(e) => setUrl(e, i)}
                      className="flex-1 focus-visible:outline-none focus-visible:bg-[#13202c] py-1 px-2 bg-[#00202b] rounded" />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full flex mt-4 justify-between">
              <Button variant="solid" onClick={() => setPage(0)}>Prev</Button>
              <Button variant="solid">Submit</Button>
            </div>
          </div>
        ) : undefined
    }
  }
  
  return (
    <div className="bg-[#001820] min-h-screen">
      <div className="mx-auto pt-20" style={{maxWidth: 1150}}>
        <div className="bg-[#002e3f] text-slate-50 p-5">
          {currentPage()}
        </div>
      </div>
    </div>
  )
}