import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function HeroParticles(){
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: false },
                background: { color: "#0f0f0f"},
                particles: {
                    number: { value: 60 },
                    color: { value: "#ff4500" },
                    shape: { type: "circle" },
                    opacity: { value: 0.3 },
                    size: { value: 2 },
                    move: { enable: true, speed: 0.5 },
                    links: {
                        enable: true,
                        color: "#ff4500",
                        distance: 120,
                        opacity: 0.2,
                        width: 1,
                    },
                },
            }}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
            }}
        
        />
    )
}

export default HeroParticles;