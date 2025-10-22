import { SiMultisim } from 'react-icons/si';

export default function CardCuenta() {
  return (
    <div className="relative w-[220px] h-[140px] lg:w-[290px] lg:h-[180px] rounded-xl overflow-hidden mx-2 bg-[#ff0000] shadow-lg shadow-black">
      <div className="absolute bottom-12  right-5 z-1 flex items-center justify-center h-full text-white">
        <h3 className="text-xs font-semibold">Davivienda</h3>
      </div>
      <div className="absolute top-7 left-5 flex flex-col items-center justify-center h-full text-white">
        <h3 className="text-xs font-semibold">Yeison Lopez</h3>
        <h3 className="text-xs font-semibold">$6.956.628</h3>
      </div>
      <div className='absolute bottom-12 left-5 flex flex-col items-center justify-center h-full text-white'>
        <h3 className="text-xs font-semibold">Banco</h3>
      </div>
      <div className='absolute bottom-13 right-5'>
        <SiMultisim className='text-white text-3xl'/>
      </div>
    </div>
  );
}
