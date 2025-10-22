import { MdSupervisorAccount } from 'react-icons/md';
import { BiSupport } from 'react-icons/bi';
import { BiLogOut } from 'react-icons/bi';
import { Link } from "react-router-dom";
export default function ListaMenuCuenta() {
  return (
    <ul className="text-zinc-400 text-2xl ">
      <li className="cursor-pointer hover:bg-[#00E2A8] rounded-xl hover:text-white hover:shadow-lg hover:shadow-[#00E2A8]/60 transition">
        <Link
          to="/cuenta"
          className="flex gap-2 m-3 p-2"
        >
          <MdSupervisorAccount />
          <span>Administrar</span>
        </Link>
      </li>
      <li className="cursor-pointer hover:bg-[#00E2A8] rounded-xl hover:text-white hover:shadow-lg hover:shadow-[#00E2A8]/60 transition">
        <Link
          to="/soporte"
          className="flex gap-2 m-3 p-2"
        >
          <BiSupport />
          <span>Soporte</span>
        </Link>
      </li>
      <li className="cursor-pointer hover:bg-[#00E2A8] rounded-xl hover:text-white hover:shadow-lg hover:shadow-[#00E2A8]/60 transition">
        <Link
          to="/logout"
          className="flex gap-2 m-3 p-2"
        >
          <BiLogOut />
          <span>Salir</span>
        </Link>
      </li>
    </ul>
  );
}
