import { LiaChartBarSolid } from "react-icons/lia";
import { GiWallet } from "react-icons/gi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GiPayMoney } from "react-icons/gi";
import { Link } from "react-router-dom";
export default function ListaMenu() {
  return (
    <ul className="text-zinc-400 text-2xl ">
      <li className="cursor-pointer hover:bg-[#00E2A8] rounded-xl hover:text-white hover:shadow-lg hover:shadow-[#00E2A8]/60 transition">
        <Link
          to="/resumen"
          className="flex gap-2 m-3 p-2"
        >
          <LiaChartBarSolid />
          <span>Resumen</span>
        </Link>
      </li>
      <li className="cursor-pointer hover:bg-[#00E2A8] rounded-xl hover:text-white hover:shadow-lg hover:shadow-[#00E2A8]/60 transition">
        <Link
          to="/billetera"
          className="flex gap-2 m-3 p-2"
        >
          <GiWallet />
          <span>Billetera</span>
        </Link>
      </li>
      <li className="cursor-pointer hover:bg-[#00E2A8] rounded-xl hover:text-white hover:shadow-lg hover:shadow-[#00E2A8]/60 transition">
        <Link
          to="/transferir"
          className="flex gap-2 m-3 p-2"
        >
          <FaMoneyBillTransfer />
          <span>Transferir</span>
        </Link>
      </li>
      <li className="cursor-pointer hover:bg-[#00E2A8] rounded-xl hover:text-white hover:shadow-lg hover:shadow-[#00E2A8]/60 transition">
        <Link
          to="/pagar"
          className="flex gap-2 m-3 p-2"
        >
          <GiPayMoney />
          <span>Pagar</span>
        </Link>
      </li>
    </ul>
  );
}
