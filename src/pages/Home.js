import bg from "../assets/background.jpg";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";
import icon from '../assets/icon.png';
import wave from '../assets/wave.svg';
import { motion } from "framer-motion";
import { Link, useOutletContext } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DesktopMusicMenu from "../components/DesktopMusicMenu";

export default function Home() {
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
  
  useEffect(() => {
    const page = document.body.parentElement,
      bgEl = document.getElementById("main-bg"),
      onScroll = () => setBg(page, bgEl);
    setBg(page, bgEl);
    document.addEventListener("scroll", onScroll)

    document.title = "“Old Adam” Bar"
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    })
    return () => {document.removeEventListener("scroll", onScroll)}
  }, []);

  const setBg = (page, bgEl) => {
    bgEl.style.backgroundPosition =
      (Math.round(page.scrollTop) / (document.body.clientHeight - window.innerHeight)) *
        100 +
    "% 0px";
  }


  const {init} = useOutletContext()

  const preload = () => {
    const navbar = document.getElementById('navbar'),
    page = document.body.parentElement,
    frontPage = document.getElementById("frontPage"),
    bgEl = document.getElementById("main-bg");
    

    

    document.addEventListener("scroll", (e) => {
      bgEl.style.backgroundPosition =
        (Math.round(page.scrollTop) / (document.body.clientHeight - window.innerHeight)) *
          100 +
      "% 0px";
      // if (page.scrollTop > window.innerHeight/2) {
      //   frontPage.style.opacity = 0;
      //   navbar.style.top = "0px";
      // } else {
      //   navbar.style.top = "-80px";
      //   frontPage.style.opacity = 1;
      // }
    })
  }

  const particleOptions = {
    fpsLimit: 120,
    interactivity: {
      events: {
        resize: true
      },
    },
    particles: {
      color: { value: "#ffffff" },
      move: {
        enable: true,
        speed: 8,
        direction: "top-right",
        random: true,
        straight: false,
        out_mode: "out",
        attract: { enable: true, rotateX: 600, rotateY: 600 },
      },
      number: { density: { enable: true, area: 2000 }, value: 40 },
      opacity: {
        value: 0.3,
      },
      size: {
        value: 1.3,
      },
    },
}

  return (
    <div>
      <div className="w-screen h-screen fixed" style={{zIndex: -150,background: `url("${bg}") no-repeat fixed`, backgroundSize: "cover"}} id="main-bg"></div>
      <Particles
        id="tsparticles"
        options={particleOptions}
        className="w-screen h-screen fixed z-[-125]"
      />
      <div className="h-screen">
        {init && (
          <div>
            <div id="sidePadding" className="fixed flex justify-between h-screen w-screen" style={{ zIndex: -100}}>
              <motion.div initial={{height: "0"}} animate={{ height: "100vh" }} transition={{ duration: 0.5, delay: 0.1 }} className="w-3.5 bg-[#00384f]"></motion.div>
              <motion.div initial={{height: "0"}} animate={{ height: "100vh" }} transition={{ duration: 0.5, delay: 0.7}} className="w-3.5 bg-[#00384f]"></motion.div>
            </div>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ duration: 0.5, delay: 1.3}} className="flex h-screen justify-center items-center">
              <div id="frontPage" className="flex koulen transition-all leading-none text-slate-50" style={{fontSize: 90}}>
                <img src={icon} style={{height: 300, filter: "drop-shadow(-6px 10px 8px #00000085)"}} />
                <div className="flex flex-col justify-center" style={{textShadow: "#00000085 -6px 10px 8px"}}>
                  <div>"old adam"</div>
                  <div className="pl-2">bar</div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>


      <img src={wave} className="w-screen block" />
      <div className="bg-[#00394fc9]">
        <div>
          <div className="koulen text-center pb-6 text-white text-6xl">
            Fanarts
          </div>
          <div className="pb-1 max-w-[469px] md:max-w-[695px] lg:max-w-[921px] mx-auto px-2 flex flex-wrap">
            {new Array(12).fill(true).map((_x, i) => (
              <div key={i} className="w-1/2 md:w-1/3 lg:w-1/4 p-1">
                <div className="aspect-square transition-all relative overflow-hidden">
                  <img src={bg} className="object-cover transition-all block w-full h-full hover:w-10px" />
                  {Math.round(Math.random() * 10) === 1 && (
                    <div className="absolute mt-1 mr-2 text-xs rounded p-1 bg-black/25 text-slate-200 top-0 right-0">
                      {Math.round(Math.random() * 3.5) + 2} <FontAwesomeIcon icon="images" />
                    </div>
                  )}
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
        <div>
          <div className="koulen pb-6 pt-16 text-center text-white text-6xl">
            Musics
          </div>
          <div className="mx-auto flex max-w-[469px] md:max-w-[695px] lg:max-w-[921px] xl:max-w-[1150px]">
            <div className="w-full xl:w-[70%]">
              <div className="flex flex-wrap px-2">
                {new Array(12).fill(true).map((_x, i) => (
                  <div key={i} className="w-1/2 md:w-1/3 lg:w-1/4 transition p-2">
                    <div className="cursor-pointer">
                      <div className="w-full aspect-square">
                        <img className="w-full h-full object-cover block" src={bg} />
                      </div>
                      <div className="text-slate-50">
                        <Link to={"/music/album-name/"+i} className="font-bold block hover:underline truncate">Music Name</Link>
                        <Link to="/user/artist/music" className="text-sm leading-none text-slate-400 block hover:border-slate-400 w-fit pb-0.5 border-b border-transparent truncate">
                          Artist name
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {playerDisplay==="side"&&
              <div style={{width: "30%"}} className="p-2 relative">
                <DesktopMusicMenu />
              </div>
            }
          </div>
        </div>
        <div>
          <div className="koulen text-center pb-6 pt-16 text-white text-6xl">
            Events
          </div>
          <div className="flex-wrap mx-auto flex max-w-[400px] md:max-w-[695px] lg:max-w-[921px] xl:max-w-[1150px]">
            {new Array(4).fill(true).map((_x, i) => (
              <div className="md:w-1/2 w-full p-1 overflow-hidden" style={{aspectRatio: 5/2}} key={i}>
                <div className="w-full relative">
                  <div className="event-home cursor-pointer bg-black/50 hover:bg-slate-950/50 flex items-center p-4 text-slate-100 absolute w-full h-full">
                    <div className="koulen ml-0 transition-all main-name lg:text-5xl text-3xl">Comifuro 18</div>
                    <div className="absolute koulen flex justify-between w-full left-0 p-4 bottom-0">
                      <div>12/12/2024</div>
                      <div>see all <FontAwesomeIcon className="chevron-right" icon="angle-double-right" /></div>
                    </div>
                  </div>
                  <img src={bg} alt="image" />
                </div>
              </div>
            ))}
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}