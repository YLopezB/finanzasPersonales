import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "./Sidebar";


export default function Navbar() {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active)
  };

  return (
    <button className="cursor-pointer" onClick={handleActive}>
      {active ? (
        <Sidebar/> 
      ) : (
        <GiHamburgerMenu className="text-3xl" /> 
      )}
    </button>
  );
}
