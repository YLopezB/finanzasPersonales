import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

export default function StandardLayout() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-dvh bg-[linear-gradient(-35deg,#1B1D1C_35%,#00E2A8_45%,#1B1D1C_60%)]">
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="grid md:grid-cols-[20%_80%]">
        <Sidebar isOpen={isOpen} />
        <main className="p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
