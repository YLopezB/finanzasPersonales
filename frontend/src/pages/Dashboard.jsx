import CardBalance from "../components/CardBalance";
import ConfigPerfil from "../components/ConfigPerfil";
import Foto from "../components/Foto";
import Nombre from "../components/Nombre";
import Notifications from "../components/Notifications";
import ResumenCuentas from "../components/ResumenCuentas";
import SliderCards from "../components/SliderCards";
import TablaMovimientos from "../components/TablaMovimientos";
import TituloPagina from "../components/TituloPagina";

export default function Home() {
  return (
    <div className="h-full rounded-3xl pt-3 p-8 bg-[#363a49]">
      <div className="flex flex-row justify-between mb-2">
        <TituloPagina />
        <div className="text-[#00E2A8] items-center hidden md:flex">
          <Notifications />
          <ConfigPerfil />
          <Foto />
          <Nombre />
        </div>
      </div>
      <hr className="border-t-1 border-[#7a7d8a]" />
      <div className="flex flex-col h-auto lg:flex-row gap-4 items-center">
        <SliderCards />
        <ResumenCuentas />
      </div>
        <CardBalance />
        <div className="flex justify-center">
          <TablaMovimientos/>
        </div>
    </div>
  );
}
