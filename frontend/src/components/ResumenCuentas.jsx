export default function ResumenCuentas() {
  return (
    <div className="lg:w-1/4 w-full bg-transparent p-3 flex flex-col justify-between  text-white gap-2 box-content">
      <div className="text-center p-2">
        <h3 className="text-lg">TIPO CUENTAS</h3>
      </div>
      <hr className="border-t-1 border-[#7a7d8a]" />
      <div className="flex justify-between p-2 bg-[#1C1F2A] rounded-lg">
        <p>BANCO:</p>
        <p>$25.500.000</p>
      </div>
      <div className="flex justify-between p-2 bg-[#1C1F2A] rounded-lg">
        <p>BOLSILLO:</p>
        <p>$15.500.000</p>
      </div>
      <div className="flex justify-between p-2 bg-[#1C1F2A] rounded-lg">
        <p>EFECTIVO:</p>
        <p>$5.500.000</p>
      </div>
      <hr className="border-t-1 border-[#7a7d8a]" />
      <div className="flex justify-between p-2">
        <p>TOTAL:</p>
        <p>$46.500.000</p>
      </div>
    </div>
  );
}
