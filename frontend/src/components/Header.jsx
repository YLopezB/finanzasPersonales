import Logo from "./Logo.jsx";
import Notifications from "./Notifications";
import Foto from "./Foto";
import Nombre from "./Nombre.jsx";
import ConfigPerfil from "./ConfigPerfil.jsx";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header({isOpen, setIsOpen}) {
  return (
    <div className="sticky p-3 flex justify-between items-center h-15 text-[#00E2A8] inset-0 z-40 md:hidden">
      <div className="text-4xl flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>
      <div className="flex items-center md:gap-1">
        <Notifications />
        <ConfigPerfil />
        <Foto />
        <Nombre />
      </div>
    </div>
  );
}
