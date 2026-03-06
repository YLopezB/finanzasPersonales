import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { BiSearchAlt } from 'react-icons/bi';
import Foto from "../components/Foto";

export default function TablaMovimientos() {
  return (
    <div className="bg-[#1C1F2A] text-gray-100 p-6 rounded-2xl shadow-lg w-full max-w-5xl mx-auto mt-6">
      <BiSearchAlt/>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-[#222836] text-gray-300">
              <th className="py-3 px-4 text-left font-medium">Fecha</th>
              <th className="py-3 px-4 text-left font-medium">Cuenta</th>
              <th className="py-3 px-4 text-center font-medium">Tipo</th>
              <th className="py-3 px-4 text-right font-medium">Valor</th>
              <th className="py-3 px-4 text-left font-medium">Destino</th>
              <th className="py-3 px-4 text-center font-medium">Usuario</th>
            </tr>
          </thead>

          <tbody>
            {[1, 2, 3].map((i) => (
              <tr
                key={i}
                className="bg-[#262B3A] border-b border-[#2F3547] hover:bg-[#2C3142] transition"
              >
                <td className="py-2 px-2">05-06-2025</td>
                <td className="py-2 px-2">Bancolombia</td>
                <td className="py-2 px-2">
                  <div className="flex justify-center">
                    <FaArrowRightArrowLeft className="text-[#00E2A8]" />
                  </div>
                </td>
                <td className="py-2 px-2 text-right text-[#00E2A8] font-semibold">
                  $1.500.000
                </td>
                <td className="py-2 px-2">Nómina</td>
                <td className="py-2 px-2">
                  <div className="flex justify-center">
                    <Foto />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
