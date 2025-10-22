import { LuSettings } from "react-icons/lu";
import { Link } from "react-router-dom";
export default function ConfigPerfil() {
  return (
    <div className="flex mt-2 mb-2 mr-3 items-center">
      <button className="cursor-pointer">
        <Link to={"/ajuste_app"}>
          <LuSettings className="text-3xl" />
        </Link>
      </button>
    </div>
  );
}
