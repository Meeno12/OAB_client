import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import Button from "../components/Button";
import bg from "../assets/background.jpg";
import Viewer from "react-viewer";

export default function UploadFanart() {
  const [page, setPage] = useState(0);
  const [files, setFiles] = useState([]);
  const [imagePreview, setImagePreview] = useState([])
  const [fanartForm, setFanartForm] = useState({
    title: "",
    desc:  "",
    tags: ""
  })
  const [fanartIndex, setFanartIndex] = useState(0);
  const [shownImages, setShownImages] = useState([]);
  const imageMenu = useRef(null)

  const setImage = (attr, val) => {
    setFanartForm({ ...fanartForm, [attr]: val})
  }

  const dropFile = (e) => {
    e.preventDefault();  
  
    const uploadedFiles = [];
    if (e.dataTransfer.items) {
      [...e.dataTransfer.items].forEach((item, i) => {
        if (item.kind === "file") {
          uploadedFiles.push(item.getAsFile());
        }
      });
    } else {
      [...e.dataTransfer.files].forEach((file, i) => {
        uploadedFiles.push(file)
      });
    }
    if (uploadedFiles.length < 0) return console.log("no file found");
    uploadFiles(uploadedFiles);
  };

  const uploadFiles = (files) => {
    setFanartIndex(0);
    setFiles(files);
    setImagePreview(files.map(file => URL.createObjectURL(file)));
    setPage(1)
  }

  const clickMenu = (e, right) => {
    e.stopPropagation();
    const el = imageMenu.current;
    el.scrollLeft = el.scrollLeft + (160 * (right ? 1 : -1));
  }

  const currentPage = () => {
    switch (page) {
      case 0:
        return (
          <div className="px-8">
            <label onDrop={dropFile} onDragOver={(e) => e.preventDefault()} className="w-full aspect-video border-4 border-dashed flex flex-col justify-center items-center">
              <div className="text-center text-slate-400 relative">
                <FontAwesomeIcon className="h-32 mb-4 w-32" icon="file-image" />
                <div className="text-lg whitespace-pre-wrap">
                  {files[0] ?
                   files.length + " file" + (files.length > 1 ? "s": "") + " uploaded\n" + 
                  "Upload again to change files" 
                  : "Drag and drop or click to upload"}
                </div>            
              </div>
              <input onChange={(e) => setFiles(e.target.files)} type="file" multiple hidden/>
            </label>
            {files[0] && 
              (<div className="flex justify-between mt-4">
                <div></div>
                <Button variant="solid" onClick={() => setPage(1)}>Next</Button>
              </div>)
            }
          </div>
        )
      case 1:
        return (
          <div>
            <div style={{minHeight: 480}} onClick={() => setShownImages([{src: imagePreview[fanartIndex], alt: ''}])} className="flex items-center justify-center cursor-zoom-in relative">
              <img className="max-h-screen" src={imagePreview[fanartIndex]} />
              {
                imagePreview.length>1&& (
                <div style={{transform: "translateX(-50%)", maxWidth: 80*5}} className="h-20 absolute bg-black/50 left-1/2 bottom-0">
                  <div className="relative h-full">
                    <div onClick={(e) => clickMenu(e)} className="absolute h-full flex items-center hover:bg-black/50 bg-black/25 transition cursor-pointer left-0 top-0">
                      <FontAwesomeIcon icon="chevron-left" className="mx-2"/>
                    </div>
                    <div onClick={(e) => clickMenu(e, true)} className="absolute h-full flex items-center hover:bg-black/50 bg-black/25 transition cursor-pointer right-0 top-0">
                      <FontAwesomeIcon icon="chevron-right" className="mx-2"/>
                    </div>
                    <div ref={imageMenu} className="h-full flex overflow-x-scroll">
                      {imagePreview.map((file,i) => (
                        <div className="aspect-square p-0.5 flex items-center justify-center cursor-pointer h-full" onClick={(e) => {e.stopPropagation(); setFanartIndex(i)}} key={i}>
                          <img className="max-h-full" src={file} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                )
              }
            </div>
            <div className="flex mt-8 pt-4 border-t border-slate-700 flex-wrap w-full">
              <div className="w-1/2">
                <label>
                  <div>Title</div>
                  <input type="text" value={fanartForm.title} onChange={(e) => setImage("title", e.target.value)} 
                  className="focus-visible:outline-none focus-visible:bg-[#13202c] py-1 px-2 bg-[#00202b] rounded w-full" />
                </label>
                <label>
                  <div>Description</div>
                  <textarea value={fanartForm.desc} onChange={(e) => setImage('desc', e.target.value)} 
                  className="focus-visible:outline-none focus-visible:bg-[#13202c] py-1 px-2 bg-[#00202b] rounded w-full"></textarea>
                </label>
              </div>
              <div className="w-1/2 pl-2">
                <label>
                  <div>Tags</div>
                  <textarea value={fanartForm.tags} onChange={(e) => setImage('tags', e.target.value)} 
                  className="focus-visible:outline-none focus-visible:bg-[#13202c] py-1 px-2 bg-[#00202b] rounded w-full"></textarea>
                </label>
              </div>
            </div>
            <div className="w-full flex mt-4 justify-between">
              <Button variant="solid" onClick={() => setPage(0)}>Prev</Button>
              <Button variant="solid">Submit</Button>
            </div>
          </div>
        )
    }
  }

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
        <div className="bg-[#002e3f] text-slate-50 p-5">
          {currentPage()}
        </div>
      </div>
    </div>
  )
}