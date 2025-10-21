import { useState, useEffect } from "react";
import "./App.css";
import ASCIIText from "./components/ASCIIText";
import linkedinIcon from "./assets/linkedin.svg";
import githubIcon from "./assets/github.svg";
import mailIcon from "./assets/envelope.svg";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        background: "black",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transform: `translateY(${isMobile ? '-70px' : '-20px'})`,
        }}
      >
        <ASCIIText
          text="Pierre"
          enableWaves={true}
          asciiFontSize={isMobile ? 6 : 9}
          planeBaseHeight={isMobile ? 14 : 8}
          vertical={isMobile}
        />
      </div>

      <div
        className="socials"
        style={{
          position: "absolute",
          top: "80%",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "2rem",
          zIndex: 10,
        }}
      >
        <a
          href="https://linkedin.com/in/pierreanri"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
        </a>

        <a
          href="https://github.com/pierreanri"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="GitHub" className="social-icon" />
        </a>

        <a href="mailto:pierreanriwork@outlook.com">
          <img src={mailIcon} alt="Email" className="social-icon" />
        </a>
      </div>
    </div>
  );
}

export default App;