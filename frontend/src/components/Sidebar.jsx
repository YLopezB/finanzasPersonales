import ListaMenu from "./ListaMenu";
import ListaMenuCuenta from "./ListaMenuCuenta";
import Logo from "./Logo";
import Mensajes from "./Mensajes";
import Copyright from "./Copyright.jsx";

export default function Sidebar({isOpen}) {
  return (
    <div className={`
    fixed w-full bg-black/80 p-3 transform ${isOpen ? "translate-y-0" : "-translate-y-200"}
    transition-transform duration-400 ease-in-out md:static md:translate-y-0 z-50 md:bg-transparent md:h-screen flex flex-col justify-between`}>
        <Logo />
      <div className="p-3">
        <ListaMenu />
      </div>
      <hr className="border-t-1 border-[#00E2A8]"/>
      <div className="p-3">
        <ListaMenuCuenta />
      </div>
      <div div className="bg-[#00E2A8]/40 p-6 rounded-xl h-50 text-white text-center hidden md:block">
        <Mensajes />
      </div>
      <div className="flex justify-center mt-5">
        <Copyright />
      </div>
    </div>
  );
}
