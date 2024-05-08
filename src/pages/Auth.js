import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function Auth() {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
    const particleEl = document.getElementById("tsparticles")
    const moveParticle = (e) => {
      const xPos = (e.x/window.innerWidth-0.5)*2*-1,
        yPos = (e.y/window.innerHeight-0.5)*2*-1;
      particleEl.style.transform = "translate(" + (5*xPos) + "vw," + (5*yPos) + "vh)";
    }
    document.addEventListener("mousemove", moveParticle);
    return () => {
      document.removeEventListener("mousemove", moveParticle);
    }
  }, []);

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
    <div className="bg-[#001820] min-h-screen px-4 md:px-0 flex justify-center items-center">
      <Particles
        id="tsparticles"
        options={particleOptions}
        className="fixed mouse-dust"
      />
      <Outlet />
    </div>
  )
}