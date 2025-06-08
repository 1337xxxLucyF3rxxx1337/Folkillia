import { useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

const ParticleBackground = ({ children }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: { value: "#11101A" },
          },
          fpsLimit: 120,
          particles: {
            color: { value: "#17EF9F" },
            links: {
              color: "#17EF9F",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              outModes: { default: "bounce" },
            },
            number: { value: 80, density: { enable: true, area: 800 } },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
          },
          detectRetina: true,
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0, // fondo
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "white",
          textAlign: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ParticleBackground;
