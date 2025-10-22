import { Link } from "react-router-dom";

export default function Foto() {
  return (
    <div className="object-cover w-10 mt-2 mb-2 mr-1">
      <Link to={"/perfil"}>
        <img className="rounded-full border-1" src="https://randomuser.me/api/portraits/men/61.jpg" alt="UserPhoto" />
      </Link>
    </div>
  )
}
