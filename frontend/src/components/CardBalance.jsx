export default function CardBalance() {
  return (
    <div className="flex flex-wrap justify-center gap-6 text-lg text-white">
      <div className="flex flex-col items-center rounded-2xl border border-[#00E2A8] h-24 bg-[#1C1F2A] gap-2 p-4 w-full sm:w-[45%] lg:w-[30%]">
        <h2>Ingreso:</h2>
        <p>$50.000.000</p>
      </div>

      <div className="flex flex-col items-center rounded-2xl border border-[#00E2A8] h-24 bg-[#1C1F2A] gap-2 p-4 w-full sm:w-[45%] lg:w-[30%]">
        <h2>Gasto:</h2>
        <p>$20.000.000</p>
      </div>

      <div className="flex flex-col items-center rounded-2xl border border-[#00E2A8] h-24 bg-[#1C1F2A] gap-2 p-4 w-full sm:w-[45%] lg:w-[30%]">
        <h2>Balance:</h2>
        <p>$30.000.000</p>
      </div>
    </div>
  );
}