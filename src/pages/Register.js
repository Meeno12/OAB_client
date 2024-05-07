import bg from "../assets/background.jpg";
import { loadSlim } from "@tsparticles/slim";
import { useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { Link } from "react-router-dom";

export default function Register() {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, [])

  const particleOptions = {
    fpsLimit: 60,
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
    <div className="bg-[#001820] min-h-screen flex justify-center items-center">
      <Particles
        id="tsparticles"
        options={particleOptions}
        className="w-screen h-screen fixed"
      />
      <div style={{width:720, height:580, zIndex: 1}} className="flex flex-wrap rounded-xl overflow-hidden">
        <div className="h-full relative w-2/5" >
          <img src={bg} className="h-full w-full object-cover" />
          <div className="absolute top-0 left-0 bg-black/25 p-8 w-full h-full">
          </div>
        </div>
        <div className="h-full w-3/5 bg-[#002e3f] text-slate-100 p-8 shadow-lg flex flex-col" >
          <div className="font-bold pb-8 border-b-2 border-slate-700 py-4 text-4xl">
            Register
          </div>
          <div className="flex flex-1 items-center">
            <div className="w-full">
              <label className="block pb-2">
                <div className="font-bold pl-2 pb-0.5 text-slate-200">Email</div>
                <input type="text" className="focus-visible:outline-none border border-slate-800 focus-visible:bg-[#13202c] py-1 px-2 bg-[#00202b] rounded w-full" />
              </label>
              <label className="block py-2">
                <div className="font-bold pl-2 pb-0.5 text-slate-200">Password</div>
                <input type="text" className="focus-visible:outline-none border border-slate-800 focus-visible:bg-[#13202c] py-1 px-2 bg-[#00202b] rounded w-full" />
              </label>
              <label className="block py-2">
                <div className="font-bold pl-2 pb-0.5 text-slate-200">Username</div>
                <input type="text" className="focus-visible:outline-none border border-slate-800 focus-visible:bg-[#13202c] py-1 px-2 bg-[#00202b] rounded w-full" />
              </label>
              <label className="block py-2">
                <div className="font-bold pl-2 pb-0.5 text-slate-200">Handler</div>
                <input type="text" className="focus-visible:outline-none border border-slate-800 focus-visible:bg-[#13202c] py-1 px-2 bg-[#00202b] rounded w-full" />
              </label>
              <button className="login-btn relative w-full py-1 my-4 text-xl bg-slate-100 text-[#002e3f] font-bold">
                <div className="slide-down absolute top-0 left-0 bg-slate-300 transition-all w-full"></div>
                <span style={{zIndex:3}} className="relative">Sign up</span>
              </button>
              <div>Already have an account? <Link to="/login" className="underline">Join now</Link></div>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}