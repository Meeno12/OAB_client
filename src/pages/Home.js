import desktop_bg from "../assets/background.jpg";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect } from "react";
import icon from '../assets/icon.png';
import wave from '../assets/wave.svg';
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";

export default function Home() {
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
      <div className="w-screen h-screen fixed" style={{zIndex: -150,background: `url("${desktop_bg}") no-repeat fixed`, backgroundSize: "cover"}} id="main-bg"></div>
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
      <div style={{height: "300vh"}} className="bg-[#00394fc9]"></div>
    </div>
  )
}