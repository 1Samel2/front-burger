import { useEffect, useState } from "react";
import * as C from './styles'

export default function BackToTheTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const buttonStyle = {
    display: showButton ? "block" : "none",
    
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <C.Container>
      <C.Rocket style={buttonStyle} onClick={handleClick} />
    </C.Container>
  );
}
