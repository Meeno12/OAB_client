import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function DesktopMusicController({src}) {
  const [audio, setAudio] = useState(null);
  const [play, setPlay] = useState(false);
  const [progress, setProgress] = useState(0);

  const loadMusic = (src, audio2) => {
    const aud = audio2 || audio;
    aud.src = src;
    setAudio(aud);
    aud.addEventListener(
      "loadeddata",
      () => {
        console.log(
          getTimeCodeFromNum(aud.duration)
        )
        aud.volume = .75;
      },
      false
    );
  }
  
  useEffect(() => {
    // const audio = new Audio();
    // setAudio(audio); 
    // if (typeof src === "string") {
    //   loadMusic(src, audio)
    // } else {
    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     loadMusic(reader.result, audio)
    //   };
    //   reader.readAsDataURL(src);
    // }


    // const interval = setInterval(() => {
    //   setCount(count + 1);
    // }, 1000);

    // return () => clearInterval(interval);
  }, []);

  function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;
  
    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(
      seconds % 60
    ).padStart(2, 0)}`;
  }

  const togglePlay = () => {
    const val = !play 
    setPlay(!play);
    if (val) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  return (
    <div className="flex flex-wrap mt-2.5">
      <button onClick={() => togglePlay()} className="bg-slate-50 leading-none p-2">
        <FontAwesomeIcon style={{color: "#002634"}} className="w-8 h-8" icon="play" />
      </button>
      <div className="flex pl-3 py-1 flex-1 items-center">
        <div className="flex w-full flex-col">
          <div className="py-1 controller">
            <div className="bg-gray-500 h-1 rounded-full">
              <div className="h-full rounded-full flex items-center justify-end" style={{width: "23%", backgroundColor: '#ffbf00'}}>
                <div className="h-3 w-3 bg-white rounded-full" style={{transform: "translateX(50%)"}}></div>
              </div>
            </div>
          </div>
          <div className="text-slate-50 pt-0.5">
            <span>
              0:00
            </span>
            <span style={{margin: "3px 0"}}>
              /
            </span>
            <span>
              0:00
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}